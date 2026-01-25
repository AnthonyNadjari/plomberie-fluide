import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "a-propos", label: "À propos" },
    { id: "reservation", label: "Réservation" },
    { id: "contact", label: "Contact" }
  ];

  const services = [
    "Dépannage d'urgence",
    "Installation sanitaires",
    "Recherche de fuite",
    "Chauffage",
    "Rénovation",
    "Débouchage"
  ];

  return (
    <footer ref={footerRef} className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(220,55%,18%)] to-primary" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 animate-float-delayed" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 animate-pulse-glow">
                <span className="text-white font-display font-bold text-2xl">P</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">PlombiPro</span>
            </div>
            <p className="text-white/70 font-body leading-relaxed mb-6">
              Votre expert en plomberie et chauffage depuis plus de 15 ans. Service professionnel, rapide et fiable.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold font-body text-sm">
              <Clock className="w-4 h-4" />
              Urgences 24h/24
            </div>
          </div>

          {/* Quick links */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-white/70 hover:text-accent transition-all duration-300 font-body flex items-center gap-2"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Nos services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-white/70 font-body flex items-center gap-3 group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                  <span className="group-hover:text-white/90 transition-colors duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33612345678"
                  className="group flex items-start gap-3 text-white/70 hover:text-accent transition-all duration-300 font-body"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block group-hover:text-white transition-colors">06 12 34 56 78</span>
                    <span className="text-sm text-white/50">Disponible 24/7</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@plombipro.fr"
                  className="group flex items-start gap-3 text-white/70 hover:text-accent transition-all duration-300 font-body"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block group-hover:text-white transition-colors">contact@plombipro.fr</span>
                    <span className="text-sm text-white/50">Réponse sous 24h</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-body">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block">123 Avenue de la République</span>
                  <span className="text-sm text-white/50">75011 Paris</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-body">
            &copy; {currentYear} PlombiPro. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-white/50 hover:text-accent text-sm font-body transition-colors duration-300 underline-animate">
              Mentions légales
            </button>
            <button className="text-white/50 hover:text-accent text-sm font-body transition-colors duration-300 underline-animate">
              Politique de confidentialité
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
