import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate, stagger } from 'animejs';

interface Text3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  depth?: number;
  intensity?: number;
  color?: string;
  shadowColor?: string;
  className?: string;
  animateOnScroll?: boolean;
  staggerDelay?: number;
}

const Text3D = React.forwardRef<HTMLDivElement, Text3DProps>(
  ({ 
    children, 
    depth = 20, 
    intensity = 15, 
    color = '#3B82F6',
    shadowColor = '#1E40AF',
    className,
    animateOnScroll = true,
    staggerDelay = 50,
    ...props 
  }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      // Create 3D text effect using CSS
      const create3DEffect = () => {
        container.innerHTML = '';
        
        // Create the main text element
        const mainText = document.createElement('div');
        mainText.className = 'text-3d-main';
        mainText.textContent = children;
        mainText.style.cssText = `
          position: relative;
          color: ${color};
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
          text-align: inherit;
          white-space: nowrap;
          z-index: ${depth};
          transform: translateZ(0);
          transition: all 0.3s ease;
        `;
        
        // Create shadow layers for 3D effect
        const shadowLayers = [];
        for (let i = 1; i <= depth; i++) {
          const shadowLayer = document.createElement('div');
          shadowLayer.className = 'text-3d-shadow';
          shadowLayer.textContent = children;
          shadowLayer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            color: ${shadowColor};
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            text-align: inherit;
            white-space: nowrap;
            transform: translateZ(${-i}px);
            opacity: ${1 - (i / depth) * 0.9};
            z-index: ${depth - i};
            pointer-events: none;
            transition: all 0.3s ease;
          `;
          shadowLayers.push(shadowLayer);
          mainText.appendChild(shadowLayer);
        }
        
        container.appendChild(mainText);
        return { mainText, shadowLayers };
      };

      const { mainText, shadowLayers } = create3DEffect();

      // Intersection Observer for scroll animation
      if (animateOnScroll) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                animate([mainText, ...shadowLayers], {
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 1200,
                  delay: stagger(staggerDelay),
                  easing: 'easeOutElastic(1, 0.5)',
                });
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(container);
        return () => observer.disconnect();
      } else {
        setIsVisible(true);
        animate([mainText, ...shadowLayers], {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 1200,
          delay: stagger(staggerDelay),
          easing: 'easeOutElastic(1, 0.5)',
        });
      }
    }, [children, depth, color, shadowColor, animateOnScroll, staggerDelay]);

    // Mouse interaction for 3D tilt effect
    useEffect(() => {
      const container = containerRef.current;
      if (!container || !isVisible) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovering) return;
        
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -intensity;
        const rotateY = (x - centerX) / centerX * intensity;
        
        animate(container, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 300,
          easing: 'easeOutQuad',
        });
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
        animate(container, {
          rotateX: 0,
          rotateY: 0,
          duration: 600,
          easing: 'easeOutElastic(1, 0.5)',
        });
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseenter', handleMouseEnter);
      };
    }, [isVisible, intensity, isHovering]);

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative inline-block cursor-pointer",
          "transform-gpu transition-all duration-300",
          className
        )}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          minHeight: '1em',
          minWidth: '1em',
        }}
        {...props}
      />
    );
  }
);

Text3D.displayName = "Text3D";

export { Text3D }; 