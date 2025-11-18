import { Card } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos de PlombiPro
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Avec plus de 15 ans d'expérience dans le domaine de la plomberie, PlombiPro s'est établi comme 
                le partenaire de confiance pour tous vos besoins en plomberie et chauffage.
              </p>
              <p>
                Notre équipe de professionnels qualifiés met un point d'honneur à fournir un service de qualité 
                supérieure, rapide et fiable. Nous intervenons 24h/24 et 7j/7 pour répondre à toutes vos urgences.
              </p>
              <p>
                Nous nous engageons à utiliser uniquement des matériaux de haute qualité et à respecter 
                les normes les plus strictes de l'industrie pour garantir votre satisfaction totale.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Certifié</h3>
              <p className="text-sm text-muted-foreground">Artisan qualifié et assuré</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Disponible 24/7</h3>
              <p className="text-sm text-muted-foreground">Service d'urgence toujours actif</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">Garantie</h3>
              <p className="text-sm text-muted-foreground">Travaux garantis 2 ans</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">+500 clients</h3>
              <p className="text-sm text-muted-foreground">Clients satisfaits</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
