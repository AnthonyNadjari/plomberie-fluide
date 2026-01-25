import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { fr } from "date-fns/locale";
import { CalendarDays, User, Mail, Phone, FileText, Send, CheckCircle, Clock, Sparkles } from "lucide-react";
import { config } from "@/config/artisan.config";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          description: formData.description,
          date: date.toLocaleDateString('fr-FR'),
          message: `Réservation demandée pour ${formData.serviceType}`,
          type: 'booking'
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      toast.success("Demande de réservation envoyée avec succès !", {
        description: "Nous vous contacterons rapidement pour confirmer votre rendez-vous."
      });

      setDate(undefined);
      setFormData({ name: "", email: "", phone: "", serviceType: "", description: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Erreur lors de l'envoi", { description: "Veuillez réessayer plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: CheckCircle, text: "Confirmation sous 2h" },
    { icon: Clock, text: "Intervention rapide" },
    { icon: Sparkles, text: "Devis gratuit" }
  ];

  return (
    <section id="reservation" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pattern-dots" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-float translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float-delayed -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <CalendarDays className="w-4 h-4 text-accent" />
            <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase">Réservation</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Prenez{" "}
            <span className="text-gradient">rendez-vous</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body mb-8">
            Choisissez une date et remplissez le formulaire pour planifier votre intervention
          </p>

          {/* Benefits badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <benefit.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-body text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Calendar Section */}
              <Card className={`lg:col-span-2 border-border bg-card shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent/20 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-orange-400 to-accent" />
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 font-display text-xl">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CalendarDays className="w-5 h-5 text-accent" />
                    </div>
                    Choisir une date
                  </CardTitle>
                  <CardDescription className="font-body">
                    Sélectionnez le jour souhaité pour l'intervention
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-8">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={fr}
                    disabled={(date) => date < new Date() || isWeekend(date)}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Form Section */}
              <Card className={`lg:col-span-3 border-border bg-card shadow-xl overflow-hidden transition-all duration-500 delay-100 hover:shadow-2xl hover:border-accent/20 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-slate-600 to-primary" />
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-xl">Vos informations</CardTitle>
                  <CardDescription className="font-body">
                    Remplissez le formulaire ci-dessous
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="font-body flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                        required
                      />
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="font-body flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="font-body flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      required
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="serviceType" className="font-body flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      Type d'intervention *
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger className="font-body transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {config.services.map((service, index) => (
                          <SelectItem key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="font-body">
                      Description du problème
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Décrivez brièvement votre besoin..."
                      rows={3}
                      className="font-body resize-none transition-all duration-300 focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group relative bg-accent hover:bg-accent-hover text-white font-body font-semibold py-6 text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 btn-magnetic overflow-hidden"
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
                          Confirmer la réservation
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center font-body">
                    * Champs obligatoires
                  </p>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
