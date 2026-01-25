// Trade-specific default configurations
import type { TradeType, Service, HSLColor } from "./types";

interface TradeDefaults {
  icon: string;
  services: Service[];
  terminology: {
    specialist: string;
    intervention: string;
  };
  defaultColors: {
    primary: HSLColor;
    accent: HSLColor;
  };
}

export const tradeDefaults: Record<TradeType, TradeDefaults> = {
  plumber: {
    icon: "Wrench",
    terminology: {
      specialist: "plombier",
      intervention: "intervention",
    },
    defaultColors: {
      primary: { h: 220, s: 60, l: 20 },  // Dark blue
      accent: { h: 25, s: 85, l: 50 },     // Copper/orange
    },
    services: [
      {
        icon: "AlertCircle",
        title: "Dépannage d'urgence",
        description: "Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes urgents de plomberie.",
        features: ["Fuite d'eau", "Canalisation bouchée", "Chauffe-eau en panne"],
        featured: true,
      },
      {
        icon: "Wrench",
        title: "Installation",
        description: "Installation professionnelle de tous vos équipements sanitaires et de chauffage.",
        features: ["Sanitaires", "Chauffe-eau", "Robinetterie"],
        featured: false,
      },
      {
        icon: "Settings",
        title: "Rénovation",
        description: "Rénovation complète de vos salles de bains et installations sanitaires.",
        features: ["Salle de bain", "Cuisine", "Chauffage"],
        featured: false,
      },
      {
        icon: "Droplets",
        title: "Recherche de fuite",
        description: "Détection précise et réparation de toutes fuites d'eau avec équipement moderne.",
        features: ["Détection électronique", "Caméra thermique", "Réparation garantie"],
        featured: false,
      },
      {
        icon: "Flame",
        title: "Chauffage",
        description: "Installation, entretien et dépannage de systèmes de chauffage.",
        features: ["Chaudière", "Radiateurs", "Plancher chauffant"],
        featured: false,
      },
      {
        icon: "Waves",
        title: "Débouchage",
        description: "Débouchage professionnel de canalisations et évacuations.",
        features: ["WC", "Éviers", "Baignoire"],
        featured: true,
      },
    ],
  },

  electrician: {
    icon: "Zap",
    terminology: {
      specialist: "électricien",
      intervention: "intervention",
    },
    defaultColors: {
      primary: { h: 45, s: 80, l: 50 },   // Electric yellow
      accent: { h: 220, s: 70, l: 45 },   // Blue
    },
    services: [
      {
        icon: "AlertCircle",
        title: "Dépannage électrique",
        description: "Intervention rapide 24h/24 pour tous vos problèmes électriques urgents.",
        features: ["Panne de courant", "Court-circuit", "Disjoncteur"],
        featured: true,
      },
      {
        icon: "Lightbulb",
        title: "Éclairage",
        description: "Installation et remplacement de tous types d'éclairages intérieurs et extérieurs.",
        features: ["LED", "Spots encastrés", "Éclairage extérieur"],
        featured: false,
      },
      {
        icon: "Zap",
        title: "Mise aux normes",
        description: "Mise en conformité de votre installation électrique selon les normes NF C 15-100.",
        features: ["Diagnostic", "Tableau électrique", "Certification"],
        featured: false,
      },
      {
        icon: "Home",
        title: "Domotique",
        description: "Installation de systèmes domotiques pour une maison connectée.",
        features: ["Volets roulants", "Thermostat connecté", "Interphones"],
        featured: false,
      },
      {
        icon: "Shield",
        title: "Sécurité",
        description: "Installation de systèmes de sécurité électrique pour votre habitation.",
        features: ["Alarme", "Vidéosurveillance", "Détecteurs"],
        featured: false,
      },
      {
        icon: "Battery",
        title: "Bornes de recharge",
        description: "Installation de bornes de recharge pour véhicules électriques.",
        features: ["Wallbox", "Borne extérieure", "Raccordement"],
        featured: true,
      },
    ],
  },

  roofer: {
    icon: "Home",
    terminology: {
      specialist: "couvreur",
      intervention: "intervention",
    },
    defaultColors: {
      primary: { h: 20, s: 70, l: 35 },   // Terracotta
      accent: { h: 35, s: 80, l: 50 },    // Warm orange
    },
    services: [
      {
        icon: "AlertCircle",
        title: "Réparation urgente",
        description: "Intervention rapide pour fuites et dégâts sur votre toiture.",
        features: ["Fuite de toit", "Tuiles cassées", "Bâchage d'urgence"],
        featured: true,
      },
      {
        icon: "Home",
        title: "Rénovation toiture",
        description: "Rénovation complète ou partielle de votre couverture.",
        features: ["Tuiles", "Ardoises", "Zinc"],
        featured: false,
      },
      {
        icon: "Droplets",
        title: "Étanchéité",
        description: "Travaux d'étanchéité pour toits plats et terrasses.",
        features: ["Membrane", "Résine", "Isolation"],
        featured: false,
      },
      {
        icon: "Wind",
        title: "Zinguerie",
        description: "Installation et réparation de tous éléments de zinguerie.",
        features: ["Gouttières", "Chéneaux", "Descentes"],
        featured: false,
      },
      {
        icon: "Sun",
        title: "Velux & fenêtres de toit",
        description: "Pose et remplacement de fenêtres de toit.",
        features: ["Velux", "Puits de lumière", "Lanterneaux"],
        featured: false,
      },
      {
        icon: "Thermometer",
        title: "Isolation",
        description: "Isolation thermique de votre toiture pour économies d'énergie.",
        features: ["Combles perdus", "Rampants", "Sarking"],
        featured: true,
      },
    ],
  },

  painter: {
    icon: "Paintbrush",
    terminology: {
      specialist: "peintre",
      intervention: "chantier",
    },
    defaultColors: {
      primary: { h: 280, s: 40, l: 40 },  // Purple
      accent: { h: 340, s: 70, l: 55 },   // Rose
    },
    services: [
      {
        icon: "Home",
        title: "Peinture intérieure",
        description: "Peinture de qualité professionnelle pour tous vos espaces intérieurs.",
        features: ["Murs", "Plafonds", "Boiseries"],
        featured: true,
      },
      {
        icon: "Sun",
        title: "Peinture extérieure",
        description: "Ravalement et peinture de façades avec produits adaptés.",
        features: ["Façades", "Volets", "Portails"],
        featured: false,
      },
      {
        icon: "Layers",
        title: "Papier peint",
        description: "Pose de papier peint et revêtements muraux décoratifs.",
        features: ["Papier peint", "Vinyle", "Toile de verre"],
        featured: false,
      },
      {
        icon: "Sparkles",
        title: "Finitions décoratives",
        description: "Effets décoratifs et finitions personnalisées.",
        features: ["Stucco", "Effet béton", "Patine"],
        featured: false,
      },
      {
        icon: "Shield",
        title: "Traitement des murs",
        description: "Traitement des problèmes d'humidité et préparation des supports.",
        features: ["Anti-humidité", "Anti-moisissure", "Rebouchage"],
        featured: false,
      },
      {
        icon: "Palette",
        title: "Conseil couleurs",
        description: "Accompagnement personnalisé pour le choix des couleurs.",
        features: ["Nuancier", "Tendances", "Harmonie"],
        featured: true,
      },
    ],
  },

  hvac: {
    icon: "Thermometer",
    terminology: {
      specialist: "chauffagiste",
      intervention: "intervention",
    },
    defaultColors: {
      primary: { h: 200, s: 60, l: 40 },  // Steel blue
      accent: { h: 15, s: 80, l: 50 },    // Warm red-orange
    },
    services: [
      {
        icon: "AlertCircle",
        title: "Dépannage chauffage",
        description: "Intervention rapide pour pannes de chauffage et climatisation.",
        features: ["Chaudière en panne", "Radiateurs froids", "Clim défaillante"],
        featured: true,
      },
      {
        icon: "Flame",
        title: "Installation chaudière",
        description: "Installation de chaudières gaz, fioul et pompes à chaleur.",
        features: ["Chaudière gaz", "Pompe à chaleur", "Chaudière fioul"],
        featured: false,
      },
      {
        icon: "Snowflake",
        title: "Climatisation",
        description: "Installation et entretien de systèmes de climatisation.",
        features: ["Split", "Gainable", "Réversible"],
        featured: false,
      },
      {
        icon: "Thermometer",
        title: "Plancher chauffant",
        description: "Installation de planchers chauffants hydrauliques et électriques.",
        features: ["Hydraulique", "Électrique", "Rénovation"],
        featured: false,
      },
      {
        icon: "Wrench",
        title: "Entretien annuel",
        description: "Contrat d'entretien pour votre chaudière et climatisation.",
        features: ["Révision chaudière", "Nettoyage clim", "Certificat"],
        featured: false,
      },
      {
        icon: "Leaf",
        title: "Solutions écologiques",
        description: "Pompes à chaleur et solutions de chauffage économes.",
        features: ["PAC air-eau", "PAC air-air", "Aides financières"],
        featured: true,
      },
    ],
  },

  carpenter: {
    icon: "Hammer",
    terminology: {
      specialist: "menuisier",
      intervention: "chantier",
    },
    defaultColors: {
      primary: { h: 30, s: 50, l: 35 },   // Wood brown
      accent: { h: 45, s: 70, l: 55 },    // Golden
    },
    services: [
      {
        icon: "DoorOpen",
        title: "Portes & fenêtres",
        description: "Fabrication et pose de menuiseries intérieures et extérieures.",
        features: ["Portes", "Fenêtres", "Baies vitrées"],
        featured: true,
      },
      {
        icon: "Archive",
        title: "Placards & rangements",
        description: "Création de placards et solutions de rangement sur mesure.",
        features: ["Dressing", "Placards", "Bibliothèques"],
        featured: false,
      },
      {
        icon: "Sofa",
        title: "Mobilier sur mesure",
        description: "Conception et fabrication de meubles personnalisés.",
        features: ["Tables", "Étagères", "Meubles TV"],
        featured: false,
      },
      {
        icon: "Layers",
        title: "Parquet & plancher",
        description: "Pose et rénovation de parquets et planchers bois.",
        features: ["Parquet massif", "Stratifié", "Rénovation"],
        featured: false,
      },
      {
        icon: "Stairs",
        title: "Escaliers",
        description: "Fabrication et installation d'escaliers en bois.",
        features: ["Droit", "Tournant", "Hélicoïdal"],
        featured: false,
      },
      {
        icon: "Hammer",
        title: "Agencement",
        description: "Agencement intérieur complet pour particuliers et professionnels.",
        features: ["Cuisine", "Salle de bain", "Commerce"],
        featured: true,
      },
    ],
  },

  mason: {
    icon: "Building",
    terminology: {
      specialist: "maçon",
      intervention: "chantier",
    },
    defaultColors: {
      primary: { h: 25, s: 30, l: 45 },   // Stone gray-brown
      accent: { h: 15, s: 60, l: 50 },    // Brick red
    },
    services: [
      {
        icon: "Building",
        title: "Construction",
        description: "Construction de maisons individuelles et bâtiments.",
        features: ["Maison neuve", "Extension", "Surélévation"],
        featured: true,
      },
      {
        icon: "Home",
        title: "Rénovation",
        description: "Rénovation complète de bâtiments anciens et modernes.",
        features: ["Gros œuvre", "Murs porteurs", "Planchers"],
        featured: false,
      },
      {
        icon: "Layers",
        title: "Terrassement",
        description: "Travaux de terrassement et préparation de terrain.",
        features: ["Fondations", "VRD", "Assainissement"],
        featured: false,
      },
      {
        icon: "Grid",
        title: "Carrelage & dallage",
        description: "Pose de carrelage intérieur et dallage extérieur.",
        features: ["Carrelage", "Faïence", "Dallage"],
        featured: false,
      },
      {
        icon: "Shield",
        title: "Ravalement façade",
        description: "Ravalement et isolation thermique par l'extérieur.",
        features: ["Enduit", "ITE", "Parement"],
        featured: false,
      },
      {
        icon: "Fence",
        title: "Clôtures & murets",
        description: "Construction de clôtures, murets et aménagements extérieurs.",
        features: ["Mur de clôture", "Piliers", "Terrasse"],
        featured: true,
      },
    ],
  },

  locksmith: {
    icon: "Key",
    terminology: {
      specialist: "serrurier",
      intervention: "intervention",
    },
    defaultColors: {
      primary: { h: 210, s: 20, l: 30 },  // Dark steel
      accent: { h: 45, s: 80, l: 50 },    // Gold
    },
    services: [
      {
        icon: "AlertCircle",
        title: "Ouverture de porte",
        description: "Ouverture de porte claquée ou verrouillée 24h/24.",
        features: ["Porte claquée", "Clé perdue", "Serrure bloquée"],
        featured: true,
      },
      {
        icon: "Key",
        title: "Changement de serrure",
        description: "Remplacement de serrures pour renforcer votre sécurité.",
        features: ["Cylindre", "Serrure 3 points", "Serrure connectée"],
        featured: false,
      },
      {
        icon: "Shield",
        title: "Blindage de porte",
        description: "Blindage et renforcement de vos portes d'entrée.",
        features: ["Bloc-porte blindé", "Pivot de renfort", "Cornières"],
        featured: false,
      },
      {
        icon: "Lock",
        title: "Coffre-fort",
        description: "Installation et ouverture de coffres-forts.",
        features: ["Pose", "Ouverture", "Dépannage"],
        featured: false,
      },
      {
        icon: "Home",
        title: "Sécurisation",
        description: "Audit et renforcement de la sécurité de votre domicile.",
        features: ["Audit sécurité", "Serrure haute sécurité", "Verrou"],
        featured: false,
      },
      {
        icon: "Copy",
        title: "Reproduction de clés",
        description: "Duplication de tous types de clés avec précision.",
        features: ["Clé plate", "Clé à gorges", "Badge"],
        featured: true,
      },
    ],
  },
};

// Helper function to get trade display name in French
export function getTradeDisplayName(tradeType: TradeType): string {
  const names: Record<TradeType, string> = {
    plumber: "Plombier",
    electrician: "Électricien",
    roofer: "Couvreur",
    painter: "Peintre",
    hvac: "Chauffagiste",
    carpenter: "Menuisier",
    mason: "Maçon",
    locksmith: "Serrurier",
  };
  return names[tradeType];
}

// Helper function to get trade icon component name
export function getTradeIcon(tradeType: TradeType): string {
  return tradeDefaults[tradeType].icon;
}
