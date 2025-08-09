import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MouseFollower from '@/components/animations/MouseFollower';
import FloatingParticles from '@/components/animations/FloatingParticles';

const Portfolio = () => {
  // Cursor and hero animations
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Custom cursor trail
    const dot = cursorRef.current;
    if (!dot) return;
    const move = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    // Hero entrance animation using CSS and JS
    if (!heroRef.current) return;
    const words = heroRef.current.querySelectorAll(".word");
    words.forEach((word, index) => {
      setTimeout(() => {
        (word as HTMLElement).style.opacity = '1';
        (word as HTMLElement).style.transform = 'translateY(0)';
      }, index * 60);
    });
  }, []);

  // CSS-based floating background elements
  const FloatingBackground = () => (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent/10 blur-3xl rounded-none"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/8 blur-2xl rounded-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-4 h-4 bg-primary/20 rounded-none ${
            i % 3 === 1 ? 'rotate-45' : ''
          }`}
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + (i * 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );

  // Project data with proper asset paths
  const projects = [
    {
      title: "Check In",
      description: "Checkin is a location-based social app that enables users to check in at nearby venues, connect with others, and engage in real-time chats, all powered by Node.js and Flutter.",
      images: [
        "src/assets/checkin-1.png", 
        "src/assets/checkin-2.png", 
        "src/assets/checkin-3.png"
      ],
    },
    {
      title: "Holla Gorilla",
      description: "An engaging social app designed to foster community conversations and spontaneous social interactions. Targeted towards individuals looking for fun, adventure, and like-minded social groups.",
      images: [
        "src/assets/holla-gorrila-1.png", 
        "src/assets/holla-gorrila-2.png", 
        "src/assets/holla-gorrila-3.png"
      ],
      reverse: true,
    },
    {
      title: "Guided by Culture",
      description: "A mentorship app where mentees can hire mentors, chat, arrange meetings, and pay for mentorship services. Built using Spring Boot (Java) and Flutter, it offers a seamless experience for personalized skill development.",
      images: [
        "src/assets/guided-by-culture-1.png", 
        "src/assets/guided-by-culture-2.png", 
        "src/assets/guided-by-culture-3.png"
      ],
    },
    {
      title: "Nursery App",
      description: "A nursery platform enabling parents and staff to coordinate activities, track progress, and streamline communication with a delightful mobile-first experience.",
      images: [
        "src/assets/nursery-1.png", 
        "src/assets/nursery-2.png", 
        "src/assets/nursery-3.png"
      ],
      reverse: true,
    },
    {
      title: "Dance Around",
      description: "A social app where users can make friends, chat to earn points, and jam together by listening to the same song.",
      images: [
        "src/assets/dance-around-1.png", 
        "src/assets/dance-around-2.png", 
        "src/assets/dance-around-3.png"
      ],
    },
    {
      title: "Blush Application",
      description: "A hookah bar app where users can explore various hookah flavors, order food and book events. A seamless way to enjoy a personalized hookah and food experience.",
      images: [
        "src/assets/blush-application-1.png", 
        "src/assets/blush-application-2.png", 
        "src/assets/blush-application-3.png"
      ],
      reverse: true,
    },
    {
      title: "IPTV",
      description: "Internet Protocol Television (IPTV) apps allow users to stream live TV, video-on-demand, and time-shifted media over the internet on various devices.",
      images: [
        "src/assets/iptv-1.png", 
        "src/assets/iptv-2.png", 
        "src/assets/iptv-3.png"
      ],
    },
    {
      title: "Hi Techie",
      description: "A jobs and freelance marketplace where users can apply for jobs across various domains or hire freelancers for project-based and part-time work.",
      images: [
        "src/assets/hitechie-1.png", 
        "src/assets/hitechie-2.png", 
        "src/assets/hitechie-3.png"
      ],
      reverse: true,
    },
    {
      title: "Fixit",
      description: "A service booking app similar to Indrive, but instead of booking cars, users can book service providers for various tasks such as home repairs, cleaning, plumbing, and more.",
      images: [
        "src/assets/fixit-1.png", 
        "src/assets/fixit-2.png", 
        "src/assets/fixit-3.png"
      ],
    },
  ];



  // Project section component
  const ProjectSection = ({ 
    title, 
    description, 
    images, 
    reverse = false 
  }: {
    title: string;
    description: string;
    images: string[];
    reverse?: boolean;
  }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!sectionRef.current) return;
      const el = sectionRef.current;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate text
              if (textRef.current) {
                textRef.current.style.opacity = '1';
                textRef.current.style.transform = `translateX(0)`;
                textRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              }
              
              // Animate gallery items
              const frames = galleryRef.current?.querySelectorAll(".mobile-frame-enhanced");
              frames?.forEach((frame, index) => {
                setTimeout(() => {
                  (frame as HTMLElement).style.opacity = '1';
                  (frame as HTMLElement).style.transform = 'translateY(0)';
                  (frame as HTMLElement).style.transition = 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, index * 120);
              });
              
              io.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );

      io.observe(el);
      return () => io.disconnect();
    }, [reverse]);

    return (
      <section 
        ref={sectionRef} 
        className="screenshot-section" 
        aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}
      >
        <div className={`two-column-layout ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
          <div 
            ref={textRef} 
            className="space-y-4"
            style={{ 
              opacity: 0, 
              transform: reverse ? 'translateX(40px)' : 'translateX(-40px)' 
            }}
          >
            <h2 
              id={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`} 
              className="text-3xl md:text-4xl font-semibold text-gradient"
            >
              {title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div ref={galleryRef} className="screenshot-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 perspective-1000">
            {images.map((src, idx) => (
              <figure 
                key={idx} 
                className="transform-3d card-3d-hover mobile-frame-enhanced mobile-frame-animated !rounded-none w-full max-w-sm mx-auto" 
                aria-label={`${title} screenshot ${idx + 1}`}
                style={{ 
                  opacity: 0, 
                  transform: 'translateY(24px)' 
                }}
              >
                <div className="mobile-screen-enhanced aspect-[9/19] w-full max-h-[500px] !rounded-none overflow-hidden">
                  <img
                    src={src}
                    alt={`${title} screen ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top !rounded-none"
                    onError={(e) => {
                      console.error(`Failed to load image: ${src}`);
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Global Animation Elements */}
      <MouseFollower />
      <FloatingParticles />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <FloatingBackground />
      
      {/* Header */}
      <Header />

      <main className="relative z-10 pt-32">
        <div className="container mx-auto px-6">
          <section ref={heroRef} className="project-hero">
            <div className="project-hero-left">
              <span className="project-badge">Design & Development Portfolio</span>
              <h1 className="project-title text-3d-premium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {"Bringing Ideas to Life Through ".split(" ").map((w, i) => (
                  <span key={i} className="word word-3d mr-1">{w}</span>
                ))}
                <br />
                {"Design & Development".split(" ").map((w, i) => (
                  <span key={`b-${i}`} className="word word-3d mr-1">{w}</span>
                ))}
              </h1>
              <p className="project-description">
                From concept to creation, our work blends beautiful visuals with robust engineering. 
                Explore selected mobile app projects below.
              </p>
            </div>
            <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
              {/* Main Glowing Cube */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gray-800 border border-gray-700 rounded-md"
                style={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.2)"
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-md" />
              </motion.div>

              {/* Floating Primary Sphere */}
              <motion.div
                className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-md"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Accent Glowing Cube */}
              <motion.div
                className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 border border-gray-700 rounded-md"
                style={{
                  boxShadow: "0 0 15px rgba(139, 92, 246, 0.5), inset 0 0 15px rgba(139, 92, 246, 0.1)"
                }}
                animate={{
                  rotateY: [0, -360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-md" />
              </motion.div>

              {/* Grid of Small Cubes */}
              <div className="absolute inset-0 grid grid-cols-3 gap-4 md:gap-6 opacity-60">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 border border-gray-700 rounded-md"
                    animate={{
                      rotateY: [0, 180, 360],
                      rotateX: [0, 90, 180],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Connecting Lines Effect */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M20 30 L80 40 M30 70 L70 60 M40 20 L60 80"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{
                    strokeDasharray: [0, 100],
                    strokeDashoffset: [0, -100],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </section>

          {projects.map((p, idx) => (
            <ProjectSection 
              key={p.title} 
              title={p.title} 
              description={p.description} 
              images={p.images} 
              reverse={p.reverse} 
            />
          ))}

          <section id="contact" className="cta-section my-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gradient">
              Have an idea? Let's build it.
            </h2>
            <p className="text-muted-foreground mb-6">
              Drop a message and we'll get back within 24 hours.
            </p>
            <a 
              href="mailto:hello@rtechnologies.pk" 
              className="project-badge button-3d-press"
            >
              Start a project
            </a>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
