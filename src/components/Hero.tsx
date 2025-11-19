import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background with geometric shapes */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Logo with animation */}
          <div className="mb-8 animate-fade-in">
            <Logo size="lg" showText={true} className="justify-center md:justify-start" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Votre plombier de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              confiance
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Interventions rapides et professionnelles. Disponible 7j/7 pour tous vos besoins en plomberie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToReservation}
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Réserver en ligne
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-lg px-8 py-6 h-auto border-2 border-primary text-white bg-primary/10 hover:bg-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <a href="tel:+33612345678" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-slate-300">Disponibilité</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">+15</div>
              <div className="text-slate-300">Ans d'expérience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-slate-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
