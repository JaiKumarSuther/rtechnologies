import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlideshowProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ImageSlideshow = ({ 
  images, 
  autoPlay = true, 
  interval = 4000,
  className = '' 
}: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl group ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>

      {/* Matrix Rain Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-2000" />
      </div>
    </div>
  );
};

export default ImageSlideshow;