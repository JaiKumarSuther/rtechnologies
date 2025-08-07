import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Rocket, Zap, Terminal, Cpu, Database } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import ImageSlideshow from '@/components/ui/ImageSlideshow';
import CodeMatrix from '@/components/ui/CodeMatrix';
import { Button3D } from '@/components/ui/Button3D';
import FloatingParticles3D from '@/components/animations/FloatingParticles3D';
import { Text3D } from '@/components/ui/Text3D';
import Text3DSimple from '@/components/ui/Text3DSimple';
import Grid3D from '@/components/ui/Grid3D';
import MorphingShape3D from '@/components/ui/MorphingShape3D';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // CSS-based animations with JavaScript timing
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      words.forEach((word, index) => {
        setTimeout(() => {
          (word as HTMLElement).style.opacity = '1';
          (word as HTMLElement).style.transform = 'translateY(0)';
        }, index * 100);
      });
    }

    // Floating animation for icons using CSS
    const floatingElements = document.querySelectorAll('.floating-icon');
    floatingElements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = `floating ${3 + index * 0.5}s ease-in-out infinite`;
      }, index * 200);
    });
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const words = "Where Code Meets Innovation.".split(" ");
  
  const heroImages = [
    '/src/assets/hero-bg.jpg',
    '/src/assets/office-1.jpg',
    '/src/assets/office-2.jpg',
    '/src/assets/team-meeting.jpg'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Floating Particles Background */}
      <FloatingParticles3D 
        count={50}
        colors={['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']}
        sizeRange={[2, 15]}
        speedRange={[20, 100]}
        depthRange={[0, 200]}
        className="z-0"
      />
      
      {/* 3D Grid Background */}
      <Grid3D 
        rows={25}
        cols={25}
        spacing={60}
        depth={150}
        color="#3B82F6"
        intensity={20}
        className="z-0 opacity-30"
      />
      
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageSlideshow 
          images={heroImages}
          autoPlay={true}
          interval={5000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-matrix-gradient opacity-90" />
        <CodeMatrix containerRef={heroRef} />
      </div>

      {/* Floating Coding Icons - Enhanced Responsive Positioning */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="floating-icon absolute top-[15%] left-[8%] sm:left-[12%] md:left-[15%] lg:left-[20%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute top-[25%] right-[8%] sm:right-[12%] md:right-[15%] lg:right-[20%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 text-accent shadow-glow-accent" />
        </motion.div>
        <motion.div
          className="floating-icon absolute bottom-[30%] left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Cpu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary-glow shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute top-[45%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute bottom-[20%] right-[15%] sm:right-[20%] md:right-[25%] lg:right-[30%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-accent shadow-glow-accent" />
        </motion.div>
      </div>

      {/* Main Content - Enhanced Alignment */}
      <div ref={heroRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)] text-center">
          {/* Hero Title with Professional 3D Text */}
          <ScrollAnimation direction="scale" delay={0.2}>
            <div ref={textRef} className="mb-8 sm:mb-12 lg:mb-16">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
                {words.map((word, index) => (
                  <div key={index} className="relative word-3d">
                    <Text3DSimple
                      variant="premium"
                      color="#FFFFFF"
                      shadowColor="#1E293B"
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-3d-hover"
                    >
                      {word}
                    </Text3DSimple>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Hero Description */}
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="mb-8 sm:mb-12 lg:mb-16 max-w-4xl lg:max-w-5xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed sm:leading-loose">
                Custom software, websites, and digital products that don't just look good—they perform.
                <br className="hidden sm:block" />
                <span className="inline-block mt-2 sm:mt-3 text-white font-semibold">
                  At R TECHNOLOGIES, we turn your business ideas into scalable, user-friendly tech that drives real growth.
                </span>
              </p>
            </div>
          </ScrollAnimation>

          {/* Call-to-Action Buttons with 3D Shapes */}
          <ScrollAnimation direction="up" delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center w-full max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center gap-4">
                <MorphingShape3D 
                  size={60}
                  color="#3B82F6"
                  className="hidden sm:block"
                />
                <Button3D 
                  variant="default" 
                  size="lg"
                  onClick={() => scrollToNextSection()}
                  className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]"
                  intensity={25}
                >
                  <span className="mr-2">Explore Our Services</span>
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                </Button3D>
              </div>
              <div className="flex items-center gap-4">
                <Button3D 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]"
                  intensity={25}
                >
                  Get Free Consultation
                </Button3D>
                <MorphingShape3D 
                  size={60}
                  color="#10B981"
                  className="hidden sm:block"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-xl sm:blur-2xl lg:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;