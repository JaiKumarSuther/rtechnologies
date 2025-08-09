import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import anime from "animejs";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MouseFollower from '@/components/animations/MouseFollower';
import FloatingParticles from '@/components/animations/FloatingParticles';

const PortfolioShowcase = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Hero entrance animation
    if (!heroRef.current) return;
    const words = heroRef.current.querySelectorAll(".word");
    (anime as any)({
      targets: words,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: (anime as any).stagger(60),
      duration: 700,
      easing: "easeOutExpo",
    });
  }, []);

  // Project data with proper asset paths
  const projects = [
    {
      title: "Check In",
      description: "Checkin is a location-based social app that enables users to check in at nearby venues, connect with others, and engage in real-time chats, all powered by Node.js and Flutter.",
      images: [
        "/src/assets/checkin-1.png", 
        "/src/assets/checkin-2.png", 
        "/src/assets/checkin-3.png"
      ],
      tech: ["Flutter", "Node.js", "Socket.io", "MongoDB"],
      category: "Social Platform"
    },
    {
      title: "Holla Gorilla",
      description: "An engaging social app designed to foster community conversations and spontaneous social interactions. Targeted towards individuals looking for fun, adventure, and like-minded social groups.",
      images: [
        "/src/assets/holla-gorrila-1.png", 
        "/src/assets/holla-gorrila-2.png", 
        "/src/assets/holla-gorrila-3.png"
      ],
      tech: ["React Native", "Firebase", "WebRTC", "Redux"],
      category: "Community App",
      reverse: true,
    },
    {
      title: "Guided by Culture",
      description: "A mentorship app where mentees can hire mentors, chat, arrange meetings, and pay for mentorship services. Built using Spring Boot (Java) and Flutter, it offers a seamless experience for personalized skill development.",
      images: [
        "/src/assets/guided-by-culture-1.png", 
        "/src/assets/guided-by-culture-2.png", 
        "/src/assets/guided-by-culture-3.png"
      ],
      tech: ["Flutter", "Spring Boot", "PostgreSQL", "Stripe"],
      category: "E-Learning"
    },
    {
      title: "Nursery App",
      description: "A nursery platform enabling parents and staff to coordinate activities, track progress, and streamline communication with a delightful mobile-first experience.",
      images: [
        "/src/assets/nursery-1.png", 
        "/src/assets/nursery-2.png", 
        "/src/assets/nursery-3.png"
      ],
      tech: ["React Native", "Node.js", "MySQL", "AWS"],
      category: "Education",
      reverse: true,
    },
    {
      title: "Dance Around",
      description: "A social app where users can make friends, chat to earn points, and jam together by listening to the same song.",
      images: [
        "/src/assets/dance-around-1.png", 
        "/src/assets/dance-around-2.png", 
        "/src/assets/dance-around-3.png"
      ],
      tech: ["Flutter", "Firebase", "Spotify API", "WebRTC"],
      category: "Music & Social"
    },
    {
      title: "Blush Application",
      description: "A hookah bar app where users can explore various hookah flavors, order food and book events. A seamless way to enjoy a personalized hookah and food experience.",
      images: [
        "/src/assets/blush-application-1.png", 
        "/src/assets/blush-application-2.png", 
        "/src/assets/blush-application-3.png"
      ],
      tech: ["React Native", "Node.js", "Stripe", "Google Maps"],
      category: "Hospitality",
      reverse: true,
    },
    {
      title: "IPTV",
      description: "Internet Protocol Television (IPTV) apps allow users to stream live TV, video-on-demand, and time-shifted media over the internet on various devices.",
      images: [
        "/src/assets/iptv-1.png", 
        "/src/assets/iptv-2.png", 
        "/src/assets/iptv-3.png"
      ],
      tech: ["Flutter", "Node.js", "FFmpeg", "CDN"],
      category: "Media Streaming"
    },
    {
      title: "Hi Techie",
      description: "A jobs and freelance marketplace where users can apply for jobs across various domains or hire freelancers for project-based and part-time work.",
      images: [
        "/src/assets/hitechie-1.png", 
        "/src/assets/hitechie-2.png", 
        "/src/assets/hitechie-3.png"
      ],
      tech: ["React Native", "Spring Boot", "PostgreSQL", "ElasticSearch"],
      category: "Marketplace",
      reverse: true,
    },
    {
      title: "Fixit",
      description: "A service booking app similar to Indrive, but instead of booking cars, users can book service providers for various tasks such as home repairs, cleaning, plumbing, and more.",
      images: [
        "/src/assets/fixit-1.png", 
        "/src/assets/fixit-2.png", 
        "/src/assets/fixit-3.png"
      ],
      tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      category: "Service Platform"
    },
  ];

  // Project section component
  const ProjectSection = ({ 
    title, 
    description, 
    images, 
    tech,
    category,
    reverse = false,
    index
  }: {
    title: string;
    description: string;
    images: string[];
    tech: string[];
    category: string;
    reverse?: boolean;
    index: number;
  }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!sectionRef.current) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section 
        ref={sectionRef} 
        className="py-20 px-6"
        aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:grid-flow-col' : ''
          }`}>
            {/* Content */}
            <motion.div 
              className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-sm text-primary">
                {category}
              </div>
              
              <h2 
                id={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`} 
                className="text-4xl md:text-5xl font-bold text-gradient"
              >
                {title}
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full text-sm border border-border/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary hover:bg-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
                <span>→</span>
              </motion.button>
            </motion.div>

            {/* Images */}
            <motion.div 
              className={`${reverse ? 'lg:order-1' : ''}`}
              initial={{ opacity: 0, x: reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4 perspective-1000">
                {images.map((src, idx) => (
                  <motion.figure 
                    key={idx} 
                    className="mobile-frame-enhanced mobile-frame-animated"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: idx === 1 ? 0 : (idx === 0 ? -5 : 5),
                      z: 20
                    }}
                  >
                    <div className="mobile-screen-enhanced">
                      <img
                        src={src}
                        alt={`${title} screen ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
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
      
      {/* Header */}
      <Header />

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
            </motion.div>
            
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {"Bringing Ideas to Life Through ".split(" ").map((w, i) => (
                  <span key={i} className="word word-3d text-gradient mr-2 inline-block">{w}</span>
                ))}
                <br />
                {"Design & Development".split(" ").map((w, i) => (
                  <span key={`b-${i}`} className="word word-3d text-gradient mr-2 inline-block">{w}</span>
                ))}
              </h1>
            </div>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From concept to creation, our work blends beautiful visuals with robust engineering. 
              Explore our collection of innovative mobile applications below.
            </motion.p>

            {/* Featured Apps Preview */}
            <motion.div 
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                '/src/assets/blush-application-1.png',
                '/src/assets/checkin-1.png',
                '/src/assets/dance-around-1.png'
              ].map((src, i) => (
                <motion.div 
                  key={i} 
                  className="mobile-frame-enhanced"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mobile-screen-enhanced">
                    <img 
                      src={src} 
                      alt={`Featured app ${i+1}`} 
                      loading="lazy"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display='none';
                      }} 
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        {projects.map((project, index) => (
          <ProjectSection 
            key={project.title} 
            title={project.title} 
            description={project.description} 
            images={project.images}
            tech={project.tech}
            category={project.category}
            reverse={project.reverse} 
            index={index}
          />
        ))}

        {/* Contact CTA */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              className="p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gradient">
                Have an idea? Let's build it.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Drop a message and we'll get back within 24 hours.
              </p>
              <motion.a 
                href="mailto:hello@rtechnologies.pk"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a project
                <span>→</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioShowcase;
