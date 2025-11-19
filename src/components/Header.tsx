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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" showText={true} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Réservation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33612345678" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">06 12 34 56 78</span>
            </a>
            <Button onClick={() => scrollToSection("reservation")} className="bg-accent hover:bg-accent-hover text-accent-foreground">
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Réservation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <a href="tel:+33612345678" className="flex items-center space-x-2 text-foreground py-2">
              <Phone className="w-4 h-4" />
              <span>06 12 34 56 78</span>
            </a>
            <Button onClick={() => scrollToSection("reservation")} className="bg-accent hover:bg-accent-hover text-accent-foreground w-full">
              Prendre RDV
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
