import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="md" showText={true} className="text-white" />
            </div>
            <p className="text-slate-300">
              Votre expert en plomberie et chauffage. Service professionnel et rapide depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+33612345678" className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>06 12 34 56 78</span>
              </a>
              <a href="mailto:contact@plombipro.fr" className="flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@plombipro.fr</span>
              </a>
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Avenue de la République<br />75011 Paris</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <div className="space-y-2 text-slate-300">
              <p>Lundi - Vendredi: 8h - 18h</p>
              <p>Urgences: 24h/24, 7j/7</p>
              <p className="mt-4 text-sm">
                Service d'urgence disponible pour tous vos besoins en plomberie
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} PlombiPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
