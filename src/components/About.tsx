import { Award, Clock, Shield, Users, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    icon: Award,
    title: "Certifié RGE",
    description: "Artisan qualifié et assuré"
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Service d'urgence actif"
  },
  {
    icon: Shield,
    title: "Garantie 2 ans",
    description: "Travaux garantis"
  },
  {
    icon: Users,
    title: "+500 clients",
    description: "Nous font confiance"
  }
];

const commitments = [
  "Devis gratuit et transparent",
  "Équipe qualifiée et expérimentée",
  "Matériaux de haute qualité",
  "Respect des délais annoncés",
  "Service après-vente réactif"
];

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ rootMargin: "-50px" });

  return (
    <section id="a-propos" className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="inline-block text-accent font-body font-semibold tracking-wider uppercase text-sm mb-4">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-display leading-tight">
              Plus de 15 ans d'expertise à votre service
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-body mb-10">
              <p>
                Fondée sur des valeurs de qualité et de professionnalisme, notre entreprise s'est
                imposée comme une référence dans le domaine de la plomberie à Paris et en Île-de-France.
              </p>
              <p>
                Notre équipe d'artisans qualifiés met son savoir-faire au service de votre confort.
                Que ce soit pour une urgence, une installation ou une rénovation, nous garantissons
                un travail soigné et durable.
              </p>
            </div>

            {/* Commitments list */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 font-display">
                Nos engagements
              </h3>
              <ul className="space-y-3">
                {commitments.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground font-body">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Stats */}
          <div
            ref={cardsRef}
            className={`transition-all duration-700 delay-200 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-1 font-display">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial card */}
            <div className="bg-primary rounded-xl p-8 text-primary-foreground relative overflow-hidden">
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 text-8xl font-display text-white/10 leading-none">
                "
              </div>

              <p className="text-lg font-body mb-6 relative z-10 italic">
                Un service impeccable du début à la fin. L'équipe est intervenue rapidement pour
                réparer une fuite importante. Travail propre et soigné, je recommande vivement !
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold font-display text-lg">ML</span>
                </div>
                <div>
                  <div className="font-semibold font-body">Marie L.</div>
                  <div className="text-sm text-white/70 font-body">Paris 11ème</div>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
