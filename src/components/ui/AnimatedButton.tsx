import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

const AnimatedButton = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  href
}: AnimatedButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden group transform-3d perspective-1000 hover-target";
  
  const variants = {
    primary: "bg-brand-gradient text-primary-foreground shadow-glow hover:shadow-glow-accent",
    secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-foreground hover:bg-secondary"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      className={buttonClasses}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Glow effect overlay */}
      <motion.div
        className="absolute inset-0 bg-brand-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </MotionComponent>
  );
};

export default AnimatedButton;