import { Card } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ rootMargin: "-50px" });

  return (
    <section id="a-propos" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              À propos de PlombiPro
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Avec plus de 15 ans d'expérience dans le domaine de la plomberie, PlombiPro s'est établi comme 
                le partenaire de confiance pour tous vos besoins en plomberie et chauffage.
              </p>
              <p>
                Notre équipe de professionnels qualifiés met un point d'honneur à fournir un service de qualité 
                supérieure, rapide et fiable. Nous intervenons 24h/24 et 7j/7 pour répondre à toutes vos urgences.
              </p>
              <p>
                Nous nous engageons à utiliser uniquement des matériaux de haute qualité et à respecter 
                les normes les plus strictes de l'industrie pour garantir votre satisfaction totale.
              </p>
            </div>
          </div>
          
          <div 
            ref={cardsRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <Card className="p-6 text-center border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-3 group bg-card/60 backdrop-blur-md border-2 hover:border-primary/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <Award className="w-7 h-7 text-primary group-hover:text-accent transition-all duration-300 relative z-10 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors relative z-10">Certifié</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">Artisan qualifié et assuré</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-3 group bg-card/60 backdrop-blur-md border-2 hover:border-primary/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <Clock className="w-7 h-7 text-primary group-hover:text-accent transition-all duration-300 relative z-10 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors relative z-10">Disponible 24/7</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">Service d'urgence toujours actif</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-3 group bg-card/60 backdrop-blur-md border-2 hover:border-accent/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-accent/30 via-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <Shield className="w-7 h-7 text-accent group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors relative z-10">Garantie</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">Travaux garantis 2 ans</p>
            </Card>
            
            <Card className="p-6 text-center border-border hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-3 group bg-card/60 backdrop-blur-md border-2 hover:border-accent/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-500"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-accent/30 via-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <Users className="w-7 h-7 text-accent group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors relative z-10">+500 clients</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">Clients satisfaits</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
