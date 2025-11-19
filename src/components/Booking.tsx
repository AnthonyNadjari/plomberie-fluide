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
import { CalendarIcon } from "lucide-react";

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
      
      // Reset form
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

  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Réserver un rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez une date et remplissez le formulaire pour prendre rendez-vous
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Choisir une date
                  </CardTitle>
                  <CardDescription>Sélectionnez le jour de votre intervention</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center p-6">
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
              <div className="space-y-6">
                <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
                  <CardHeader>
                    <CardTitle>Vos informations</CardTitle>
                    <CardDescription>Remplissez le formulaire de contact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean.dupont@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="serviceType">Type d'intervention *</Label>
                      <Select 
                        value={formData.serviceType} 
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger>
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
                    
                    <div>
                      <Label htmlFor="description">Description du problème</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Décrivez brièvement votre besoin..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Confirmer la réservation"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                * Champs obligatoires. Nous vous contacterons pour confirmer votre rendez-vous.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
