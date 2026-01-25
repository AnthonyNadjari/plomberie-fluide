import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { fr } from "date-fns/locale";
import { CalendarDays, User, Mail, Phone, FileText, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      toast.success("Demande de réservation envoyée avec succès !", {
        description: "Nous vous contacterons rapidement pour confirmer votre rendez-vous."
      });

      setDate(undefined);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        description: ""
      });
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

  return (
    <section id="reservation" className="py-28 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-diagonal" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-accent font-body font-semibold tracking-wider uppercase text-sm mb-4">
            Réservation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Prenez rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Choisissez une date et remplissez le formulaire pour planifier votre intervention
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full" />
        </div>

        <div
          ref={formRef}
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Calendar Section */}
              <Card className="lg:col-span-2 border-border bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 font-display text-xl">
                    <CalendarDays className="w-5 h-5 text-accent" />
                    Choisir une date
                  </CardTitle>
                  <CardDescription className="font-body">
                    Sélectionnez le jour souhaité
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
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
              <Card className="lg:col-span-3 border-border bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-xl">Vos informations</CardTitle>
                  <CardDescription className="font-body">
                    Remplissez le formulaire ci-dessous
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="font-body"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="font-body"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      className="font-body"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="font-body flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      Type d'intervention *
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="depannage">Dépannage d'urgence</SelectItem>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="renovation">Rénovation</SelectItem>
                        <SelectItem value="fuite">Recherche de fuite</SelectItem>
                        <SelectItem value="chauffage">Chauffage</SelectItem>
                        <SelectItem value="debouchage">Débouchage</SelectItem>
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
                      className="font-body resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-body font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Confirmer la réservation
                      </>
                    )}
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
