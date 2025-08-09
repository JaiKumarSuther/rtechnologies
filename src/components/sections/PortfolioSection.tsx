import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Code, Smartphone } from 'lucide-react';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import { Card3D } from '@/components/ui/Card3D';
import { Button3D } from '@/components/ui/Button3D';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      title: "Check In",
      description: "Location-based social app with real-time chat features",
      image: "/src/assets/checkin-1.png",
      category: "Mobile App",
      technologies: ["Flutter", "Node.js", "Socket.io"],
    },
    {
      title: "Holla Gorilla",
      description: "Community-focused social platform for spontaneous interactions",
      image: "/src/assets/holla-gorrila-1.png",
      category: "Social Platform",
      technologies: ["React Native", "Firebase", "WebRTC"],
    },
    {
      title: "Guided by Culture",
      description: "Mentorship platform connecting mentees with industry experts",
      image: "/src/assets/guided-by-culture-1.png",
      category: "E-Learning",
      technologies: ["Flutter", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "Blush Application",
      description: "Hookah bar experience with flavors, food ordering, and events",
      image: "/src/assets/blush-application-1.png",
      category: "Hospitality",
      technologies: ["React Native", "Node.js", "Stripe"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Mobile Apps That Make a Difference
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our collection of innovative mobile applications, each crafted with precision 
            and designed to deliver exceptional user experiences.
          </p>
        </ScrollAnimation>

        {/* Featured Projects Grid */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="p-6 h-full group" intensity={15}>
                  {/* Mobile Frame */}
                  <div className="mb-6 relative">
                    <div className="mobile-frame-enhanced mx-auto w-32">
                      <div className="mobile-screen-enhanced">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex gap-3">
                      <motion.button
                        className="p-3 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="text-center">
            <Card3D className="p-12 bg-gradient-to-r from-primary/10 to-accent/10" intensity={15}>
              <h3 className="text-3xl font-bold mb-4 text-white">Explore Our Complete Portfolio</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                See all our mobile applications, web platforms, and digital solutions that have helped 
                businesses transform their digital presence.
              </p>
              <Button3D
                variant="default"
                size="lg"
                onClick={() => navigate('/portfolio')}
                intensity={20}
                className="group"
              >
                View Full Portfolio
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button3D>
            </Card3D>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfolioSection;
