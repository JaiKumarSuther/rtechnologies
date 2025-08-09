import React, { useRef, useEffect, useState } from 'react';
import { animate, stagger } from 'animejs';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  element: HTMLDivElement;
  targetX: number;
  targetY: number;
  targetZ: number;
  animationStartTime: number;
  symbol: string;
}

interface FloatingParticles3DProps {
  count?: number;
  colors?: string[];
  sizeRange?: [number, number];
  speedRange?: [number, number];
  depthRange?: [number, number];
  className?: string;
}

const FloatingParticles3D: React.FC<FloatingParticles3DProps> = ({
  count = 50,
  colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'],
  sizeRange = [2, 8],
  speedRange = [20, 60],
  depthRange = [0, 100],
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Coding symbols to display
  const codingSymbols = [
    '{', '}', '[', ']', '(', ')', '<', '>', '+', '=', '$', '%', '&', '*', 
    '|', '^', '~', '!', '@', '#', '?', '/', '\\', ';', ':', '"', "'", '`',
    '→', '←', '↑', '↓', '∞', '≠', '≤', '≥', '±', '×', '÷', '√', '∑', '∏'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const symbol = codingSymbols[Math.floor(Math.random() * codingSymbols.length)];
        
        particle.className = 'particle-3d';
        particle.textContent = symbol;
        particle.style.cssText = `
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: ${size * 2}px;
          font-weight: bold;
          color: ${color};
          pointer-events: none;
          opacity: 0;
          transform: translateZ(0);
          text-shadow: 0 0 ${size * 3}px ${color}80;
          user-select: none;
          white-space: nowrap;
        `;
        
        container.appendChild(particle);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const z = Math.random() * (depthRange[1] - depthRange[0]) + depthRange[0];
        
        particles.push({
          id: i,
          x,
          y,
          z,
          size,
          speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
          element: particle,
          targetX: x,
          targetY: y,
          targetZ: z,
          animationStartTime: 0,
          symbol
        });
      }
      
      return particles;
    };

    particlesRef.current = createParticles();

    // Animate particles in
    const animateIn = () => {
      const particles = particlesRef.current.map(p => p.element);
      
      animate(particles, {
        opacity: [0, 0.9],
        scale: [0, 1],
        translateZ: (el, i) => particlesRef.current[i].z,
        duration: 1500,
        delay: stagger(50),
        easing: 'easeOutElastic(1, 0.5)',
        complete: () => {
          setIsVisible(true);
          startFloatingAnimation();
        }
      });
    };

    // Start floating animation
    const startFloatingAnimation = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const animateParticles = (currentTime: number) => {
        if (!isVisible) return;

        particlesRef.current.forEach(particle => {
          // Check if animation is complete or needs new target
          if (currentTime - particle.animationStartTime > particle.speed * 1000 || particle.animationStartTime === 0) {
            // Set new target position
            particle.targetX = particle.x + (Math.random() - 0.5) * 100;
            particle.targetY = particle.y + (Math.random() - 0.5) * 100;
            particle.targetZ = particle.z + (Math.random() - 0.5) * 20;
            
            // Keep particles within bounds
            particle.targetX = Math.max(0, Math.min(window.innerWidth, particle.targetX));
            particle.targetY = Math.max(0, Math.min(window.innerHeight, particle.targetY));
            particle.targetZ = Math.max(depthRange[0], Math.min(depthRange[1], particle.targetZ));
            
            particle.animationStartTime = currentTime;
          }

          // Calculate progress
          const progress = Math.min(1, (currentTime - particle.animationStartTime) / (particle.speed * 1000));
          const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI); // easeInOutSine

          // Interpolate position
          const currentX = particle.x + (particle.targetX - particle.x) * easeProgress;
          const currentY = particle.y + (particle.targetY - particle.y) * easeProgress;
          const currentZ = particle.z + (particle.targetZ - particle.z) * easeProgress;

          // Update particle position
          particle.x = currentX;
          particle.y = currentY;
          particle.z = currentZ;

          // Apply transform
          const scale = 1 + (currentZ / depthRange[1]) * 0.5;
          const opacity = 0.3 + (currentZ / depthRange[1]) * 0.5;
          
          particle.element.style.transform = `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) scale(${scale})`;
          particle.element.style.opacity = opacity.toString();
        });

        animationFrameRef.current = requestAnimationFrame(animateParticles);
      };

      animationFrameRef.current = requestAnimationFrame(animateParticles);
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particlesRef.current.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          const angle = Math.atan2(dy, dx);
          
          const repelX = particle.x - Math.cos(angle) * force * 20;
          const repelY = particle.y - Math.sin(angle) * force * 20;
          
          particle.element.style.transform = `translate3d(${repelX}px, ${repelY}px, ${particle.z}px) scale(1.2)`;
        }
      });
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      if (!isVisible) return;
      
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.1;
      
      particlesRef.current.forEach(particle => {
        const currentTransform = particle.element.style.transform;
        const newY = particle.y + scrollFactor;
        particle.element.style.transform = currentTransform.replace(
          /translate3d\([^,]+,\s*[^,]+,\s*[^)]+\)/,
          `translate3d(${particle.x}px, ${newY}px, ${particle.z}px)`
        );
      });
    };

    // Start animation
    animateIn();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
    };
  }, [count, colors, sizeRange, speedRange, depthRange, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    />
  );
};

export default FloatingParticles3D; 