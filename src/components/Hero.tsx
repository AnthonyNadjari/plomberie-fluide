import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, Award, Star, Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

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

  return <span ref={ref} className="counter">{count}{suffix}</span>;
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 bg-gradient-animated">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 texture-noise opacity-30" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating orbs with glow */}
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-float opacity-60" />
        <div className="absolute bottom-20 right-[10%] w-[600px] h-[600px] rounded-full bg-accent/15 blur-[150px] animate-float-delayed opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] animate-float-slow opacity-40" />

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="hsl(25, 85%, 50%)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line x1="0" y1="30%" x2="100%" y2="70%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="0" y1="60%" x2="100%" y2="30%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        {/* Rotating decorative ring */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full animate-spin-slow hidden lg:block" />
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[350px] h-[350px] border border-accent/10 rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Animated badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shimmer transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-sm font-semibold text-white font-body tracking-wide">Disponible 24h/24 pour vos urgences</span>
              <Zap className="w-4 h-4 text-accent" />
            </div>

            {/* Main headline with staggered animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] font-display">
              <span
                className={`block transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                L'excellence en
              </span>
              <span
                className={`block relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <span className="text-gradient">plomberie</span>
                <svg className="absolute -bottom-2 left-0 w-[280px] h-4 overflow-visible" viewBox="0 0 280 16">
                  <path
                    d="M0,12 Q70,0 140,12 T280,12"
                    stroke="url(#underline-gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    className={`transition-all duration-1000 delay-700 ${isLoaded ? 'stroke-dashoffset-0' : ''}`}
                    style={{
                      strokeDasharray: 300,
                      strokeDashoffset: isLoaded ? 0 : 300,
                      transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
                    }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(25, 85%, 50%)" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(25, 85%, 50%)" />
                      <stop offset="100%" stopColor="hsl(35, 90%, 55%)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-white/70 mb-10 leading-relaxed font-body font-light max-w-xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Plus de <span className="text-accent font-semibold">15 ans d'expertise</span> au service de votre confort.
              Interventions rapides, travaux soignés, satisfaction garantie.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Button
                size="lg"
                onClick={scrollToReservation}
                className="group relative bg-accent hover:bg-accent-hover text-white text-lg px-8 py-7 h-auto shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-500 font-semibold font-body rounded-xl btn-magnetic glow-accent overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group text-lg px-8 py-7 h-auto border-2 border-white/30 text-white bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/50 transition-all duration-500 font-semibold font-body rounded-xl btn-magnetic"
              >
                <a href="tel:+33612345678" className="flex items-center">
                  <div className="relative mr-3">
                    <Phone className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  06 12 34 56 78
                </a>
              </Button>
            </div>

            {/* Trust badges with stagger */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-[900ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {[
                { icon: Shield, title: "Garantie 2 ans", subtitle: "Sur tous travaux" },
                { icon: Clock, title: "Intervention < 1h", subtitle: "En urgence" },
                { icon: Star, title: "5 étoiles", subtitle: "Avis clients" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-white font-semibold font-body text-sm">{item.title}</div>
                    <div className="text-white/50 text-xs font-body">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Stats & Visual */}
          <div className={`hidden lg:block relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Main glass card */}
              <div className="relative bg-white/[0.08] backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl shimmer">
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-accent/20 rounded-full blur-xl" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-5 mb-6">
                  {[
                    { value: 15, suffix: "+", label: "Années d'expérience", accent: true },
                    { value: 500, suffix: "+", label: "Clients satisfaits", accent: false },
                    { value: 24, suffix: "/7", label: "Disponibilité", accent: false },
                    { value: 100, suffix: "%", label: "Satisfaction", accent: true }
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className={`group text-center p-5 rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-default ${
                        stat.accent
                          ? 'bg-accent/20 hover:bg-accent/30'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`text-4xl font-bold mb-1 font-display transition-transform duration-300 group-hover:scale-110 ${
                        stat.accent ? 'text-accent' : 'text-white'
                      }`}>
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/60 font-body text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  {["Devis gratuit en 24h", "Paiement en 3x sans frais", "Équipe certifiée RGE"].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-white/80 font-body text-sm group hover:text-white transition-colors"
                      style={{ animationDelay: `${1200 + idx * 100}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge - bottom left */}
              <div
                className={`absolute -bottom-6 -left-6 bg-accent text-white px-6 py-4 rounded-2xl shadow-xl shadow-accent/40 flex items-center gap-3 animate-float transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold font-body">Artisan Certifié</div>
                  <div className="text-white/80 text-sm font-body">RGE & Qualibat</div>
                </div>
              </div>

              {/* Floating badge - top right */}
              <div
                className={`absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-float-delayed transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              >
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold font-body text-sm">4.9/5</span>
                <span className="text-white/60 text-sm font-body">(127 avis)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white/50 text-sm font-body">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
