// Main configuration file for the artisan website
// This file is the single source of truth for all customizable content
// It will be generated/overwritten by the automation script for each client

import type { ArtisanConfig } from "./types";
import { tradeDefaults } from "./trade-defaults";

// Default configuration for PlombiPro (example plumber)
export const config: ArtisanConfig = {
  // Business identity
  business: {
    name: "PlombiPro",
    tradeType: "plumber",
    slogan: "L'excellence en plomberie",
    description:
      "Avec plus de 15 ans d'expérience, PlombiPro est votre partenaire de confiance pour tous vos travaux de plomberie. Notre équipe de professionnels qualifiés intervient rapidement pour résoudre tous vos problèmes, de la simple réparation à la rénovation complète de votre salle de bain.",
  },

  // Contact information
  contact: {
    phone: "+33612345678",
    phoneDisplay: "06 12 34 56 78",
    email: "contact@plombipro.fr",
  },

  // Location
  address: {
    street: "123 Avenue de la République",
    postalCode: "75011",
    city: "Paris",
    full: "123 Avenue de la République, 75011 Paris, France",
    coordinates: {
      lat: 48.8583701,
      lng: 2.3794324,
    },
  },

  // Business hours
  hours: {
    regular: "Lundi - Vendredi: 8h - 18h",
    emergency: "Urgences: 24h/24, 7j/7",
  },

  // Services - using trade defaults for plumber
  services: tradeDefaults.plumber.services,

  // Statistics
  stats: {
    experience: "+15 Ans",
    availability: "24/7",
    satisfaction: "100%",
    clients: "+500",
  },

  // Visual branding
  branding: {
    primaryColor: { h: 220, s: 60, l: 20 },  // Dark blue
    accentColor: { h: 25, s: 85, l: 50 },    // Copper/orange
    style: "modern",
    logoIcon: "Wrench",
  },

  // Feature toggles
  features: {
    booking: true,
    contactForm: true,
    gallery: false,
    quoteRequest: true,
    emergencyBanner: true,
    googleReviews: false,
  },

  // Reviews
  reviews: {
    manual: [
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
    ],
    stats: {
      averageRating: 4.9,
      totalReviews: 127,
    },
    googleWidget: {
      enabled: false,
      widgetId: "",
      placeId: "",
    },
  },

  // SEO
  seo: {
    title: "PlombiPro - Plombier Professionnel Paris | Dépannage 24/7",
    description:
      "Plombier professionnel à Paris. Dépannage 24h/24, installation, rénovation. Devis gratuit, intervention rapide. Plus de 15 ans d'expérience.",
    keywords: ["plombier paris", "dépannage plomberie", "plombier urgence"],
  },

  // Assets
  assets: {
    favicon: "/favicon.svg",
    heroImage: "/hero-plumber.jpg",
    serviceImages: [
      "/assets/service-installation.jpg",
      "/assets/service-repair.jpg",
    ],
  },
};

// Export individual sections for backwards compatibility
export const siteConfig = {
  favicon: { path: config.assets.favicon },
  address: {
    street: config.address.street,
    city: `${config.address.postalCode} ${config.address.city}`,
    full: config.address.full,
    coordinates: config.address.coordinates,
  },
  contact: {
    phone: config.contact.phone,
    email: config.contact.email,
  },
};

export const reviewStats = config.reviews.stats;
export const manualReviews = config.reviews.manual;
export const googleReviewsConfig = config.reviews.googleWidget;

// Helper to get current trade defaults
export function getCurrentTradeDefaults() {
  return tradeDefaults[config.business.tradeType];
}
