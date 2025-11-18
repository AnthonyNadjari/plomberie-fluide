import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">PlombiPro</span>
            </div>
            <p className="text-primary-foreground/80">
              Votre expert en plomberie et chauffage. Service professionnel et rapide depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+33612345678" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>06 12 34 56 78</span>
              </a>
              <a href="mailto:contact@plombipro.fr" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@plombipro.fr</span>
              </a>
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Avenue de la République<br />75011 Paris</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Lundi - Vendredi: 8h - 18h</p>
              <p>Urgences: 24h/24, 7j/7</p>
              <p className="mt-4 text-sm">
                Service d'urgence disponible pour tous vos besoins en plomberie
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} PlombiPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
