import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { animate } from 'animejs';

interface MorphingShape3DProps {
  shapes?: string[];
  size?: number;
  color?: string;
  duration?: number;
  intensity?: number;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const MorphingShape3D: React.FC<MorphingShape3DProps> = ({
  shapes = [
    'M50,20 C80,20 80,80 50,80 C20,80 20,20 50,20 Z', // Circle
    'M20,20 L80,20 L80,80 L20,80 Z', // Square
    'M50,20 L80,50 L50,80 L20,50 Z', // Diamond
    'M20,20 L80,20 L50,80 Z', // Triangle
    'M20,20 C40,20 60,20 80,20 C80,40 80,60 80,80 C60,80 40,80 20,80 C20,60 20,40 20,20 Z', // Rounded Square
  ],
  size = 100,
  color = '#3B82F6',
  duration = 3000,
  intensity = 15,
  className = '',
  autoPlay = true,
  loop = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    
    if (!container || !svg || !path) return;

    let animationRef: any = null;
    let currentAnimation: any = null;

    const morphToShape = (targetShape: string) => {
      if (currentAnimation) {
        currentAnimation.pause();
      }

      currentAnimation = animate(path, {
        d: [path.getAttribute('d') || shapes[0], targetShape],
        duration: duration,
        easing: 'easeInOutCubic',
        update: function(anim) {
          // Add 3D rotation effect during morphing
          if (isHovering) {
            const progress = anim.progress / 100;
            const rotateX = Math.sin(progress * Math.PI * 2) * intensity;
            const rotateY = Math.cos(progress * Math.PI * 2) * intensity;
            
            svg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }
        },
        complete: function() {
          if (loop && autoPlay) {
            setTimeout(() => {
              const nextIndex = (currentShapeIndex + 1) % shapes.length;
              setCurrentShapeIndex(nextIndex);
              morphToShape(shapes[nextIndex]);
            }, 1000);
          }
        }
      });
    };

    // Start auto-play animation
    if (autoPlay && shapes.length > 1) {
      morphToShape(shapes[1]);
    }

    // Mouse interaction for 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -intensity;
      const rotateY = (x - centerX) / centerX * intensity;
      
      if (animationRef) {
        animationRef.pause();
      }
      
      animationRef = animate(svg, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 300,
        easing: 'easeOutQuad',
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (animationRef) {
        animationRef.pause();
      }
      
      animate(svg, {
        rotateX: 0,
        rotateY: 0,
        duration: 600,
        easing: 'easeOutElastic(1, 0.5)',
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    // Click to morph to next shape
    const handleClick = () => {
      if (shapes.length > 1) {
        const nextIndex = (currentShapeIndex + 1) % shapes.length;
        setCurrentShapeIndex(nextIndex);
        morphToShape(shapes[nextIndex]);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('click', handleClick);
      
      if (currentAnimation) {
        currentAnimation.pause();
      }
      if (animationRef) {
        animationRef.pause();
      }
    };
  }, [shapes, duration, intensity, isHovering, currentShapeIndex, loop, autoPlay]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative cursor-pointer transform-gpu transition-all duration-300",
        "hover:scale-110",
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="transform-gpu transition-all duration-300"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          ref={pathRef}
          d={shapes[0]}
          fill="url(#shapeGradient)"
          filter="url(#glow)"
          className="transition-all duration-300"
        />
        
        {/* 3D Shadow */}
        <path
          d={shapes[0]}
          fill="rgba(0,0,0,0.2)"
          transform="translate(2, 2)"
          className="transition-all duration-300"
        />
      </svg>
      
      {/* Floating particles around the shape */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MorphingShape3D; 