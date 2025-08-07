import React from 'react';
import { cn } from '@/lib/utils';

interface Text3DSimpleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  depth?: number;
  color?: string;
  shadowColor?: string;
  className?: string;
  variant?: 'subtle' | 'elegant' | 'premium';
}

const Text3DSimple: React.FC<Text3DSimpleProps> = ({
  children,
  depth = 4,
  color = '#3B82F6',
  shadowColor = '#1E40AF',
  className,
  variant = 'elegant',
  ...props
}) => {
  const getTextShadow = () => {
    switch (variant) {
      case 'subtle':
        return `
          0 1px 2px rgba(0,0,0,0.1),
          0 2px 4px rgba(0,0,0,0.1),
          0 4px 8px rgba(0,0,0,0.1),
          0 8px 16px rgba(0,0,0,0.1)
        `;
      case 'elegant':
        return `
          0 1px 0 rgba(255,255,255,0.1),
          0 2px 0 rgba(255,255,255,0.05),
          0 4px 8px rgba(0,0,0,0.2),
          0 8px 16px rgba(0,0,0,0.15),
          0 16px 32px rgba(0,0,0,0.1)
        `;
      case 'premium':
        return `
          0 1px 0 rgba(255,255,255,0.15),
          0 2px 0 rgba(255,255,255,0.1),
          0 4px 0 rgba(255,255,255,0.05),
          0 8px 16px rgba(0,0,0,0.25),
          0 16px 32px rgba(0,0,0,0.2),
          0 32px 64px rgba(0,0,0,0.15)
        `;
      default:
        return '';
    }
  };

  const getGlowEffect = () => {
    if (variant === 'premium') {
      return `
        0 0 20px ${color}25,
        0 0 40px ${color}20,
        0 0 60px ${color}15,
        0 0 80px ${color}10
      `;
    } else if (variant === 'elegant') {
      return `
        0 0 15px ${color}20,
        0 0 30px ${color}15
      `;
    }
    return `0 0 20px ${color}20`;
  };

  return (
    <div
      className={cn(
        "relative inline-block transform-gpu",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.02] hover:translate-y-[-2px] hover:rotate-y-2",
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      {...props}
    >
      {/* Main text with professional styling */}
      <div
        className="relative"
        style={{
          color: color,
          transform: 'translateZ(0)',
          zIndex: depth,
          textShadow: `${getTextShadow()}, ${getGlowEffect()}`,
          fontWeight: 'inherit',
          letterSpacing: '0.02em',
        }}
      >
        {children}
      </div>
      
      {/* Enhanced depth layers for premium variant */}
      {variant === 'premium' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              color: shadowColor,
              transform: 'translateZ(-3px)',
              opacity: 0.4,
              zIndex: depth - 1,
              textShadow: 'none',
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0"
            style={{
              color: shadowColor,
              transform: 'translateZ(-6px)',
              opacity: 0.25,
              zIndex: depth - 2,
              textShadow: 'none',
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0"
            style={{
              color: shadowColor,
              transform: 'translateZ(-9px)',
              opacity: 0.1,
              zIndex: depth - 3,
              textShadow: 'none',
            }}
          >
            {children}
          </div>
        </>
      )}
      
      {/* Enhanced depth layers for elegant variant */}
      {variant === 'elegant' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              color: shadowColor,
              transform: 'translateZ(-2px)',
              opacity: 0.3,
              zIndex: depth - 1,
              textShadow: 'none',
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0"
            style={{
              color: shadowColor,
              transform: 'translateZ(-4px)',
              opacity: 0.15,
              zIndex: depth - 2,
              textShadow: 'none',
            }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Text3DSimple; 