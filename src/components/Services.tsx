import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, AlertCircle, Droplets, Flame, Waves, Settings } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

const services = [
  {
    icon: AlertCircle,
    title: "Dépannage d'urgence",
    description: "Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes urgents de plomberie.",
    features: ["Fuite d'eau", "Canalisation bouchée", "Chauffe-eau en panne"]
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Installation professionnelle de tous vos équipements sanitaires et de chauffage.",
    features: ["Sanitaires", "Chauffe-eau", "Robinetterie"]
  },
  {
    icon: Settings,
    title: "Rénovation",
    description: "Rénovation complète de vos salles de bains et installations sanitaires.",
    features: ["Salle de bain", "Cuisine", "Chauffage"]
  },
  {
    icon: Droplets,
    title: "Recherche de fuite",
    description: "Détection précise et réparation de toutes fuites d'eau avec équipement moderne.",
    features: ["Détection électronique", "Caméra thermique", "Réparation garantie"]
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation, entretien et dépannage de systèmes de chauffage.",
    features: ["Chaudière", "Radiateurs", "Plancher chauffant"]
  },
  {
    icon: Waves,
    title: "Débouchage",
    description: "Débouchage professionnel de canalisations et évacuations.",
    features: ["WC", "Éviers", "Baignoire"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos besoins en plomberie et chauffage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={serviceInstallation} 
              alt="Installation de plomberie" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div className="text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">Installation</h3>
                <p className="text-primary-foreground/90">Équipements modernes et conformes</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={serviceRepair} 
              alt="Réparation de plomberie" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-8">
              <div className="text-accent-foreground">
                <h3 className="text-2xl font-bold mb-2">Dépannage</h3>
                <p className="text-accent-foreground/90">Intervention rapide garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
