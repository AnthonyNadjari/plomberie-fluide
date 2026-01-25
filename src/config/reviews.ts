// Configuration des avis clients
// Option 1: Utiliser Google Reviews (nécessite un Google Place ID)
// Option 2: Utiliser des témoignages manuels

export interface Review {
  author: string;
  rating: number; // 1-5
  text: string;
  date?: string;
  location?: string;
  verified?: boolean;
}

// Configuration Google Reviews
// Pour activer Google Reviews :
// 1. Créez un compte sur https://elfsight.com/ (gratuit)
// 2. Installez le widget "Google Reviews"
// 3. Configurez votre Google Place ID dans le widget
// 4. Copiez l'ID du widget (ex: "abc123def456")
// 5. Mettez enabled: true et widgetId: "VOTRE_ID"
export const googleReviewsConfig = {
  enabled: false, // Mettre à true pour activer Google Reviews
  widgetId: "", // ID du widget Elfsight (ex: "abc123def456")
  // Pour trouver votre Google Place ID : https://developers.google.com/maps/documentation/places/web-service/place-id
  placeId: "", // Optionnel : votre Google Place ID pour référence
};

// Témoignages manuels (utilisés si Google Reviews est désactivé)
export const manualReviews: Review[] = [
  {
    author: "Marie L.",
    rating: 5,
    text: "Un service impeccable du début à la fin. L'équipe est intervenue rapidement pour réparer une fuite importante. Travail propre et soigné, je recommande vivement !",
    location: "Paris 11ème",
    verified: true,
  },
  {
    author: "Jean-Pierre M.",
    rating: 5,
    text: "Intervention très rapide pour un dépannage urgent un dimanche. Professionnel, courtois et efficace. Prix transparent. Je recommande sans hésitation.",
    location: "Paris 15ème",
    verified: true,
  },
  {
    author: "Sophie D.",
    rating: 5,
    text: "Rénovation complète de ma salle de bain. Travail de qualité, respect des délais et conseils avisés. Très satisfaite du résultat final.",
    location: "Paris 20ème",
    verified: true,
  },
];

// Statistiques globales (peuvent être mises à jour manuellement ou via API)
export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 127,
  // Ces valeurs peuvent être mises à jour automatiquement si Google Reviews est activé
};

