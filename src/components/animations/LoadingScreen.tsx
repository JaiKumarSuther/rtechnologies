import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rtechLogo from '@/assets/rtech-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
            >
              <motion.img
                src={rtechLogo}
                alt="R Technologies"
                className="h-20 w-auto mx-auto filter brightness-110"
                animate={{ 
                  filter: [
                    "brightness(110%) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
                    "brightness(130%) drop-shadow(0 0 30px hsl(var(--primary) / 0.6))",
                    "brightness(110%) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
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
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
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
                  animate={{ opacity: 1 }}
                >
                  {Math.floor(progress)}%
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.p
                className="text-sm text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Initializing amazing experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;