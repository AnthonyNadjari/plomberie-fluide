import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "a-propos", label: "À propos" },
    { id: "reservation", label: "Réservation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("accueil")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-display font-bold text-xl">P</span>
            </div>
            <span className={`font-display font-bold text-xl transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              PlombiPro
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+33612345678"
              className={`flex items-center gap-2 font-body font-medium transition-colors ${
                isScrolled ? 'text-foreground/70 hover:text-accent' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>06 12 34 56 78</span>
            </a>
            <Button
              onClick={() => scrollToSection("reservation")}
              className="bg-accent hover:bg-accent-hover text-white font-body font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-foreground/80 hover:text-foreground hover:bg-muted px-4 py-3 rounded-lg font-body font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="h-px bg-border my-2" />
          <a
            href="tel:+33612345678"
            className="flex items-center gap-2 text-foreground/80 hover:text-accent px-4 py-3 font-body font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>06 12 34 56 78</span>
          </a>
          <Button
            onClick={() => scrollToSection("reservation")}
            className="bg-accent hover:bg-accent-hover text-white font-body font-semibold mt-2"
          >
            Prendre RDV
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
