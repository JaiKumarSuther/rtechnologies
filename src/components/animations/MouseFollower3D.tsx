import React, { useRef, useEffect, useState } from 'react';
import { animate } from 'animejs';

interface MouseFollower3DProps {
  size?: number;
  color?: string;
  trailLength?: number;
  intensity?: number;
  className?: string;
}

const MouseFollower3D: React.FC<MouseFollower3DProps> = ({
  size = 20,
  color = '#3B82F6',
  trailLength = 8,
  intensity = 15,
  className = ''
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const createTrail = () => {
      const trailContainer = document.createElement('div');
      trailContainer.className = 'cursor-trail-container';
      trailContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
      `;
      
      document.body.appendChild(trailContainer);
      
      const trailElements: HTMLDivElement[] = [];
      
      for (let i = 0; i < trailLength; i++) {
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail-element';
        trailElement.style.cssText = `
          position: absolute;
          width: ${size - i * 2}px;
          height: ${size - i * 2}px;
          background: ${color};
          border-radius: 50%;
          opacity: ${1 - (i / trailLength) * 0.8};
          transform: translate(-50%, -50%) translateZ(0);
          pointer-events: none;
          transition: all 0.1s ease;
          box-shadow: 0 0 ${(size - i * 2) * 2}px ${color}40;
        `;
        
        trailContainer.appendChild(trailElement);
        trailElements.push(trailElement);
      }
      
      return { container: trailContainer, elements: trailElements };
    };

    const { container, elements } = createTrail();
    trailRefs.current = elements;

    let animationFrameId: number;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
        animate(cursor, {
          scale: [0, 1],
          opacity: [0, 1],
          duration: 300,
          easing: 'easeOutElastic(1, 0.5)',
        });
      }

      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      
      // Update cursor position with 3D effect
      const deltaX = x - lastMouseX;
      const deltaY = y - lastMouseY;
      
      const rotateX = deltaY * 0.5;
      const rotateY = -deltaX * 0.5;
      
      animate(cursor, {
        translateX: x,
        translateY: y,
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.2,
        duration: 100,
        easing: 'easeOutQuad',
      });

      // Update trail elements with 3D effect
      elements.forEach((element, index) => {
        const delay = index * 2;
        const trailX = x - deltaX * (index + 1) * 0.1;
        const trailY = y - deltaY * (index + 1) * 0.1;
        const trailZ = -index * 5;
        
        setTimeout(() => {
          animate(element, {
            translateX: trailX,
            translateY: trailY,
            translateZ: trailZ,
            rotateX: rotateX * (1 - index / trailLength),
            rotateY: rotateY * (1 - index / trailLength),
            scale: 1 - (index / trailLength) * 0.3,
            duration: 150,
            easing: 'easeOutQuad',
          });
        }, delay);
      });

      lastMouseX = x;
      lastMouseY = y;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      animate(cursor, {
        scale: 0,
        opacity: 0,
        duration: 300,
        easing: 'easeInQuad',
      });
      
      elements.forEach(element => {
        animate(element, {
          scale: 0,
          opacity: 0,
          duration: 200,
          easing: 'easeInQuad',
        });
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      animate(cursor, {
        scale: 1,
        opacity: 1,
        duration: 300,
        easing: 'easeOutElastic(1, 0.5)',
      });
    };

    // Add hover effects for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, input, textarea, select, [role="button"], [tabindex]')) {
        animate(cursor, {
          scale: 2,
          duration: 200,
          easing: 'easeOutQuad',
        });
        
        elements.forEach((element, index) => {
          animate(element, {
            scale: 1.5 - (index / trailLength) * 0.5,
            duration: 200,
            easing: 'easeOutQuad',
          });
        });
      }
    };

    const handleElementLeave = () => {
      animate(cursor, {
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad',
      });
      
      elements.forEach((element, index) => {
        animate(element, {
          scale: 1 - (index / trailLength) * 0.3,
          duration: 200,
          easing: 'easeOutQuad',
        });
      });
    };

    // Add click effect
    const handleMouseDown = () => {
      animate(cursor, {
        scale: 0.8,
        duration: 100,
        easing: 'easeOutQuad',
      });
      
      elements.forEach((element, index) => {
        animate(element, {
          scale: (0.8 - (index / trailLength) * 0.3),
          duration: 100,
          easing: 'easeOutQuad',
        });
      });
    };

    const handleMouseUp = () => {
      animate(cursor, {
        scale: 1,
        duration: 200,
        easing: 'easeOutElastic(1, 0.5)',
      });
      
      elements.forEach((element, index) => {
        animate(element, {
          scale: 1 - (index / trailLength) * 0.3,
          duration: 200,
          easing: 'easeOutElastic(1, 0.5)',
        });
      });
    };

    // Add scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.1;
      
      animate(cursor, {
        translateY: mousePosition.y + scrollFactor,
        duration: 100,
        easing: 'easeOutQuad',
      });
      
      elements.forEach((element, index) => {
        const elementScrollFactor = scrollFactor * (1 - index / trailLength);
        animate(element, {
          translateY: mousePosition.y + elementScrollFactor,
          duration: 100,
          easing: 'easeOutQuad',
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [size, color, trailLength, intensity, isVisible, mousePosition]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-9999 opacity-0 transform-gpu ${className}`}
      style={{
        transform: 'translate(-50%, -50%)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        boxShadow: `0 0 ${size * 2}px ${color}40`,
      }}
    />
  );
};

export default MouseFollower3D; 