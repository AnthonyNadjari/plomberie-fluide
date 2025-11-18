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
import { CalendarIcon, Clock } from "lucide-react";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: ""
  });

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    toast.success("Demande de réservation envoyée avec succès !", {
      description: "Nous vous contacterons rapidement pour confirmer votre rendez-vous."
    });
    
    // Reset form
    setDate(undefined);
    setTimeSlot(undefined);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: ""
    });
  };

  return (
    <section id="reservation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Réserver un rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez votre créneau et remplissez le formulaire pour prendre rendez-vous
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Choisir une date
                  </CardTitle>
                  <CardDescription>Sélectionnez le jour de votre intervention</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={fr}
                    disabled={(date) => date < new Date() || isWeekend(date)}
                    className="rounded-md border border-border pointer-events-auto"
                  />
                </CardContent>
              </Card>

              {/* Time Slot & Form Section */}
              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Créneau horaire
                    </CardTitle>
                    <CardDescription>Choisissez votre créneau</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={timeSlot === "morning" ? "default" : "outline"}
                        onClick={() => setTimeSlot("morning")}
                        className={timeSlot === "morning" ? "bg-primary" : ""}
                      >
                        Matin (8h-12h)
                      </Button>
                      <Button
                        type="button"
                        variant={timeSlot === "afternoon" ? "default" : "outline"}
                        onClick={() => setTimeSlot("afternoon")}
                        className={timeSlot === "afternoon" ? "bg-primary" : ""}
                      >
                        Après-midi (14h-18h)
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
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
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-12"
              >
                Confirmer la réservation
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
