import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" showText={true} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-slate-700 hover:text-primary font-medium transition-all duration-300 relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-primary font-medium transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-slate-700 hover:text-primary font-medium transition-all duration-300 relative group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className="text-slate-700 hover:text-primary font-medium transition-all duration-300 relative group"
            >
              Réservation
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-primary font-medium transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33612345678" className="flex items-center space-x-2 text-slate-700 hover:text-primary transition-all duration-300 group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">06 12 34 56 78</span>
            </a>
            <Button 
              onClick={() => scrollToSection("reservation")} 
              className="bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-primary/90 hover:via-primary hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3 bg-white/95 rounded-lg mt-2 p-4 shadow-lg">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-left text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-left text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className="text-left text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              Réservation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-slate-700 hover:text-primary transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <a href="tel:+33612345678" className="flex items-center space-x-2 text-slate-700 hover:text-primary py-2 transition-colors">
              <Phone className="w-4 h-4" />
              <span>06 12 34 56 78</span>
            </a>
            <Button onClick={() => scrollToSection("reservation")} className="bg-gradient-to-r from-primary to-accent text-white w-full font-semibold shadow-lg">
              Prendre RDV
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
