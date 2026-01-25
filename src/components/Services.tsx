import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, AlertCircle, Droplets, Flame, Waves, Settings, ArrowRight } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: AlertCircle,
    title: "Dépannage d'urgence",
    description: "Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes urgents de plomberie.",
    features: ["Fuite d'eau", "Canalisation bouchée", "Chauffe-eau en panne"],
    accent: true
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Installation professionnelle de tous vos équipements sanitaires et de chauffage.",
    features: ["Sanitaires", "Chauffe-eau", "Robinetterie"],
    accent: false
  },
  {
    icon: Settings,
    title: "Rénovation",
    description: "Rénovation complète de vos salles de bains et installations sanitaires.",
    features: ["Salle de bain", "Cuisine", "Chauffage"],
    accent: false
  },
  {
    icon: Droplets,
    title: "Recherche de fuite",
    description: "Détection précise et réparation de toutes fuites d'eau avec équipement moderne.",
    features: ["Détection électronique", "Caméra thermique", "Réparation garantie"],
    accent: false
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation, entretien et dépannage de systèmes de chauffage.",
    features: ["Chaudière", "Radiateurs", "Plancher chauffant"],
    accent: false
  },
  {
    icon: Waves,
    title: "Débouchage",
    description: "Débouchage professionnel de canalisations et évacuations.",
    features: ["WC", "Éviers", "Baignoire"],
    accent: true
  }
];

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="services" className="py-28 bg-background relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 pattern-grid opacity-50" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-accent font-body font-semibold tracking-wider uppercase text-sm mb-4">
            Nos expertises
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Services professionnels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Une gamme complète de services pour répondre à tous vos besoins en plomberie et chauffage
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full" />
        </div>

        {/* Services grid */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group border-border/50 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                service.accent ? 'bg-primary text-primary-foreground' : 'bg-card'
              }`}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  service.accent
                    ? 'bg-white/20'
                    : 'bg-accent/10'
                }`}>
                  <service.icon className={`w-6 h-6 ${service.accent ? 'text-white' : 'text-accent'}`} />
                </div>
                <CardTitle className={`text-xl font-display ${service.accent ? 'text-white' : 'text-foreground'}`}>
                  {service.title}
                </CardTitle>
                <CardDescription className={`text-base font-body ${service.accent ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm font-body ${service.accent ? 'text-white/90' : 'text-muted-foreground'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 ${service.accent ? 'bg-white/60' : 'bg-accent'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative h-80 rounded-xl overflow-hidden">
            <img
              src={serviceInstallation}
              alt="Installation de plomberie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Installation</h3>
              <p className="text-white/80 font-body mb-4">Équipements modernes et conformes aux normes</p>
              <div className="flex items-center text-accent font-semibold font-body group-hover:translate-x-2 transition-transform">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="group relative h-80 rounded-xl overflow-hidden">
            <img
              src={serviceRepair}
              alt="Réparation de plomberie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Dépannage</h3>
              <p className="text-white/90 font-body mb-4">Intervention rapide en moins d'une heure</p>
              <div className="flex items-center text-white font-semibold font-body group-hover:translate-x-2 transition-transform">
                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
