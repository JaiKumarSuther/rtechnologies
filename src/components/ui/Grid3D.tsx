import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate, stagger } from 'animejs';

interface Grid3DProps {
  rows?: number;
  cols?: number;
  spacing?: number;
  depth?: number;
  color?: string;
  intensity?: number;
  className?: string;
  animateOnScroll?: boolean;
}

const Grid3D: React.FC<Grid3DProps> = ({
  rows = 20,
  cols = 20,
  spacing = 50,
  depth = 100,
  color = '#3B82F6',
  intensity = 15,
  className = '',
  animateOnScroll = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create grid elements
    const createGrid = () => {
      container.innerHTML = '';
      const elements = [];
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const element = document.createElement('div');
          element.className = 'grid-3d-element';
          element.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: ${color};
            border-radius: 50%;
            opacity: 0;
            transform: translate3d(0, 0, 0);
            box-shadow: 0 0 4px ${color}40;
          `;
          
          // Position elements in a grid
          const x = col * spacing;
          const y = row * spacing;
          const z = Math.random() * depth;
          
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
          element.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
          
          container.appendChild(element);
          elements.push({ element, x, y, z, originalZ: z });
        }
      }
      
      return elements;
    };

    const gridElements = createGrid();

    // Intersection Observer for scroll animation
    if (animateOnScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              animate(gridElements.map(item => item.element), {
                opacity: [0, 0.8],
                scale: [0, 1],
                translateZ: (el, i) => [0, gridElements[i].z],
                duration: 1500,
                delay: stagger(20),
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
      animate(gridElements.map(item => item.element), {
        opacity: [0, 0.8],
        scale: [0, 1],
        translateZ: (el, i) => [0, gridElements[i].z],
        duration: 1500,
        delay: stagger(20),
        easing: 'easeOutElastic(1, 0.5)',
      });
    }
  }, [rows, cols, spacing, depth, color, animateOnScroll]);

  // Mouse interaction for 3D wave effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      const elements = container.querySelectorAll('.grid-3d-element');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const elementRect = element.getBoundingClientRect();
        const elementX = elementRect.left - rect.left + elementRect.width / 2;
        const elementY = elementRect.top - rect.top + elementRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(x - elementX, 2) + Math.pow(y - elementY, 2)
        );
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          const waveZ = Math.sin(distance * 0.02) * force * intensity;
          
          animate(element, {
            translateZ: waveZ,
            scale: 1 + force * 0.5,
            duration: 300,
            easing: 'easeOutQuad',
          });
        } else {
          animate(element, {
            translateZ: 0,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      const elements = container.querySelectorAll('.grid-3d-element');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        animate(element, {
          translateZ: 0,
          scale: 1,
          duration: 600,
          easing: 'easeOutElastic(1, 0.5)',
        });
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, intensity]);

  // Parallax effect on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isVisible) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.1;
      
      const elements = container.querySelectorAll('.grid-3d-element');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const currentTransform = element.style.transform;
        const newY = parseFloat(element.style.top) + scrollFactor;
        element.style.transform = currentTransform.replace(
          /translate3d\([^,]+,\s*[^,]+,\s*[^)]+\)/,
          `translate3d(${element.style.left}, ${newY}px, ${element.style.transform.match(/translateZ\(([^)]+)\)/)?.[1] || '0px'})`
        );
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        "transform-gpu",
        className
      )}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    />
  );
};

export default Grid3D; 