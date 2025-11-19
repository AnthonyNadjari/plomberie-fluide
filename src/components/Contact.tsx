import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          type: 'contact'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer plus tard."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Nous contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>Nous vous répondrons rapidement</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Nom complet *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.contact.phone.replace('+33', '0')}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Disponible 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 max-w-6xl mx-auto animate-fade-in">
          <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Notre localisation</CardTitle>
              <CardDescription>Trouvez-nous facilement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d${siteConfig.address.coordinates.lng}!3d${siteConfig.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAyMic0NS45IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation PlombiPro"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {siteConfig.address.full}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
