import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface Select3DProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  intensity?: number;
  floatingLabel?: boolean;
  glowColor?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select3D = React.forwardRef<HTMLSelectElement, Select3DProps>(
  ({ 
    className, 
    label,
    intensity = 10,
    floatingLabel = true,
    glowColor = "rgba(59, 130, 246, 0.5)",
    options,
    placeholder = "Select an option",
    onChange,
    onFocus,
    onBlur,
    value,
    ...props 
  }, ref) => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const animationRef = useRef<any | null>(null);

    // Update hasValue when value prop changes
    useEffect(() => {
      setHasValue(value ? String(value).length > 0 : false);
    }, [value]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

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

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [isFocused, intensity, glowColor]);

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      setIsDropdownOpen(true);
      const container = containerRef.current;
      if (container) {
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
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      setIsDropdownOpen(false);
      const container = containerRef.current;
      if (container) {
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
      }
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const target = e.target;
      setHasValue(target.value.length > 0);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative">
        <div
          ref={containerRef}
          className={cn(
            "relative transform-gpu transition-all duration-300 ease-out",
            "bg-card/90 rounded-lg border-2 border-border",
            "overflow-visible",
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
          
          {/* Select Container */}
          <div className="relative z-10 p-4 min-h-[60px] flex flex-col justify-center">
            {floatingLabel && label && (
              <label
                className={cn(
                  "absolute left-4 transition-all duration-300 pointer-events-none z-20",
                  "text-muted-foreground",
                  (isFocused || hasValue) 
                    ? "text-xs -top-2 bg-card/95 px-2 text-primary rounded-sm shadow-sm" 
                    : "text-sm top-4"
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
            
            <select
              ref={(node) => {
                selectRef.current = node;
                if (typeof ref === 'function') {
                  ref(node as any);
                } else if (ref) {
                  ref.current = node as any;
                }
              }}
              className={cn(
                "w-full bg-transparent outline-none transition-all duration-300 appearance-none",
                "text-foreground",
                floatingLabel && label ? "pt-6" : "pt-2",
                "min-h-[20px] cursor-pointer",
                "z-30" // Ensure select is above other elements
              )}
              value={value || ""}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name={(props as any).name}
              style={{
                paddingTop: floatingLabel && label ? '1.5rem' : '0.5rem',
                paddingBottom: '0.5rem'
              }}
              {...props}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            {/* Custom Dropdown Arrow - moved behind the select */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-20">
              {isDropdownOpen ? (
                <ChevronUp size={20} className="text-muted-foreground" />
              ) : (
                                  <ChevronDown size={20} className="text-muted-foreground" />
              )}
            </div>
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

Select3D.displayName = "Select3D";

export { Select3D };