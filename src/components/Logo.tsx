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
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg relative group hover:shadow-xl transition-all duration-300`}>
        <Wrench 
          className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-foreground`}
          style={{ transform: 'rotate(15deg)' }}
        />
        <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse-slow"></div>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text`}>
          PlombiPro
        </span>
      )}
    </div>
  );
};

export default Logo;

