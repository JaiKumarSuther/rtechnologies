import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';

export interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  intensity?: number;
  floatingLabel?: boolean;
  glowColor?: string;
}

const Input3D = React.forwardRef<HTMLInputElement, Input3DProps>(
  ({ 
    className, 
    type, 
    label,
    intensity = 10,
    floatingLabel = true,
    glowColor = "rgba(59, 130, 246, 0.5)",
    ...props 
  }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const animationRef = useRef<any | null>(null);

    useEffect(() => {
      const input = inputRef.current;
      const container = containerRef.current;
      if (!input || !container) return;

      const handleFocus = () => {
        setIsFocused(true);
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animate(container, {
          scale: 1.02,
          rotateX: 0,
          rotateY: 0,
          duration: 300,
          easing: 'easeOutQuad',
          update: function() {
            container.style.boxShadow = `
              0 0 20px ${glowColor},
              0 8px 25px rgba(0, 0, 0, 0.15)
            `;
          }
        });
      };

      const handleBlur = () => {
        setIsFocused(false);
        animate(container, {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 300,
          easing: 'easeOutQuad',
          update: function() {
            container.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isFocused) return;
        
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -intensity;
        const rotateY = (x - centerX) / centerX * intensity;
        
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animationRef.current = animate(container, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.02,
          duration: 200,
          easing: 'easeOutQuad',
          update: function() {
            const shadowX = (rotateY / intensity) * 5;
            const shadowY = (rotateX / intensity) * 5;
            const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 20;
            
            container.style.boxShadow = `
              ${shadowX}px ${shadowY}px ${shadowBlur}px ${glowColor},
              0 8px 25px rgba(0, 0, 0, 0.15)
            `;
          }
        });
      };

      const handleMouseLeave = () => {
        if (!isFocused) return;
        
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animate(container, {
          rotateX: 0,
          rotateY: 0,
          scale: 1.02,
          duration: 300,
          easing: 'easeOutQuad',
          update: function() {
            container.style.boxShadow = `
              0 0 20px ${glowColor},
              0 8px 25px rgba(0, 0, 0, 0.15)
            `;
          }
        });
      };

      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setHasValue(target.value.length > 0);
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
      input.addEventListener('input', handleInput);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.removeEventListener('input', handleInput);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [isFocused, intensity, glowColor]);

    return (
      <div className="relative">
        <div
          ref={containerRef}
          className={cn(
            "relative transform-gpu transition-all duration-300 ease-out",
            "bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-600",
            "overflow-hidden",
            className
          )}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* 3D Glow Effect */}
          <div 
            className={cn(
              "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
              "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            )}
            style={{
              opacity: isFocused ? 0.3 : 0,
            }}
          />
          
          {/* Input Container */}
          <div className="relative z-10 p-4">
            {floatingLabel && label && (
              <label
                className={cn(
                  "absolute left-4 transition-all duration-300 pointer-events-none",
                  "text-gray-500 dark:text-gray-400",
                  (isFocused || hasValue) 
                    ? "text-xs -top-2 bg-white dark:bg-gray-800 px-2 text-blue-600 dark:text-blue-400" 
                    : "text-sm top-4"
                )}
              >
                {label}
              </label>
            )}
            
            <input
              type={type}
              ref={inputRef}
              className={cn(
                "w-full bg-transparent outline-none transition-all duration-300",
                "text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400",
                floatingLabel && label ? "pt-6" : "",
                "focus:placeholder-transparent"
              )}
              placeholder={!floatingLabel ? label : ""}
              {...props}
            />
          </div>
          
          {/* 3D Depth Effect */}
          <div 
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-300"
            style={{
              opacity: isFocused ? 0.1 : 0,
              transform: 'translateZ(1px)',
            }}
          />
        </div>
      </div>
    );
  }
);

Input3D.displayName = "Input3D";

export { Input3D }; 