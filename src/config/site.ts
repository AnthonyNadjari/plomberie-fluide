export const siteConfig = {
  // Configuration du favicon (logo de l'onglet)
  favicon: {
    // Chemin vers le fichier favicon (peut être .svg, .png, .ico)
    // Pour changer le favicon, remplacez simplement le fichier dans /public/favicon.svg
    path: "/favicon.svg",
    // Alternative: vous pouvez utiliser une URL externe
    // path: "https://example.com/logo.svg"
  },
  address: {
    street: "123 Avenue de la République",
    city: "75011 Paris",
    full: "123 Avenue de la République, 75011 Paris, France",
    // Coordonnées pour Google Maps (latitude, longitude)
    // Pour changer l'adresse, modifiez ces valeurs
    coordinates: {
      lat: 48.8583701,
      lng: 2.3794324
    }
  },
  contact: {
    phone: "+33612345678",
    email: "contact@plombipro.fr"
  }
};

