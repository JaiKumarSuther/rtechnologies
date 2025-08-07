import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
  perspective?: number;
  scaleOnHover?: boolean;
  rotateOnHover?: boolean;
  shadowIntensity?: number;
  className?: string;
}

const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  ({ 
    children, 
    intensity = 20, 
    perspective = 1000, 
    scaleOnHover = true,
    rotateOnHover = true,
    shadowIntensity = 0.3,
    className,
    ...props 
  }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const animationRef = useRef<any | null>(null);

    useEffect(() => {
      const card = cardRef.current;
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -intensity;
        const rotateY = (x - centerX) / centerX * intensity;
        
        // Kill previous animation
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        // Create new animation
        animationRef.current = animate(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scaleOnHover ? 1.05 : 1,
          duration: 300,
          easing: 'easeOutQuad',
          update: function(anim) {
            // Add dynamic shadow based on rotation
            const shadowX = (rotateY / intensity) * shadowIntensity * 20;
            const shadowY = (rotateX / intensity) * shadowIntensity * 20;
            const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 10;
            
            card.style.boxShadow = `
              ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}),
              0 10px 30px rgba(0, 0, 0, 0.1)
            `;
          }
        });
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 600,
          easing: 'easeOutElastic(1, 0.5)',
          update: function() {
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }
        });
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('mouseenter', handleMouseEnter);
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [intensity, scaleOnHover, shadowIntensity]);

    return (
      <div
        ref={cardRef}
        className={cn(
          "relative transform-gpu transition-all duration-300 ease-out",
          "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
          "cursor-pointer overflow-hidden",
          className
        )}
        style={{
          perspective: `${perspective}px`,
          transformStyle: 'preserve-3d',
        }}
        {...props}
      >
        {/* 3D Glow Effect */}
        <div 
          className={cn(
            "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
            "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
          )}
          style={{
            opacity: isHovering ? 0.3 : 0,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* 3D Depth Effect */}
        <div 
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 0.1 : 0,
            transform: 'translateZ(1px)',
          }}
        />
      </div>
    );
  }
);

Card3D.displayName = "Card3D";

export { Card3D }; 