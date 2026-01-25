import { Award, Clock, Shield, Users, CheckCircle, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { config, manualReviews } from "@/config/artisan.config";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return count;
};

const stats = [
  { icon: Award, value: 15, suffix: "+", title: "Années", description: "d'expérience", color: "accent" },
  { icon: Clock, value: 24, suffix: "/7", title: "Disponible", description: "pour vous", color: "primary" },
  { icon: Shield, value: 2, suffix: " ans", title: "Garantie", description: "sur travaux", color: "accent" },
  { icon: Users, value: 500, suffix: "+", title: "Clients", description: "satisfaits", color: "primary" }
];

const commitments = [
  { text: "Devis gratuit et transparent", delay: 0 },
  { text: "Équipe qualifiée et expérimentée", delay: 100 },
  { text: "Matériaux de haute qualité", delay: 200 },
  { text: "Respect des délais annoncés", delay: 300 },
  { text: "Service après-vente réactif", delay: 400 }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="a-propos" ref={sectionRef} className="py-28 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pattern-grid" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-float -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float-delayed translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase">À propos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-display leading-tight">
              Plus de{" "}
              <span className="relative inline-block">
                <span className="text-gradient">15 ans</span>
              </span>
              {" "}d'expertise à votre service
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-body mb-10">
              <p className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Fondée sur des valeurs de <span className="text-foreground font-medium">qualité et de professionnalisme</span>, notre entreprise s'est
                imposée comme une référence dans le domaine de la plomberie à Paris et en Île-de-France.
              </p>
              <p className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Notre équipe d'artisans qualifiés met son savoir-faire au service de votre confort.
                Que ce soit pour une urgence, une installation ou une rénovation, nous garantissons
                un travail <span className="text-foreground font-medium">soigné et durable</span>.
              </p>
            </div>

            {/* Commitments with staggered animation */}
            <div className={`bg-card rounded-2xl p-6 border border-border shadow-lg transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <h3 className="text-xl font-semibold text-foreground mb-5 font-display flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Nos engagements
              </h3>
              <ul className="space-y-3">
                {commitments.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 text-muted-foreground font-body group hover:text-foreground transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: `${500 + item.delay}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Stats & Testimonial */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Stats grid with animated counters */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const count = useCounter(stat.value, 2000, isVisible);
                return (
                  <div
                    key={index}
                    className={`group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      stat.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <stat.icon className={`w-6 h-6 ${stat.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                    </div>

                    <div className={`text-3xl font-bold mb-1 font-display transition-all duration-300 group-hover:scale-110 ${
                      stat.color === 'accent' ? 'text-accent' : 'text-foreground'
                    }`}>
                      {count}{stat.suffix}
                    </div>

                    <div className="text-foreground font-semibold font-body">{stat.title}</div>
                    <div className="text-sm text-muted-foreground font-body">{stat.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Testimonial card with animations */}
            <div
              className={`relative bg-primary rounded-2xl p-8 text-primary-foreground overflow-hidden transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(220,55%,22%)] to-primary opacity-50" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" />

              {/* Decorative quote */}
              <div className="absolute top-4 right-6 text-[120px] font-display text-white/5 leading-none select-none">
                "
              </div>

              <div className="relative z-10">
                {manualReviews[0] && (
                  <>
                    <p className="text-lg font-body mb-6 italic leading-relaxed">
                      {manualReviews[0].text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-xl font-bold font-display border-2 border-accent/50">
                        {manualReviews[0].author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold font-body text-lg">{manualReviews[0].author}</div>
                        {manualReviews[0].location && (
                          <div className="text-white/70 font-body text-sm">{manualReviews[0].location}</div>
                        )}
                      </div>
                    </div>

                    {/* Animated star rating */}
                    <div className="flex gap-1.5 mt-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 transition-all duration-500 ${
                            i < manualReviews[0].rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-white/20'
                          } ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`}
                          style={{ transitionDelay: `${1000 + i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
