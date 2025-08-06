import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/animations/LoadingScreen';
import MouseFollower from '@/components/animations/MouseFollower';
import FloatingParticles from '@/components/animations/FloatingParticles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import VideoComponent from '@/components/sections/VideoComponent';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TeamMembers from '@/components/sections/TeamMembers';

const Index = () => {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    assetsLoaded: false,
    minimumTimeElapsed: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = [
      '/src/assets/hero-bg.jpg',
      '/src/assets/office-1.jpg',
      '/src/assets/office-2.jpg',
      '/src/assets/team-meeting.jpg',
      '/src/assets/rtech-logo.png'
    ];

    // Set minimum loading time (1.5s for better UX)
    loadingTimeoutRef.current = setTimeout(() => {
      setLoadingState(prev => ({
        ...prev,
        minimumTimeElapsed: true
      }));
    }, 1500);

    // Load all assets
    Promise.all(
      preloadAssets.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if some images fail
        });
      })
    ).then(() => {
      setLoadingState(prev => ({
        ...prev,
        assetsLoaded: true
      }));
    });

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only complete loading when both conditions are met
    if (loadingState.assetsLoaded && loadingState.minimumTimeElapsed) {
      setLoadingState(prev => ({ ...prev, isLoading: false }));
    }
  }, [loadingState.assetsLoaded, loadingState.minimumTimeElapsed]);

  const handleLoadingComplete = () => {
    setIsVisible(true);
    // Enable scrolling after load complete
    document.body.style.overflow = 'auto';
  };

  // Disable scrolling during loading
  useEffect(() => {
    if (loadingState.isLoading) {
      document.body.style.overflow = 'hidden';
    }
  }, [loadingState.isLoading]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loadingState.isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-background relative overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
      >
        {/* Global Animation Elements */}
        <MouseFollower />
        <FloatingParticles />
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <VideoComponent />
          <ServicesSection />
          <TeamMembers />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;