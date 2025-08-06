import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      '/src/assets/hero-bg.jpg',
      '/src/assets/office-1.jpg',
      '/src/assets/office-2.jpg',
      '/src/assets/team-meeting.jpg',
      '/src/assets/rtech-logo.png'
    ];

    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      })
    ).then(() => {
      // Minimum loading time for UX
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsVisible(true);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div
      className="min-h-screen bg-background relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Global Animation Elements */}
      <MouseFollower />
      <FloatingParticles />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <VideoComponent/>
        <ServicesSection />
        <TeamMembers />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
