import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CursorDot {
  x: number;
  y: number;
  element: HTMLDivElement;
}

const MouseFollower = () => {
  const dotsRef = useRef<CursorDot[]>([]);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Create cursor dots
    const createDots = () => {
      const dots: CursorDot[] = [];
      for (let i = 0; i < 10; i++) { // Reduced from 15 to 10 for better performance
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.opacity = `${(15 - i) / 15}`;
        dot.style.transform = `scale(${(15 - i) / 15})`;
        document.body.appendChild(dot);
        
        dots.push({
          x: 0,
          y: 0,
          element: dot
        });
      }
      return dots;
    };

    dotsRef.current = createDots();

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      // Update first dot position immediately
      if (dotsRef.current[0]) {
        dotsRef.current[0].x = x;
        dotsRef.current[0].y = y;
        dotsRef.current[0].element.style.left = `${x - 4}px`;
        dotsRef.current[0].element.style.top = `${y - 4}px`;
      }

      // Animate trailing dots with GSAP
      dotsRef.current.forEach((dot, index) => {
        if (index > 0) {
          gsap.to(dot.element, {
            left: `${x - 4}px`,
            top: `${y - 4}px`,
            duration: 0.2 + (index * 0.03),
            ease: "power2.out"
          });
        }
      });
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      gsap.to(dotsRef.current.map(dot => dot.element), {
        scale: 1.3,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      gsap.to(dotsRef.current.map(dot => dot.element), {
        scale: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    };

    // Enhanced hover detection for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.classList?.contains('hover-target') ||
        target.classList?.contains('interactive') ||
        target.closest('button') ||
        target.closest('a')
      )) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          gsap.to(dotsRef.current.map(dot => dot.element), {
            scale: 1.5,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        }
      } else {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          gsap.to(dotsRef.current.map(dot => dot.element), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      
      dotsRef.current.forEach(dot => {
        if (dot.element.parentNode) {
          dot.element.parentNode.removeChild(dot.element);
        }
      });
    };
  }, []);

  return null;
};

export default MouseFollower;