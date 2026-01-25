import { useEffect } from "react";
import { config } from "@/config/artisan.config";

/**
 * ThemeProvider injects CSS custom properties from the config
 * This allows the branding colors to be dynamic per client
 */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    const { primaryColor, accentColor } = config.branding;

    // Set primary color (dark blue by default)
    root.style.setProperty('--primary', `${primaryColor.h} ${primaryColor.s}% ${primaryColor.l}%`);
    root.style.setProperty('--primary-dark', `${primaryColor.h} ${primaryColor.s + 5}% ${primaryColor.l - 5}%`);

    // Set accent color (copper/orange by default)
    root.style.setProperty('--accent', `${accentColor.h} ${accentColor.s}% ${accentColor.l}%`);
    root.style.setProperty('--accent-hover', `${accentColor.h} ${accentColor.s + 5}% ${accentColor.l - 8}%`);

    // Update ring color to match accent
    root.style.setProperty('--ring', `${accentColor.h} ${accentColor.s}% ${accentColor.l}%`);

    // Update sidebar colors
    root.style.setProperty('--sidebar-primary', `${primaryColor.h} ${primaryColor.s}% ${primaryColor.l}%`);
    root.style.setProperty('--sidebar-ring', `${accentColor.h} ${accentColor.s}% ${accentColor.l}%`);
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
