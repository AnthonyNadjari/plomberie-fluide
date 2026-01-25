import { useEffect } from "react";
import { config } from "@/config/artisan.config";

/**
 * SEOHead updates document meta tags from config at runtime
 * This ensures meta tags match the config even for client-side rendering
 */
const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title = config.seo.title;

    // Helper to update or create meta tag
    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.content = content;
      }
    };

    // Update standard meta tags
    updateMeta('meta[name="description"]', config.seo.description);
    updateMeta('meta[name="author"]', config.business.name);

    // Update Open Graph tags
    updateMeta('meta[property="og:title"]', config.seo.title);
    updateMeta('meta[property="og:description"]', config.seo.description);
    updateMeta('meta[property="og:image:alt"]', `${config.business.name} - ${config.business.slogan}`);

    // Update Twitter tags
    updateMeta('meta[name="twitter:title"]', config.seo.title);
    updateMeta('meta[name="twitter:description"]', config.seo.description);
    updateMeta('meta[name="twitter:image:alt"]', `${config.business.name} - ${config.business.slogan}`);

    // Update theme color based on primary color
    const { primaryColor } = config.branding;
    const themeColorHex = hslToHex(primaryColor.h, primaryColor.s, primaryColor.l);
    updateMeta('meta[name="theme-color"]', themeColorHex);

  }, []);

  return null;
};

// Helper function to convert HSL to Hex
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default SEOHead;
