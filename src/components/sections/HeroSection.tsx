import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Rocket, Zap, Terminal, Cpu, Database } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import ImageSlideshow from '@/components/ui/ImageSlideshow';
import CodeMatrix from '@/components/ui/CodeMatrix';

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
        <CodeMatrix />
      </div>

      {/* Floating Coding Icons - Responsive Sizes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          className="floating-icon absolute top-1/4 left-[10%] md:left-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Terminal className="w-6 h-6 md:w-10 md:h-10 text-primary shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute top-1/3 right-[10%] md:right-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Code className="w-5 h-5 md:w-9 md:h-9 text-accent shadow-glow-accent" />
        </motion.div>
        <motion.div
          className="floating-icon absolute bottom-1/3 left-[5%] md:left-1/6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Cpu className="w-4 h-4 md:w-7 md:h-7 text-primary-glow shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute top-1/2 right-[5%] md:right-1/6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <Database className="w-4 h-4 md:w-7 md:h-7 text-primary shadow-glow" />
        </motion.div>
        <motion.div
          className="floating-icon absolute bottom-1/4 right-1/4 md:right-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Rocket className="w-5 h-5 md:w-8 md:h-8 text-accent shadow-glow-accent" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="scale" delay={0.2}>
          <div ref={textRef} className="pt-16 md:pt-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
              {words.map((word, index) => (
                <span 
                  key={index} 
                  className="word inline-block mr-2 sm:mr-3 md:mr-4 opacity-0 translate-y-10 text-gradient text-shadow-glow"
                  style={{
                    transition: `opacity 0.5s ease, transform 0.5s ease`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.8}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Custom software, websites, and digital products that don't just look good—they perform.
            <br className="hidden sm:block" />
            <span className="inline-block mt-2 text-gradient font-semibold">
              At R TECHNOLOGIES, we turn your business ideas into scalable, user-friendly tech that drives real growth.
            </span>
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={1.2}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 md:mb-16">
            <AnimatedButton 
              variant="primary" 
              size="lg"
              onClick={() => scrollToNextSection()}
              className="w-full sm:w-auto"
            >
              <span className="mr-2">Explore Our Services</span>
              <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            </AnimatedButton>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Get Free Consultation
            </AnimatedButton>
          </div>
        </ScrollAnimation>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer hover-target hidden sm:block"
          onClick={scrollToNextSection}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Scroll Down</span>
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 10px hsl(var(--primary) / 0.3)",
                  "0 0 20px hsl(var(--primary) / 0.6)",
                  "0 0 10px hsl(var(--primary) / 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-1 sm:p-2 rounded-full border border-border/50"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
            </motion.div>
          </div>
        </motion.div> */}
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