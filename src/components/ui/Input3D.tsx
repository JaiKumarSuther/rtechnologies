import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';

export interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  intensity?: number;
  floatingLabel?: boolean;
  glowColor?: string;
  disabled?: boolean;
}

const Input3D = React.forwardRef<HTMLInputElement, Input3DProps>(
  ({ 
    className, 
    type, 
    label,
    intensity = 10,
    floatingLabel = true,
    glowColor = "rgba(59, 130, 246, 0.5)",
    disabled = false,
    value,
    onChange,
    onFocus,
    onBlur,
    ...props 
  }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef<any | null>(null);
    const prefersReducedMotion = typeof window !== 'undefined' ? 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    // Update hasValue when value prop changes
    useEffect(() => {
      setHasValue(value ? String(value).length > 0 : false);
    }, [value]);

    useEffect(() => {
      const input = inputRef.current;
      const container = containerRef.current;
      if (!input || !container || disabled) return;

      const handleFocus = (e: FocusEvent) => {
        setIsFocused(true);
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        if (!prefersReducedMotion) {
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
        } else {
          container.style.boxShadow = `
            0 0 20px ${glowColor},
            0 8px 25px rgba(0, 0, 0, 0.15)
          `;
        }
        onFocus?.(e as unknown as React.FocusEvent<HTMLInputElement>);
      };

      const handleBlur = (e: FocusEvent) => {
        setIsFocused(false);
        if (!prefersReducedMotion) {
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
        } else {
          container.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
        onBlur?.(e as unknown as React.FocusEvent<HTMLInputElement>);
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isFocused || prefersReducedMotion) return;
        
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
        if (!isFocused || prefersReducedMotion) return;
        
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

      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseExit = () => {
        setIsHovered(false);
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
      input.addEventListener('input', handleInput);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseExit);

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.removeEventListener('input', handleInput);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseExit);
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [isFocused, intensity, glowColor, disabled, prefersReducedMotion, onFocus, onBlur]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative w-full">
        <div
          ref={containerRef}
          className={cn(
            "relative transform-gpu transition-all duration-300 ease-out",
            "bg-card/90 rounded-lg border-2 border-border",
            "overflow-visible w-full",
            disabled ? "opacity-70 cursor-not-allowed" : "cursor-text",
            isHovered && !disabled ? "border-primary/50" : "",
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
              "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none",
              "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            )}
            style={{
              opacity: isFocused ? 0.3 : 0,
            }}
          />
          
          {/* Input Container */}
          <div className="relative z-10 p-4 min-h-[60px] flex flex-col justify-center">
            {floatingLabel && label && (
              <label
                className={cn(
                  "absolute left-4 transition-all duration-300 pointer-events-none z-20",
                  "text-muted-foreground",
                  (isFocused || hasValue) 
                    ? "text-xs -top-2 bg-card/95 px-2 text-primary rounded-sm shadow-sm" 
                    : "text-sm top-4",
                  disabled ? "text-muted-foreground/50" : ""
                )}
                style={{
                  maxWidth: 'calc(100% - 2rem)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  zIndex: 30
                }}
              >
                {label}
              </label>
            )}
            
            <input
              type={type}
              ref={(node) => {
                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
                inputRef.current = node;
              }}
              disabled={disabled}
              className={cn(
                "w-full bg-transparent outline-none transition-all duration-300",
                "text-foreground placeholder-muted-foreground",
                floatingLabel && label ? "pt-6" : "pt-2",
                "focus:placeholder-transparent",
                disabled ? "cursor-not-allowed" : "",
                "min-h-[20px] z-30"
              )}
              value={value}
              onChange={handleChange}
              placeholder={!floatingLabel ? label : ""}
              style={{
                paddingTop: floatingLabel && label ? '1.5rem' : '0.5rem',
                paddingBottom: '0.5rem'
              }}
              {...props}
            />
          </div>
          
          {/* 3D Depth Effect */}
          <div 
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
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