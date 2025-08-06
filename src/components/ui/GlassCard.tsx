import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({ children, className = '', hover = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-lg p-6 relative overflow-hidden group",
        hover && "hover:shadow-glow transition-all duration-500 cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? {
        y: -5,
        scale: 1.02,
        transition: { duration: 0.3 }
      } : {}}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-brand-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      {/* Floating light effect */}
      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;