import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animate } from 'animejs';
import rtechLogo from '@/assets/rtech-logo.png';

interface LoadingScreen3DAdvancedProps {
  onComplete: () => void;
  duration?: number;
}

const LoadingScreen3DAdvanced = ({ onComplete, duration = 5000 }: LoadingScreen3DAdvancedProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const geometricShapesRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const energyFieldRef = useRef<HTMLDivElement>(null);
  
  const animationRefs = useRef<any[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced loading phases with more engaging text
  const phases = [
    "Initializing quantum systems...",
    "Loading neural networks...",
    "Calibrating 3D environment...",
    "Optimizing performance matrix...",
    "Establishing secure connections...",
    "Welcome to the future!"
  ];

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      // Update phases based on progress with more granular control
      const phaseIndex = Math.min(
        Math.floor((newProgress / 100) * (phases.length - 1)),
        phases.length - 2
      );
      setCurrentPhase(phaseIndex);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Set final phase
        setCurrentPhase(phases.length - 1);
        // Wait for final phase to be visible
        setTimeout(() => {
          setIsComplete(true);
          // Give more time for the fade out animation to be smooth
          setTimeout(() => {
            setShowContent(false);
            // Call onComplete after content is hidden
            setTimeout(() => {
              onComplete();
            }, 100);
          }, 2000); // Increased to 2 seconds for smoother fade
        }, 800); // Increased to 800ms to show final phase longer
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  // Mouse tracking for dynamic 3D effects (only on desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Fixed 3D Logo Animation with proper floating direction
  useEffect(() => {
    if (!logoRef.current || prefersReducedMotion) return;

    const logo = logoRef.current;
    
    // Fixed floating animation with proper direction - NO ROTATION
    const floatAnimation = animate(logo, {
      translateY: [0, -15, 0],
      translateX: [0, 8, 0],
      scale: [1, 1.05, 1],
      duration: 6000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Enhanced glow effect with more colors
    const glowAnimation = animate(logo, {
      boxShadow: [
        '0 0 50px rgba(59, 130, 246, 0.5)',
        '0 0 70px rgba(147, 51, 234, 0.7)',
        '0 0 60px rgba(236, 72, 153, 0.6)',
        '0 0 80px rgba(16, 185, 129, 0.5)',
        '0 0 50px rgba(59, 130, 246, 0.5)'
      ],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    });

    animationRefs.current.push(floatAnimation, glowAnimation);

    return () => {
      floatAnimation.pause();
      glowAnimation.pause();
    };
  }, [prefersReducedMotion]);

  // Enhanced 3D Progress Bar with dynamic effects
  useEffect(() => {
    if (!progressRef.current || prefersReducedMotion || isMobile) return;

    const progressBar = progressRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -20;
      const rotateY = (x - centerX) / centerX * 20;
      
      animate(progressBar, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.05,
        duration: 200,
        easing: 'easeOutQuad'
      });
    };

    const handleMouseLeave = () => {
      animate(progressBar, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 500,
        easing: 'easeOutQuad'
      });
    };

    progressBar.addEventListener('mousemove', handleMouseMove);
    progressBar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      progressBar.removeEventListener('mousemove', handleMouseMove);
      progressBar.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion, isMobile]);

  // Enhanced Particle System with more variety (reduced on mobile)
  useEffect(() => {
    if (!particlesRef.current || prefersReducedMotion) return;

    const particles = particlesRef.current;
    const particleCount = isMobile ? 15 : 40;
    
    // Create different types of particles with more variety
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const particleType = i % 4;
      
      if (particleType === 0) {
        // Energy particles
        particle.className = 'absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full';
        particle.style.filter = 'blur(0.5px)';
      } else if (particleType === 1) {
        // Data particles
        particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full';
      } else if (particleType === 2) {
        // Light particles
        particle.className = 'absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full';
        particle.style.filter = 'blur(1px)';
      } else {
        // Quantum particles
        particle.className = 'absolute w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full';
        particle.style.filter = 'blur(0.3px)';
      }
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particles.appendChild(particle);
      
      // Enhanced particle animation with more complex paths
      const particleAnimation = animate(particle, {
        translateY: [-40, 40, -40],
        translateX: [-30, 30, -30],
        translateZ: [-80, 80, -80],
        opacity: [0.1, 0.9, 0.1],
        scale: [0.2, 1.5, 0.2],
        rotateX: [0, 720, 0],
        rotateY: [0, 720, 0],
        duration: 5000 + Math.random() * 4000,
        delay: Math.random() * 3000,
        easing: 'easeInOutSine',
        loop: true
      });
      
      animationRefs.current.push(particleAnimation);
    }

    return () => {
      particles.innerHTML = '';
    };
  }, [prefersReducedMotion, isMobile]);

  // Enhanced 3D Geometric Shapes Animation (reduced on mobile)
  useEffect(() => {
    if (!geometricShapesRef.current || prefersReducedMotion) return;

    const container = geometricShapesRef.current;
    const shapes = isMobile ? ['cube', 'sphere'] : ['cube', 'sphere', 'pyramid', 'torus', 'octahedron', 'dodecahedron'];
    
    shapes.forEach((shape, index) => {
      const shapeElement = document.createElement('div');
      shapeElement.className = `absolute w-20 h-20 opacity-25`;
      
      if (shape === 'cube') {
        shapeElement.style.background = 'linear-gradient(45deg, #3b82f6, #8b5cf6)';
        shapeElement.style.transform = 'rotate(45deg)';
      } else if (shape === 'sphere') {
        shapeElement.style.background = 'radial-gradient(circle, #ec4899, #8b5cf6)';
        shapeElement.style.borderRadius = '50%';
      } else if (shape === 'pyramid') {
        shapeElement.style.background = 'linear-gradient(45deg, #10b981, #3b82f6)';
        shapeElement.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      } else if (shape === 'torus') {
        shapeElement.style.background = 'linear-gradient(45deg, #f59e0b, #ec4899)';
        shapeElement.style.borderRadius = '50%';
        shapeElement.style.border = '3px solid rgba(255, 255, 255, 0.4)';
      } else if (shape === 'octahedron') {
        shapeElement.style.background = 'linear-gradient(45deg, #06b6d4, #3b82f6)';
        shapeElement.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      } else {
        shapeElement.style.background = 'linear-gradient(45deg, #8b5cf6, #ec4899)';
        shapeElement.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
      }
      
      shapeElement.style.left = `${15 + (index % 3) * 25}%`;
      shapeElement.style.top = `${15 + Math.floor(index / 3) * 35}%`;
      container.appendChild(shapeElement);
      
      // Enhanced 3D shape animation
      const shapeAnimation = animate(shapeElement, {
        translateY: [-25, 25, -25],
        translateX: [-15, 15, -15],
        rotateX: [0, 360, 720],
        rotateY: [0, 360, 720],
        rotateZ: [0, 180, 360],
        scale: [0.6, 1.4, 0.6],
        opacity: [0.05, 0.5, 0.05],
        duration: 8000 + index * 1000,
        delay: index * 800,
        easing: 'easeInOutSine',
        loop: true
      });
      
      animationRefs.current.push(shapeAnimation);
    });

    return () => {
      container.innerHTML = '';
    };
  }, [prefersReducedMotion, isMobile]);

  // Enhanced Dynamic Lighting Effect
  useEffect(() => {
    if (!lightRef.current || prefersReducedMotion) return;

    const light = lightRef.current;
    
    const lightAnimation = animate(light, {
      background: [
        'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.4) 0%, transparent 70%)',
        'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
      ],
      duration: 6000,
      easing: 'easeInOutSine',
      loop: true
    });

    animationRefs.current.push(lightAnimation);

    return () => {
      lightAnimation.pause();
    };
  }, [prefersReducedMotion]);

  // Energy Field Effect
  useEffect(() => {
    if (!energyFieldRef.current || prefersReducedMotion) return;

    const energyField = energyFieldRef.current;
    
    const energyAnimation = animate(energyField, {
      background: [
        'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
        'conic-gradient(from 90deg, transparent, rgba(147, 51, 234, 0.1), transparent)',
        'conic-gradient(from 180deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
        'conic-gradient(from 270deg, transparent, rgba(16, 185, 129, 0.1), transparent)',
        'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent)'
      ],
      rotate: [0, 360],
      duration: 8000,
      easing: 'linear',
      loop: true
    });

    animationRefs.current.push(energyAnimation);

    return () => {
      energyAnimation.pause();
    };
  }, [prefersReducedMotion]);

  // Enhanced Text Animation with 3D effects
  useEffect(() => {
    if (!textRef.current || prefersReducedMotion) return;

    const text = textRef.current;
    
    const textAnimation = animate(text, {
      translateY: [-10, 10, -10],
      translateX: [-5, 5, -5],
      opacity: [0.5, 1, 0.5],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    });

    animationRefs.current.push(textAnimation);

    return () => {
      textAnimation.pause();
    };
  }, [prefersReducedMotion]);

  // Cleanup animations
  useEffect(() => {
    return () => {
      animationRefs.current.forEach(anim => anim.pause());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, hsl(190 85% 35% / 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(190 80% 40% / 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, hsl(190 80% 50% / 0.15) 0%, transparent 50%),
          linear-gradient(180deg, hsl(210 10% 5%) 0%, hsl(210 10% 3%) 100%)
        `,
        pointerEvents: isComplete ? 'none' : 'auto',
        transformStyle: 'preserve-3d',
        perspective: '1500px'
      }}
    >
      {/* Energy Field Layer */}
      <div 
        ref={energyFieldRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
          transformStyle: 'preserve-3d'
        }}
      />

      {/* Enhanced Dynamic Lighting Layer */}
      <div 
        ref={lightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          transformStyle: 'preserve-3d'
        }}
      />

      <AnimatePresence>
        {showContent && (
                     <motion.div
             className="absolute inset-0 flex items-center justify-center px-4"
             initial={{ opacity: 1 }}
             animate={{ opacity: isComplete ? 0 : 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 2, ease: "easeInOut" }}
             style={{ transformStyle: 'preserve-3d' }}
           >
            {/* Enhanced 3D Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-64 h-64' : 'w-[28rem] h-[28rem]'} bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl`}
                animate={{
                  scale: isComplete ? 0 : [1, 2.5, 1],
                  opacity: isComplete ? 0 : [0.1, 0.8, 0.1],
                  rotateX: [0, 25, 0],
                  rotateY: [0, 20, 0],
                  translateX: isMobile ? [0, 0, 0] : [0, mousePosition.x * 80, 0],
                  translateY: isMobile ? [0, 0, 0] : [0, mousePosition.y * 80, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-80 h-80' : 'w-[32rem] h-[32rem]'} bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl`}
                animate={{
                  scale: isComplete ? 0 : [1.5, 1, 1.5],
                  opacity: isComplete ? 0 : [0.8, 0.1, 0.8],
                  rotateX: [0, -20, 0],
                  rotateY: [0, -25, 0],
                  translateX: isMobile ? [0, 0, 0] : [0, -mousePosition.x * 80, 0],
                  translateY: isMobile ? [0, 0, 0] : [0, -mousePosition.y * 80, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>

            {/* Enhanced 3D Geometric Shapes */}
            <div 
              ref={geometricShapesRef}
              className="absolute inset-0 pointer-events-none"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Enhanced Particle System */}
            <div 
              ref={particlesRef}
              className="absolute inset-0 pointer-events-none"
              style={{ transformStyle: 'preserve-3d' }}
            />

            <div className="relative z-10 text-center max-w-full" style={{ transformStyle: 'preserve-3d' }}>
              {/* Enhanced 3D Logo Animation */}
                             <motion.div
                 ref={logoRef}
                 className="mb-8 md:mb-12"
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ 
                   scale: isComplete ? 0.6 : 1,
                   opacity: isComplete ? 0 : 1,
                   translateX: isMobile ? 0 : mousePosition.x * 25,
                   translateY: isMobile ? 0 : mousePosition.y * 25
                 }}
                 transition={{ 
                   duration: isComplete ? 1.2 : 2,
                   type: "spring",
                   stiffness: 60,
                   damping: 15
                 }}
                 style={{ 
                   transformStyle: 'preserve-3d',
                   filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
                 }}
               >
                <motion.img
                  src={rtechLogo}
                  alt="R Technologies"
                  className={`${isMobile ? 'h-32 md:h-40' : 'h-[240px]'} w-auto mx-auto`}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </motion.div>

              {/* Enhanced 3D Company Name */}
                             <motion.div
                 className="mb-8 md:mb-12"
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ 
                   opacity: isComplete ? 0 : 1,
                   y: isComplete ? 30 : 0,
                   translateX: isMobile ? 0 : mousePosition.x * 20,
                   translateY: isMobile ? 0 : mousePosition.y * 20
                 }}
                 transition={{ 
                   delay: isComplete ? 0 : 0.8,
                   duration: isComplete ? 1.2 : 1.5
                 }}
                 style={{ transformStyle: 'preserve-3d' }}
               >
                <h1 
                  className={`${isMobile ? 'text-4xl md:text-5xl' : 'text-7xl'} font-bold mb-2 md:mb-4`}
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))'
                  }}
                >
                  R TECHNOLOGIES
                </h1>
                <p 
                  className={`${isMobile ? 'text-lg md:text-xl' : 'text-2xl'} text-muted-foreground`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  Where Ideas Meet Innovation
                </p>
              </motion.div>

              {/* Enhanced 3D Progress Bar */}
              <motion.div
                ref={progressRef}
                className={`${isMobile ? 'w-80 md:w-96' : 'w-[28rem]'} mx-auto mb-8 md:mb-10`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ 
                  opacity: isComplete ? 0 : 1,
                  scale: isComplete ? 0.7 : 1,
                  translateX: isMobile ? 0 : mousePosition.x * 15,
                  translateY: isMobile ? 0 : mousePosition.y * 15
                }}
                transition={{ 
                  delay: isComplete ? 0 : 1.5,
                  duration: isComplete ? 1 : 1.2
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1500px'
                }}
              >
                <div className="relative">
                  <div 
                    className="w-full h-4 md:h-5 bg-gray-800/70 rounded-full overflow-hidden border-2 border-gray-700/70"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{ 
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981)',
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.7)'
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 40px rgba(59, 130, 246, 0.7)',
                          '0 0 50px rgba(139, 92, 246, 0.9)',
                          '0 0 60px rgba(236, 72, 153, 0.7)',
                          '0 0 50px rgba(245, 158, 11, 0.7)',
                          '0 0 40px rgba(59, 130, 246, 0.7)'
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{ transformStyle: 'preserve-3d' }}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                        style={{ transformStyle: 'preserve-3d' }}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="mt-4 md:mt-6 text-lg md:text-2xl font-bold"
                    key={Math.floor(progress)}
                    initial={{ opacity: 0.5, scale: 0.7 }}
                    animate={{ 
                      opacity: isComplete ? 0 : 1,
                      scale: isComplete ? 0.6 : 1
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      transformStyle: 'preserve-3d',
                      textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {Math.floor(progress)}%
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced 3D Loading Text */}
                             <motion.div
                 ref={textRef}
                 className="mt-6 md:mt-10"
                 initial={{ opacity: 0 }}
                 animate={{ 
                   opacity: isComplete ? 0 : 1,
                   translateX: isMobile ? 0 : mousePosition.x * 12,
                   translateY: isMobile ? 0 : mousePosition.y * 12
                 }}
                 transition={{ 
                   delay: isComplete ? 0 : 2.2,
                   duration: isComplete ? 0.8 : 1.2
                 }}
                 style={{ transformStyle: 'preserve-3d' }}
               >
                <motion.p
                  className={`${isMobile ? 'text-lg md:text-xl' : 'text-2xl'} font-semibold`}
                  animate={{ 
                    opacity: isComplete ? 0 : [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: isComplete ? 0.6 : 3,
                    repeat: isComplete ? 0 : Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #6b7280, #9ca3af, #d1d5db, #e5e7eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transformStyle: 'preserve-3d',
                    textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {isComplete ? "Ready!" : phases[currentPhase]}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen3DAdvanced; 