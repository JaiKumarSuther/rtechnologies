import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter, Dribbble, Box, Hexagon, Star, Sparkles } from "lucide-react";
import Grid3D from "@/components/ui/Grid3D";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
  };
}

const TeamSlideshow = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sameer",
      role: "CEO",
      bio: "Visionary leader driving innovation and strategic growth at R Technologies.",
      image:
        "https://res.cloudinary.com/dw9f5quok/image/upload/v1754491435/sameer_uyaqyc.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Zohaib Malik",
      role: "Managing Director",
      bio: "Experienced tech leader overseeing operations and delivering impactful software solutions.",
      image:
        "https://res.cloudinary.com/dw9f5quok/image/upload/v1754491436/zohaib_ihxwjg.jpg",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Osama",
      role: "Project Manager",
      bio: "Dynamic project manager ensuring smooth execution of client projects with attention to detail.",
      image:
        "https://res.cloudinary.com/dw9f5quok/image/upload/v1754491436/osama_earync.jpg",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Jai Kumar",
      role: "Jr Web Developer",
      bio: "Passionate web developer focused on creating seamless user experiences and innovative features.",
      image:
        "https://res.cloudinary.com/dw9f5quok/image/upload/v1754491437/jai_malw2c.jpg",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const controls = useAnimation();
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Auto-play configuration
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  // Animation controls
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [currentIndex, controls]);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "dribbble":
        return <Dribbble className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced 3D Grid Background */}
      <Grid3D 
        rows={20}
        cols={20}
        spacing={90}
        depth={80}
        color="#EC4899"
        intensity={15}
        className="opacity-20"
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Glowing Cube */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-lg border border-gray-700"
          style={{
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.2)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent rounded-lg" />
        </motion.div>

        {/* Floating Pink Sphere */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.8)"
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

        {/* Purple Glowing Cube */}
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-lg border border-gray-700"
          style={{
            boxShadow: "0 0 15px rgba(147, 51, 234, 0.5), inset 0 0 15px rgba(147, 51, 234, 0.1)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-lg" />
        </motion.div>

        {/* Additional Cubes Grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 md:gap-6 opacity-40">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg border border-gray-700"
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

        {/* Floating Icons */}
        {[Box, Hexagon, Star].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-pink-400/20"
            style={{
              left: `${20 + index * 25}%`,
              top: `${10 + index * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}

        {/* Connecting Lines Effect */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M20 30 L80 40 M30 70 L70 60 M40 20 L60 80"
            stroke="rgba(236, 72, 153, 0.3)"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Team</span>
            <Sparkles size={16} className="text-primary animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet the Minds Behind the Magic
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our talented team of developers, designers, and strategists work together to bring your vision to life.
          </motion.p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden" id="team">
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                variants={slideVariants}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-6"
              >
                {/* Team Member Image */}
                <motion.div
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Team Member Info */}
                <div className="text-center md:text-left max-w-md">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-2 text-gradient"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {teamMembers[currentIndex].name}
                  </motion.h3>

                  <motion.p
                    className="text-lg md:text-xl text-accent mb-4 font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 3 }}
                  >
                    {teamMembers[currentIndex].role}
                  </motion.p>

                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 3 }}
                  >
                    {teamMembers[currentIndex].bio}
                  </motion.p>

                  <motion.div
                    className="flex justify-center md:justify-start gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {Object.entries(teamMembers[currentIndex].social).map(
                      ([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                          aria-label={platform}
                          whileHover={{ scale: 1.2, rotate: 10, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {getSocialIcon(platform)}
                        </motion.a>
                      )
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
            aria-label="Next slide"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-secondary"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlideshow;