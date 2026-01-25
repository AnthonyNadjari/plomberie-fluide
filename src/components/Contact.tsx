import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Clock, Send, ArrowRight, MessageSquare, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Erreur lors de l'envoi", { description: "Veuillez réessayer plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: siteConfig.contact.phone.replace('+33', '0'),
      link: `tel:${siteConfig.contact.phone}`,
      description: "Disponible 24h/24",
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
      description: "Réponse sous 24h",
      color: "primary"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: siteConfig.address.city,
      link: null,
      description: "Paris & Île-de-France",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h",
      link: null,
      description: "Urgences 24h/24",
      color: "primary"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pattern-grid" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase">Contact</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Nous{" "}
            <span className="text-gradient">contacter</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Une question ? N'hésitez pas à nous contacter, nous vous répondrons rapidement
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <Card className={`lg:col-span-3 border-border bg-card shadow-xl overflow-hidden transition-all duration-700 delay-200 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-slate-600 to-primary" />
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
                        className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
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
                        className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
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
                      className="font-body resize-none transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group relative bg-primary hover:bg-primary-dark text-primary-foreground font-body font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-500 btn-magnetic overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group bg-card rounded-2xl p-5 border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      info.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <info.icon className={`w-5 h-5 ${info.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
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

              {/* Emergency CTA */}
              <div
                className={`relative bg-accent rounded-2xl p-6 text-white overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-orange-500 to-accent opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <h3 className="font-bold text-lg font-display">Urgence plomberie ?</h3>
                  </div>
                  <p className="text-white/90 mb-4 font-body text-sm">
                    Notre équipe est disponible 24h/24 pour vos urgences.
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-accent px-5 py-3 rounded-xl font-semibold font-body transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            className={`mt-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="border-border bg-card overflow-hidden shadow-xl">
              <CardHeader className="pb-0">
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Notre zone d'intervention
                </CardTitle>
                <CardDescription className="font-body">
                  Paris et toute l'Île-de-France
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <div className="w-full h-[350px] relative group">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d${siteConfig.address.coordinates.lng}!3d${siteConfig.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAyMic0NS45IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation PlombiPro"
                    className="transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-accent/20 transition-all duration-500 rounded-b-lg" />
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
