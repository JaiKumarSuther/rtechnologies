import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter, Dribbble } from "lucide-react";

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
              whileHover={{ scale: 1.05 }}
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
              >
                {teamMembers[currentIndex].name}
              </motion.h3>

              <motion.p
                className="text-lg md:text-xl text-accent mb-4 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {teamMembers[currentIndex].role}
              </motion.p>

              <motion.p
                className="text-muted-foreground mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
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
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={platform}
                    >
                      {getSocialIcon(platform)}
                    </a>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {teamMembers.map((member, index) => (
          <button
            key={member.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-6" : "bg-secondary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSlideshow;