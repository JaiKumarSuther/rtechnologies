import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rtechLogo from '@/assets/rtech-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Wait for animation to complete
          setTimeout(() => {
            // Hide the content
            setShowContent(false);
            // Ensure the animation frame is done before calling complete
            requestAnimationFrame(() => {
              onComplete();
            });
          }, 800); // Match this with your exit animation duration
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={animationRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, hsl(190 85% 35% / 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(190 80% 40% / 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, hsl(190 80% 50% / 0.03) 0%, transparent 50%),
          linear-gradient(180deg, hsl(210 10% 5%) 0%, hsl(210 10% 3%) 100%)
        `,
        pointerEvents: isComplete ? 'none' : 'auto'
      }}
    >
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: isComplete ? 0 : [1, 1.5, 1],
                  opacity: isComplete ? 0 : [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
                animate={{
                  scale: isComplete ? 0 : [1.5, 1, 1.5],
                  opacity: isComplete ? 0 : [0.7, 0.3, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: isComplete ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Logo Animation */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: isComplete ? 0.9 : 1,
                  rotate: isComplete ? 5 : 0,
                  opacity: isComplete ? 0 : 1
                }}
                transition={{ 
                  duration: isComplete ? 0.7 : 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              >
                <motion.img
                  src={rtechLogo}
                  alt="R Technologies"
                  className="h-[200px] w-auto mx-auto filter brightness-110"
                  animate={{ 
                    filter: isComplete ? "brightness(100%)" : [
                      "brightness(110%) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
                      "brightness(130%) drop-shadow(0 0 30px hsl(var(--primary) / 0.6))",
                      "brightness(110%) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))"
                    ]
                  }}
                  transition={{
                    duration: isComplete ? 0.4 : 2,
                    repeat: isComplete ? 0 : Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Company Name */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isComplete ? 0 : 1,
                  y: isComplete ? 10 : 0
                }}
                transition={{ 
                  delay: isComplete ? 0 : 0.5,
                  duration: isComplete ? 0.6 : 0.8
                }}
              >
                <h1 className="text-4xl font-bold text-gradient mb-2">
                  R TECHNOLOGIES
                </h1>
                <p className="text-muted-foreground">
                  Where Ideas Meet Innovation
                </p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="w-64 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 0 : 1 }}
                transition={{ 
                  delay: isComplete ? 0 : 1,
                  duration: isComplete ? 0.4 : 0.5
                }}
              >
                <div className="relative">
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-gradient rounded-full shadow-glow"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <motion.div
                    className="mt-4 text-sm text-muted-foreground font-medium"
                    key={Math.floor(progress)}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isComplete ? 0 : 1 }}
                  >
                    {Math.floor(progress)}%
                  </motion.div>
                </div>
              </motion.div>

              {/* Loading Text */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 0 : 1 }}
                transition={{ 
                  delay: isComplete ? 0 : 1.5,
                  duration: isComplete ? 0.3 : 0.5
                }}
              >
                <motion.p
                  className="text-sm text-muted-foreground"
                  animate={{ 
                    opacity: isComplete ? 0 : [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: isComplete ? 0.3 : 1.5,
                    repeat: isComplete ? 0 : Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {isComplete ? "Ready!" : "Initializing amazing experience..."}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;