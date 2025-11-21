import { Wrench } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary via-primary/90 to-accent rounded-xl flex items-center justify-center shadow-xl shadow-primary/30 relative group hover:shadow-2xl hover:shadow-primary/40 hover:scale-110 transition-all duration-300 overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <Wrench 
          className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300`}
          style={{ transform: 'rotate(15deg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-accent/0 animate-shimmer"></div>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient`}>
          PlombiPro
        </span>
      )}
    </div>
  );
};

export default Logo;

