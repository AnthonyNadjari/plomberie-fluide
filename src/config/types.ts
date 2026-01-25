// Types for the artisan website configuration

export type TradeType =
  | "plumber"
  | "electrician"
  | "roofer"
  | "painter"
  | "hvac"
  | "carpenter"
  | "mason"
  | "locksmith";

export type StyleType = "modern" | "classic" | "minimal";

export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date?: string;
  location?: string;
  verified?: boolean;
}

export interface ArtisanConfig {
  // Business identity
  business: {
    name: string;
    tradeType: TradeType;
    slogan: string;
    description: string;
  };

  // Contact information
  contact: {
    phone: string;        // International format: +33612345678
    phoneDisplay: string; // Display format: 06 12 34 56 78
    email: string;
  };

  // Location
  address: {
    street: string;
    postalCode: string;
    city: string;
    full: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  // Business hours
  hours: {
    regular: string;
    emergency: string;
  };

  // Services offered
  services: Service[];

  // Statistics / Social proof
  stats: {
    experience: string;
    availability: string;
    satisfaction: string;
    clients: string;
  };

  // Visual branding
  branding: {
    primaryColor: HSLColor;
    accentColor: HSLColor;
    style: StyleType;
    logoIcon: string;
  };

  // Feature toggles
  features: {
    booking: boolean;
    contactForm: boolean;
    gallery: boolean;
    quoteRequest: boolean;
    emergencyBanner: boolean;
    googleReviews: boolean;
  };

  // Reviews
  reviews: {
    manual: Review[];
    stats: {
      averageRating: number;
      totalReviews: number;
    };
    googleWidget?: {
      enabled: boolean;
      widgetId: string;
      placeId: string;
    };
  };

  // SEO / Meta
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };

  // Assets paths
  assets: {
    favicon: string;
    heroImage?: string;
    serviceImages: string[];
  };
}

// Helper type for partial config (for merging with defaults)
export type PartialArtisanConfig = Partial<ArtisanConfig>;
