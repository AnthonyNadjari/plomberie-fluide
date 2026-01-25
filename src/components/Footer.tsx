import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl text-white">PlombiPro</span>
            </div>
            <p className="text-white/70 font-body leading-relaxed mb-6">
              Votre expert en plomberie et chauffage depuis plus de 15 ans. Service professionnel, rapide et fiable.
            </p>
            <div className="flex items-center gap-2 text-accent font-semibold font-body">
              <Clock className="w-4 h-4" />
              Urgences 24h/24
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-accent transition-colors font-body flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Nos services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/70 font-body flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33612345678"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors font-body group"
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>06 12 34 56 78</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@plombipro.fr"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors font-body group"
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>contact@plombipro.fr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 font-body">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Avenue de la République<br />75011 Paris</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-body">
            &copy; {currentYear} PlombiPro. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-sm font-body">
            <button className="hover:text-accent transition-colors">Mentions légales</button>
            <button className="hover:text-accent transition-colors">Politique de confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
