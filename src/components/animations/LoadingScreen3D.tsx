import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { animate } from 'animejs';
import rtechLogo from '@/assets/rtech-logo.png';

interface LoadingScreen3DProps {
  onComplete: () => void;
  duration?: number;
}

const LoadingScreen3D = ({ onComplete, duration = 3000 }: LoadingScreen3DProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const animationRefs = useRef<any[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Loading phases
  const phases = [
    "Initializing...",
    "Loading assets...",
    "Preparing experience...",
    "Almost ready...",
    "Welcome to R Technologies!"
  ];

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      // Update phases based on progress
      const phaseIndex = Math.floor((newProgress / 100) * (phases.length - 1));
      setCurrentPhase(phaseIndex);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          setShowContent(false);
          requestAnimationFrame(() => {
            onComplete();
          });
        }, 1000);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  // 3D Logo Animation
  useEffect(() => {
    if (!logoRef.current || prefersReducedMotion) return;

    const logo = logoRef.current;
    
    // Continuous floating animation
    const floatAnimation = animate(logo, {
      translateY: [-10, 10, -10],
      rotateX: [0, 5, 0],
      rotateY: [0, 3, 0],
      scale: [1, 1.02, 1],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Glow effect animation
    const glowAnimation = animate(logo, {
      boxShadow: [
        '0 0 30px rgba(59, 130, 246, 0.3)',
        '0 0 50px rgba(147, 51, 234, 0.5)',
        '0 0 30px rgba(59, 130, 246, 0.3)'
      ],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });

    animationRefs.current.push(floatAnimation, glowAnimation);

    return () => {
      floatAnimation.pause();
      glowAnimation.pause();
    };
  }, [prefersReducedMotion]);

  // 3D Progress Bar Animation
  useEffect(() => {
    if (!progressRef.current || prefersReducedMotion) return;

    const progressBar = progressRef.current;
    
    // 3D tilt effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;
      
      animate(progressBar, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.02,
        duration: 200,
        easing: 'easeOutQuad'
      });
    };

    const handleMouseLeave = () => {
      animate(progressBar, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    };

    progressBar.addEventListener('mousemove', handleMouseMove);
    progressBar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      progressBar.removeEventListener('mousemove', handleMouseMove);
      progressBar.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  // Floating Particles Animation
  useEffect(() => {
    if (!particlesRef.current || prefersReducedMotion) return;

    const particles = particlesRef.current;
    const particleCount = 20;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particles.appendChild(particle);
      
      // Animate each particle
      const particleAnimation = animate(particle, {
        translateY: [-20, 20, -20],
        translateX: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3],
        scale: [0.5, 1, 0.5],
        duration: 3000 + Math.random() * 2000,
        delay: Math.random() * 2000,
        easing: 'easeInOutSine',
        loop: true
      });
      
      animationRefs.current.push(particleAnimation);
    }

    return () => {
      particles.innerHTML = '';
    };
  }, [prefersReducedMotion]);

  // Text Animation
  useEffect(() => {
    if (!textRef.current || prefersReducedMotion) return;

    const text = textRef.current;
    
    const textAnimation = animate(text, {
      translateY: [-5, 5, -5],
      opacity: [0.7, 1, 0.7],
      duration: 2000,
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
          radial-gradient(circle at 20% 80%, hsl(190 85% 35% / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(190 80% 40% / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, hsl(190 80% 50% / 0.08) 0%, transparent 50%),
          linear-gradient(180deg, hsl(210 10% 5%) 0%, hsl(210 10% 3%) 100%)
        `,
        pointerEvents: isComplete ? 'none' : 'auto',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* 3D Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: isComplete ? 0 : [1, 1.8, 1],
                  opacity: isComplete ? 0 : [0.2, 0.6, 0.2],
                  rotateX: [0, 15, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{
                  scale: isComplete ? 0 : [1.5, 1, 1.5],
                  opacity: isComplete ? 0 : [0.6, 0.2, 0.6],
                  rotateX: [0, -10, 0],
                  rotateY: [0, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>

            {/* Floating Particles */}
            <div 
              ref={particlesRef}
              className="absolute inset-0 pointer-events-none"
              style={{ transformStyle: 'preserve-3d' }}
            />

            <div className="relative z-10 text-center" style={{ transformStyle: 'preserve-3d' }}>
              {/* 3D Logo Animation */}
              <motion.div
                ref={logoRef}
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: isComplete ? 0.8 : 1,
                  rotate: isComplete ? 5 : 0,
                  opacity: isComplete ? 0 : 1
                }}
                transition={{ 
                  duration: isComplete ? 0.8 : 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
                }}
              >
                <motion.img
                  src={rtechLogo}
                  alt="R Technologies"
                  className="h-[200px] w-auto mx-auto"
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </motion.div>

              {/* 3D Company Name */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={{ 
                  opacity: isComplete ? 0 : 1,
                  y: isComplete ? 20 : 0,
                  rotateX: isComplete ? 10 : 0
                }}
                transition={{ 
                  delay: isComplete ? 0 : 0.5,
                  duration: isComplete ? 0.8 : 1
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h1 
                  className="text-5xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  R TECHNOLOGIES
                </h1>
                <p 
                  className="text-muted-foreground text-lg"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Where Ideas Meet Innovation
                </p>
              </motion.div>

              {/* 3D Progress Bar */}
              <motion.div
                ref={progressRef}
                className="w-80 mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isComplete ? 0 : 1,
                  scale: isComplete ? 0.9 : 1
                }}
                transition={{ 
                  delay: isComplete ? 0 : 1,
                  duration: isComplete ? 0.6 : 0.8
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="relative">
                  <div 
                    className="w-full h-3 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{ 
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.5)',
                          '0 0 30px rgba(139, 92, 246, 0.7)',
                          '0 0 20px rgba(59, 130, 246, 0.5)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ transformStyle: 'preserve-3d' }}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="mt-4 text-lg font-semibold"
                    key={Math.floor(progress)}
                    initial={{ opacity: 0.5, scale: 0.9 }}
                    animate={{ 
                      opacity: isComplete ? 0 : 1,
                      scale: isComplete ? 0.8 : 1
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {Math.floor(progress)}%
                  </motion.div>
                </div>
              </motion.div>

              {/* 3D Loading Text */}
              <motion.div
                ref={textRef}
                className="mt-6"
                initial={{ opacity: 0, rotateX: 30 }}
                animate={{ 
                  opacity: isComplete ? 0 : 1,
                  rotateX: isComplete ? -10 : 0
                }}
                transition={{ 
                  delay: isComplete ? 0 : 1.5,
                  duration: isComplete ? 0.5 : 0.8
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.p
                  className="text-lg font-medium"
                  animate={{ 
                    opacity: isComplete ? 0 : [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: isComplete ? 0.4 : 2,
                    repeat: isComplete ? 0 : Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #6b7280, #9ca3af)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transformStyle: 'preserve-3d'
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

export default LoadingScreen3D; 