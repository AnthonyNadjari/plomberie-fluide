import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, AlertCircle, Droplets, Flame, Waves, Settings } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos besoins en plomberie et chauffage
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-3 group bg-card/60 backdrop-blur-md border-2 hover:border-primary/20 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-accent/5 transition-all duration-500"></div>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-all duration-300 relative z-10 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover:scale-125 transition-transform shadow-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group hover:scale-[1.03] transition-all duration-500 border-2 border-transparent hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={serviceInstallation} 
              alt="Installation de plomberie" 
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent flex items-end p-8 group-hover:from-primary group-hover:via-primary/80 transition-all duration-300">
              <div className="text-primary-foreground transform group-hover:translate-y-0 translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Installation</h3>
                <p className="text-primary-foreground/90">Équipements modernes et conformes</p>
              </div>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group hover:scale-[1.03] transition-all duration-500 border-2 border-transparent hover:border-accent/30">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src={serviceRepair} 
              alt="Réparation de plomberie" 
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/70 to-transparent flex items-end p-8 group-hover:from-accent group-hover:via-accent/80 transition-all duration-300">
              <div className="text-accent-foreground transform group-hover:translate-y-0 translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Dépannage</h3>
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
