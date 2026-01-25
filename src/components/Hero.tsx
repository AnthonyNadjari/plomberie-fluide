import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(220,55%,18%)] to-primary" />

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        {/* Copper accent glow - subtle */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2" />

        {/* Diagonal decorative lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-[60%] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent transform rotate-[30deg] origin-top-right translate-x-[200px]" />
          <div className="absolute top-0 right-0 w-px h-[80%] bg-gradient-to-b from-white/10 via-white/5 to-transparent transform rotate-[25deg] origin-top-right translate-x-[400px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/90 font-body tracking-wide">Disponible 24h/24 pour vos urgences</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-display">
              L'excellence en{" "}
              <span className="relative">
                <span className="text-gradient-copper">plomberie</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="url(#copper-gradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="copper-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(25, 75%, 47%)" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="hsl(25, 75%, 47%)" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="hsl(25, 75%, 47%)" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed font-body font-light max-w-xl">
              Plus de 15 ans d'expertise au service de votre confort. Interventions rapides, travaux soignés, satisfaction garantie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                onClick={scrollToReservation}
                className="bg-accent hover:bg-accent-hover text-white text-lg px-8 py-6 h-auto shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold font-body group rounded-lg"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 h-auto border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 font-semibold font-body group rounded-lg"
              >
                <a href="tel:+33612345678" className="flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  06 12 34 56 78
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white font-semibold font-body">Garantie 2 ans</div>
                  <div className="text-white/50 text-sm font-body">Sur tous travaux</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white font-semibold font-body">Intervention rapide</div>
                  <div className="text-white/50 text-sm font-body">Dans l'heure</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main stat card */}
              <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-xl bg-white/5">
                    <div className="text-5xl font-bold text-accent mb-2 font-display">15+</div>
                    <div className="text-white/70 font-body text-sm">Années d'expérience</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5">
                    <div className="text-5xl font-bold text-white mb-2 font-display">500+</div>
                    <div className="text-white/70 font-body text-sm">Clients satisfaits</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5">
                    <div className="text-5xl font-bold text-white mb-2 font-display">24/7</div>
                    <div className="text-white/70 font-body text-sm">Disponibilité</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5">
                    <div className="text-5xl font-bold text-accent mb-2 font-display">100%</div>
                    <div className="text-white/70 font-body text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-3 rounded-xl shadow-lg shadow-accent/30 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold font-body">Artisan certifié RGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
