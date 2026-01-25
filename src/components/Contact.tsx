import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: siteConfig.contact.phone.replace('+33', '0'),
      link: `tel:${siteConfig.contact.phone}`,
      description: "Disponible 24h/24"
    },
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: `${siteConfig.address.street}, ${siteConfig.address.city}`,
      link: null,
      description: "Paris & Île-de-France"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h",
      link: null,
      description: "Urgences 24h/24"
    }
  ];

  return (
    <section id="contact" className="py-28 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-accent font-body font-semibold tracking-wider uppercase text-sm mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Nous contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Une question ? N'hésitez pas à nous contacter, nous vous répondrons rapidement
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div
              ref={formRef}
              className={`lg:col-span-3 transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <Card className="border-border bg-card h-full">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Envoyez-nous un message</CardTitle>
                  <CardDescription className="font-body">
                    Nous vous répondrons dans les plus brefs délais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name" className="font-body">Nom complet *</Label>
                        <Input
                          id="contact-name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jean Dupont"
                          className="font-body"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email" className="font-body">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jean.dupont@email.com"
                          className="font-body"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="font-body">Message *</Label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Décrivez votre demande..."
                        rows={6}
                        className="font-body resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-body font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div
              ref={infoRef}
              className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-300 ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 font-display">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors font-body flex items-center gap-1 group/link"
                        >
                          {info.content}
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-body">{info.content}</p>
                      )}
                      <p className="text-sm text-muted-foreground/70 mt-1 font-body">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-bold text-lg mb-2 font-display">Urgence plomberie ?</h3>
                <p className="text-white/80 mb-4 font-body text-sm">
                  Notre équipe est disponible 24h/24 pour vos urgences.
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg font-semibold font-body transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card className="border-border bg-card overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="font-display text-xl">Notre zone d'intervention</CardTitle>
                <CardDescription className="font-body">
                  Paris et toute l'Île-de-France
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <div className="w-full h-[350px]">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
