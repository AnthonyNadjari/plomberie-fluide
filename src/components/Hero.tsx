import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Services de plomberie professionnels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Votre plombier de confiance
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Interventions rapides et professionnelles. Disponible 7j/7 pour tous vos besoins en plomberie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToReservation}
              className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 h-auto"
            >
              Réserver en ligne
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="hero"
              asChild
              className="text-lg px-8 py-6 h-auto"
            >
              <a href="tel:+33612345678" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">+15</div>
              <div className="text-primary-foreground/80">Ans d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-primary-foreground/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
