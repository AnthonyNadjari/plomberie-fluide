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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Floating geometric shapes - More vibrant */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional animated particles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Logo with animation */}
          <div className="mb-8 animate-fade-in">
            <Logo size="lg" showText={true} className="justify-center md:justify-start" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Votre plombier de{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
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
              className="bg-gradient-to-r from-accent via-accent/90 to-accent hover:from-accent/90 hover:via-accent hover:to-accent/80 text-white text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 font-semibold group"
            >
              Réserver en ligne
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-lg px-10 py-7 h-auto border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 font-semibold group"
            >
              <a href="tel:+33612345678" className="flex items-center">
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Appeler maintenant
              </a>
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-slate-300 group-hover:text-white transition-colors">Disponibilité</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">+15</div>
              <div className="text-slate-300 group-hover:text-white transition-colors">Ans d'expérience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-slate-300 group-hover:text-white transition-colors">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
