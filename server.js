import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Email endpoint for contact form
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message, type = 'contact' } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'contact@plombipro.fr';

    let emailSubject = '';
    let emailHtml = '';

    if (type === 'booking') {
      const { phone, serviceType, description, date } = req.body;
      emailSubject = `🔧 Nouvelle demande de réservation - ${name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1f2937; 
              background-color: #f3f4f6;
              padding: 20px;
            }
            .email-wrapper { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center;
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 700;
              margin-bottom: 10px;
            }
            .header-icon {
              font-size: 48px;
              margin-bottom: 15px;
            }
            .content { 
              padding: 40px 30px; 
            }
            .info-section {
              margin-bottom: 30px;
            }
            .info-section-title {
              font-size: 18px;
              font-weight: 600;
              color: #3b82f6;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 2px solid #e5e7eb;
            }
            .info-row {
              display: flex;
              padding: 12px 0;
              border-bottom: 1px solid #f3f4f6;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .info-label { 
              font-weight: 600; 
              color: #6b7280; 
              min-width: 160px;
              font-size: 14px;
            }
            .info-value { 
              color: #1f2937; 
              font-size: 15px;
              flex: 1;
            }
            .description-box {
              background: #f9fafb;
              border-left: 4px solid #3b82f6;
              padding: 20px;
              border-radius: 8px;
              margin-top: 15px;
            }
            .description-box p {
              color: #374151;
              line-height: 1.8;
              margin: 0;
            }
            .footer { 
              background: #f9fafb; 
              padding: 30px; 
              text-align: center; 
              color: #6b7280; 
              font-size: 13px;
              border-top: 1px solid #e5e7eb;
            }
            .footer-brand {
              font-weight: 700;
              color: #3b82f6;
              font-size: 16px;
              margin-bottom: 8px;
            }
            @media only screen and (max-width: 600px) {
              .content { padding: 30px 20px; }
              .header { padding: 30px 20px; }
              .info-row { flex-direction: column; }
              .info-label { margin-bottom: 5px; }
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <div class="header-icon">🔧</div>
              <h1>Nouvelle demande de réservation</h1>
              <p style="opacity: 0.9; font-size: 14px; margin-top: 5px;">PlombiPro</p>
            </div>
            <div class="content">
              <div class="info-section">
                <div class="info-section-title">Informations client</div>
                <div class="info-row">
                  <div class="info-label">Nom complet</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Adresse email</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Téléphone</div>
                  <div class="info-value">${phone || 'Non fourni'}</div>
                </div>
              </div>

              <div class="info-section">
                <div class="info-section-title">Détails de la réservation</div>
                <div class="info-row">
                  <div class="info-label">Type de service</div>
                  <div class="info-value">${serviceType || 'Non spécifié'}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Date souhaitée</div>
                  <div class="info-value">${date || 'Non spécifiée'}</div>
                </div>
              </div>

              ${description ? `
              <div class="info-section">
                <div class="info-section-title">Description</div>
                <div class="description-box">
                  <p>${description}</p>
                </div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <div class="footer-brand">PlombiPro</div>
              <p style="margin: 0;">Service professionnel de plomberie</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.8;">Interventions rapides 24/7</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      emailSubject = `💬 Nouveau message de contact - ${name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1f2937; 
              background-color: #f3f4f6;
              padding: 20px;
            }
            .email-wrapper { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center;
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 700;
              margin-bottom: 10px;
            }
            .header-icon {
              font-size: 48px;
              margin-bottom: 15px;
            }
            .content { 
              padding: 40px 30px; 
            }
            .info-section {
              margin-bottom: 30px;
            }
            .info-section-title {
              font-size: 18px;
              font-weight: 600;
              color: #3b82f6;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 2px solid #e5e7eb;
            }
            .info-row {
              display: flex;
              padding: 12px 0;
              border-bottom: 1px solid #f3f4f6;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .info-label { 
              font-weight: 600; 
              color: #6b7280; 
              min-width: 120px;
              font-size: 14px;
            }
            .info-value { 
              color: #1f2937; 
              font-size: 15px;
              flex: 1;
            }
            .message-box {
              background: #f9fafb;
              border-left: 4px solid #3b82f6;
              padding: 25px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .message-box-title {
              font-weight: 600;
              color: #3b82f6;
              font-size: 16px;
              margin-bottom: 15px;
            }
            .message-box-content {
              color: #374151;
              line-height: 1.8;
              white-space: pre-wrap;
              font-size: 15px;
            }
            .footer { 
              background: #f9fafb; 
              padding: 30px; 
              text-align: center; 
              color: #6b7280; 
              font-size: 13px;
              border-top: 1px solid #e5e7eb;
            }
            .footer-brand {
              font-weight: 700;
              color: #3b82f6;
              font-size: 16px;
              margin-bottom: 8px;
            }
            @media only screen and (max-width: 600px) {
              .content { padding: 30px 20px; }
              .header { padding: 30px 20px; }
              .info-row { flex-direction: column; }
              .info-label { margin-bottom: 5px; }
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <div class="header-icon">💬</div>
              <h1>Nouveau message de contact</h1>
              <p style="opacity: 0.9; font-size: 14px; margin-top: 5px;">PlombiPro</p>
            </div>
            <div class="content">
              <div class="info-section">
                <div class="info-section-title">Informations client</div>
                <div class="info-row">
                  <div class="info-label">Nom complet</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Adresse email</div>
                  <div class="info-value">${email}</div>
                </div>
              </div>

              <div class="info-section">
                <div class="info-section-title">Message</div>
                <div class="message-box">
                  <div class="message-box-title">Contenu du message</div>
                  <div class="message-box-content">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="footer-brand">PlombiPro</div>
              <p style="margin: 0;">Service professionnel de plomberie</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.8;">Interventions rapides 24/7</p>
            </div>
          </div>
        </body>
        </html>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'PlombiPro <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server also accessible on http://127.0.0.1:${PORT}`);
});

