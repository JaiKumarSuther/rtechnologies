import { useRef, useEffect, useCallback } from 'react';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

interface AnimationOptions {
  intensity?: number;
  duration?: number;
  easing?: string;
  scaleOnHover?: boolean;
  rotateOnHover?: boolean;
  shadowIntensity?: number;
  glowColor?: string;
}

interface Use3DAnimationReturn {
  elementRef: React.RefObject<HTMLElement>;
  animateIn: () => void;
  animateOut: () => void;
  animateHover: (e: MouseEvent) => void;
  animateLeave: () => void;
  animatePress: () => void;
  animateRelease: () => void;
}

export const use3DAnimation = (options: AnimationOptions = {}): Use3DAnimationReturn => {
  const {
    intensity = 20,
    duration = 300,
    easing = 'easeOutQuad',
    scaleOnHover = true,
    rotateOnHover = true,
    shadowIntensity = 0.3,
    glowColor = "rgba(59, 130, 246, 0.5)"
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<any | null>(null);
  const isAnimatingRef = useRef(false);

  const killCurrentAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.pause();
      animationRef.current = null;
    }
  }, []);

  const animateIn = useCallback(() => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    killCurrentAnimation();

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8) rotateX(20deg) rotateY(-20deg)';

    animationRef.current = anime({
      targets: element,
      opacity: [0, 1],
      scale: [0.8, 1],
      rotateX: [20, 0],
      rotateY: [-20, 0],
      duration: duration * 1.5,
      easing: 'easeOutElastic(1, 0.5)',
      complete: () => {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    });
  }, [duration, killCurrentAnimation]);

  const animateOut = useCallback(() => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    killCurrentAnimation();

    animationRef.current = anime({
      targets: element,
      opacity: [1, 0],
      scale: [1, 0.8],
      rotateX: [0, -20],
      rotateY: [0, 20],
      duration: duration,
      easing: 'easeInQuad',
      complete: () => {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    });
  }, [duration, killCurrentAnimation]);

  const animateHover = useCallback((e: MouseEvent) => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -intensity;
    const rotateY = (x - centerX) / centerX * intensity;
    
    killCurrentAnimation();
    
    animationRef.current = anime({
      targets: element,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: scaleOnHover ? 1.05 : 1,
      duration: duration,
      easing: easing,
      update: function() {
        if (rotateOnHover) {
          const shadowX = (rotateY / intensity) * shadowIntensity * 20;
          const shadowY = (rotateX / intensity) * shadowIntensity * 20;
          const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 10;
          
          element.style.boxShadow = `
            ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowIntensity}),
            0 0 20px ${glowColor},
            0 10px 30px rgba(0, 0, 0, 0.1)
          `;
        }
      }
    });
  }, [intensity, duration, easing, scaleOnHover, rotateOnHover, shadowIntensity, glowColor, killCurrentAnimation]);

  const animateLeave = useCallback(() => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    killCurrentAnimation();
    
    animationRef.current = anime({
      targets: element,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: duration * 1.5,
      easing: 'easeOutElastic(1, 0.5)',
      update: function() {
        element.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      },
      complete: () => {
        animationRef.current = null;
      }
    });
  }, [duration, killCurrentAnimation]);

  const animatePress = useCallback(() => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    killCurrentAnimation();
    
    animationRef.current = anime({
      targets: element,
      scale: 0.95,
      rotateX: 0,
      rotateY: 0,
      duration: duration * 0.3,
      easing: 'easeOutQuad',
      update: function() {
        element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      },
      complete: () => {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    });
  }, [duration, killCurrentAnimation]);

  const animateRelease = useCallback(() => {
    const element = elementRef.current;
    if (!element || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    killCurrentAnimation();
    
    animationRef.current = anime({
      targets: element,
      scale: 1.05,
      duration: duration * 0.5,
      easing: 'easeOutElastic(1, 0.5)',
      update: function() {
        element.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
      },
      complete: () => {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    });
  }, [duration, killCurrentAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      killCurrentAnimation();
    };
  }, [killCurrentAnimation]);

  return {
    elementRef,
    animateIn,
    animateOut,
    animateHover,
    animateLeave,
    animatePress,
    animateRelease
  };
};

// Specialized hooks for common use cases
export const use3DCard = (options?: AnimationOptions) => {
  return use3DAnimation({
    intensity: 25,
    duration: 400,
    scaleOnHover: true,
    rotateOnHover: true,
    shadowIntensity: 0.4,
    ...options
  });
};

export const use3DButton = (options?: AnimationOptions) => {
  return use3DAnimation({
    intensity: 15,
    duration: 200,
    scaleOnHover: true,
    rotateOnHover: true,
    shadowIntensity: 0.3,
    ...options
  });
};

export const use3DInput = (options?: AnimationOptions) => {
  return use3DAnimation({
    intensity: 10,
    duration: 300,
    scaleOnHover: false,
    rotateOnHover: true,
    shadowIntensity: 0.2,
    ...options
  });
}; 