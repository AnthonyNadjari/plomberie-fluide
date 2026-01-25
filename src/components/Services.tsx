import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { config } from "@/config/artisan.config";
import type { Service } from "@/config/types";

// Dynamic icon component that gets icon by name from lucide-react
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) {
    return <LucideIcons.Circle className={className} />;
  }
  return <IconComponent className={className} />;
};

// Transform config services to component format with gradient info
const getServicesWithGradient = (services: Service[]) => {
  return services.map((service, index) => ({
    ...service,
    gradient: service.featured ? "from-accent to-orange-600" : "from-primary to-slate-700"
  }));
};

const services = getServicesWithGradient(config.services);

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          services.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, idx]);
            }, idx * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-dots" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase">Nos expertises</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Services{" "}
            <span className="relative inline-block">
              <span className="text-gradient">professionnels</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path
                  d="M0,8 Q50,0 100,8 T200,8"
                  stroke="hsl(25, 85%, 50%)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Une gamme complète de services pour répondre à tous vos besoins en plomberie et chauffage
          </p>
        </div>

        {/* Services grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 cursor-default ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                service.featured
                  ? 'bg-gradient-to-br from-primary via-primary to-[hsl(220,55%,18%)] text-white border-0 shadow-xl shadow-primary/20'
                  : 'bg-card border-border hover:border-accent/30 hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated border gradient on hover */}
              {!service.featured && (
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/50 group-hover:via-accent/20 group-hover:to-accent/50 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              )}

              {/* Shimmer effect for featured cards */}
              {service.featured && <div className="absolute inset-0 shimmer" />}

              {/* Glow effect on hover */}
              <div className={`absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                service.featured ? 'bg-accent/30' : 'bg-accent/10'
              }`} />

              <CardHeader className="relative pb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  service.featured
                    ? 'bg-white/20 shadow-lg shadow-white/10'
                    : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <DynamicIcon name={service.icon} className={`w-7 h-7 transition-all duration-300 ${
                    service.featured ? 'text-white' : 'text-accent'
                  }`} />
                </div>

                <CardTitle className={`text-xl font-display transition-colors duration-300 ${
                  service.featured ? 'text-white' : 'text-foreground group-hover:text-accent'
                }`}>
                  {service.title}
                </CardTitle>

                <CardDescription className={`text-base font-body ${
                  service.featured ? 'text-white/80' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center text-sm font-body transition-all duration-300 ${
                        service.featured
                          ? 'text-white/90'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150 ${
                        service.featured ? 'bg-accent' : 'bg-accent'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator on hover */}
                <div className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${
                  service.featured ? 'bg-white/20' : 'bg-accent/10'
                }`}>
                  <ArrowRight className={`w-5 h-5 ${service.featured ? 'text-white' : 'text-accent'}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured images with parallax-like hover */}
        {config.assets.serviceImages.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              image: config.assets.serviceImages[0] || "/placeholder.svg",
              title: "Installation",
              subtitle: "Équipements modernes et conformes aux normes",
              gradient: "from-primary/95 via-primary/80 to-primary/60",
              delay: 0
            },
            {
              image: config.assets.serviceImages[1] || "/placeholder.svg",
              title: "Dépannage",
              subtitle: "Intervention rapide en moins d'une heure",
              gradient: "from-accent/95 via-accent/80 to-accent/60",
              delay: 100
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`group relative h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${800 + item.delay}ms` }}
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl font-bold text-white mb-2 font-display">{item.title}</h3>
                  <p className="text-white/80 font-body mb-4">{item.subtitle}</p>

                  <div className="flex items-center text-white font-semibold font-body opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default Services;
