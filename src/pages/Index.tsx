import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen3DAdvanced from '@/components/animations/LoadingScreen3DAdvanced';
import MouseFollower from '@/components/animations/MouseFollower';
import FloatingParticles from '@/components/animations/FloatingParticles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CryptoWeb3Section from '@/components/sections/CryptoWeb3Section';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import VideoComponent from '@/components/sections/VideoComponent';
import TestimonialsSection from '@/components/sections/TestimonialsSection';


const Index = () => {
  // Check if this is a fresh page load (not navigation)
  // Use a more reliable method to detect fresh page loads
  const [isFreshLoad, setIsFreshLoad] = useState(true);
  
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    assetsLoaded: false,
    minimumTimeElapsed: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [loadingScreenComplete, setLoadingScreenComplete] = useState(false);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Check if this is a fresh page load by looking at performance navigation type
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isPageRefresh = performance.navigation.type === 1 || 
                         navigationEntry?.type === 'reload';
    
    // Also check if we're coming from a different domain or no referrer
    const hasReferrer = document.referrer && 
                       document.referrer.includes(window.location.hostname);
    
    const shouldShowLoading = isPageRefresh || !hasReferrer;
    setIsFreshLoad(shouldShowLoading);
    
    if (!shouldShowLoading) {
      // If it's not a fresh load, skip loading
      setLoadingState(prev => ({
        ...prev,
        isLoading: false,
        assetsLoaded: true,
        minimumTimeElapsed: true
      }));
      setIsVisible(true);
      setLoadingScreenComplete(true);
      return;
    }

    // Preload critical assets
    const preloadAssets = [
      '/src/assets/hero-bg.jpg',
      '/src/assets/office-1.jpg',
      '/src/assets/office-2.jpg',
      '/src/assets/team-meeting.jpg',
      '/src/assets/rtech-logo.png'
    ];

    // Set minimum loading time (1.5s for faster UX)
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
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false); // Continue even if some images fail
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
    // Only complete loading when both conditions are met AND loading screen is complete
    if (loadingState.assetsLoaded && loadingState.minimumTimeElapsed && loadingScreenComplete) {
      // Start showing main content with a slight delay for smoother overlap
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
      
      // Hide loading screen after main content starts appearing
      setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false }));
      }, 400); // Shorter delay for faster transition
    }
  }, [loadingState.assetsLoaded, loadingState.minimumTimeElapsed, loadingScreenComplete]);

  const handleLoadingComplete = () => {
    setLoadingScreenComplete(true);
  };

  // Disable scrolling during loading
  useEffect(() => {
    if (loadingState.isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling after load complete
      document.body.style.overflow = 'auto';
    }
  }, [loadingState.isLoading]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loadingState.isLoading && (
          <LoadingScreen3DAdvanced 
            onComplete={handleLoadingComplete} 
            duration={Math.max(1500, loadingState.assetsLoaded ? 800 : 1500)} 
          />
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
          <CryptoWeb3Section />
          <VideoComponent />
          <ServicesSection />
          <PortfolioSection />
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