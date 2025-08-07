import React from 'react';
import { motion } from 'framer-motion';

interface Textarea3DProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  intensity?: number;
  className?: string;
}

export const Textarea3D: React.FC<Textarea3DProps> = ({
  intensity = 20,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <textarea
        {...props}
        className={`
          w-full px-4 py-3 bg-card border border-border rounded-lg
          text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring
          backdrop-blur-sm transition-all duration-300 resize-none
          ${className}
        `}
        style={{
          boxShadow: `0 4px ${intensity}px rgba(0, 0, 0, 0.3)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      />
    </motion.div>
  );
}; 