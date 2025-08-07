import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const button3DVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl",
        destructive: "bg-gradient-to-br from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl",
        outline: "border-2 border-gray-300 bg-white text-gray-700 shadow-lg hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200",
        secondary: "bg-gradient-to-br from-gray-600 to-gray-700 text-white shadow-lg hover:shadow-xl",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
        link: "text-blue-600 underline-offset-4 hover:underline bg-transparent shadow-none",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 py-2",
        lg: "h-14 rounded-lg px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface Button3DProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button3DVariants> {
  asChild?: boolean;
  intensity?: number;
  springStiffness?: number;
  springDamping?: number;
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    intensity = 15,
    springStiffness = 120,
    springDamping = 8,
    ...props 
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isPressed, setIsPressed] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const animationRef = useRef<any | null>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!button || isPressed) return;
        
        const rect = button.getBoundingClientRect();
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
        animationRef.current = animate(button, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovering ? 1.05 : 1,
          duration: 200,
          easing: 'easeOutQuad',
          update: function() {
            // Add dynamic shadow based on rotation
            const shadowX = (rotateY / intensity) * 10;
            const shadowY = (rotateX / intensity) * 10;
            const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 15;
            
            button.style.boxShadow = `
              ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.2)
            `;
          }
        });
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animate(button, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 400,
          easing: 'easeOutElastic(1, 0.5)',
          update: function() {
            button.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
          }
        });
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseDown = () => {
        setIsPressed(true);
        if (animationRef.current) {
          animationRef.current.pause();
        }
        
        animate(button, {
          scale: 0.95,
          rotateX: 0,
          rotateY: 0,
          duration: 100,
          easing: 'easeOutQuad',
          update: function() {
            button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
          }
        });
      };

      const handleMouseUp = () => {
        setIsPressed(false);
        animate(button, {
          scale: isHovering ? 1.05 : 1,
          duration: 200,
          easing: 'easeOutElastic(1, 0.5)',
          update: function() {
            button.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
          }
        });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mousedown', handleMouseDown);
      button.addEventListener('mouseup', handleMouseUp);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mousedown', handleMouseDown);
        button.removeEventListener('mouseup', handleMouseUp);
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [intensity, isHovering, isPressed]);

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={buttonRef}
        className={cn(
          button3DVariants({ variant, size, className }),
          "transform-gpu",
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-200",
          "hover:before:opacity-100"
        )}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        {...props}
      />
    );
  }
);

Button3D.displayName = "Button3D";

export { Button3D, button3DVariants }; 