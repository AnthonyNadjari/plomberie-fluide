import { useEffect } from "react";
import { googleReviewsConfig } from "@/config/artisan.config";

/**
 * Composant pour intégrer Google Reviews via widget Elfsight
 * 
 * Instructions :
 * 1. Créez un compte sur https://elfsight.com/ (gratuit)
 * 2. Installez le widget "Google Reviews"
 * 3. Configurez votre Google Place ID dans le widget
 * 4. Copiez l'ID du widget
 * 5. Dans src/config/reviews.ts, mettez :
 *    - enabled: true
 *    - widgetId: "VOTRE_ID"
 */
const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Charger le script Elfsight uniquement si le widget est activé
    if (googleReviewsConfig.enabled && googleReviewsConfig.widgetId) {
      // Vérifier si le script est déjà chargé
      if (!document.querySelector('script[src*="elfsight.com"]')) {
        const script = document.createElement('script');
        script.src = 'https://apps.elfsight.com/p/platform.js';
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  // Si le widget n'est pas activé, ne rien afficher
  if (!googleReviewsConfig.enabled || !googleReviewsConfig.widgetId) {
    return null;
  }

  return (
    <div className="google-reviews-widget">
      <div className={`elfsight-app-${googleReviewsConfig.widgetId}`} />
    </div>
  );
};

export default GoogleReviewsWidget;

