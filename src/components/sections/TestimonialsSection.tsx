import { motion } from "framer-motion";
import { Quote, Star, Sparkles, Box, Hexagon, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ScrollAnimation from "@/components/animations/ScrollAnimations";
import Grid3D from "@/components/ui/Grid3D";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Carter",
      role: "CEO at HomeTech",
      content:
        "All automation transformed our operations by eliminating repetitive tasks and improving efficiency. Managing new workflows has never been easier!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Sankie Hart",
      role: "Director at Jonathan Mac.",
      content:
        "With R Technologies, we achieved new levels of accuracy. Our team now focuses on high-speed tasks while automation handles the rest!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "David Brown",
      role: "Sales Director at TechVision",
      content:
        "AI-powered insights boosted our sales efficiency. We can engage leads at the right time with smarter, data-based decisions!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Emily Wong",
      role: "Customer Support Supervisor",
      content:
        "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to R Technologies!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-background/50 to-muted/20">
      {/* Enhanced 3D Grid Background */}
      <Grid3D 
        rows={25}
        cols={25}
        spacing={80}
        depth={100}
        color="#F59E0B"
        intensity={15}
        className="opacity-20"
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-yellow-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-red-500/10 rounded-full blur-3xl"
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
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.6), inset 0 0 20px rgba(245, 158, 11, 0.2)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-lg" />
        </motion.div>

        {/* Floating Orange Sphere */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(245, 158, 11, 0.8)"
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

        {/* Yellow Glowing Cube */}
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-lg border border-gray-700"
          style={{
            boxShadow: "0 0 15px rgba(234, 179, 8, 0.5), inset 0 0 15px rgba(234, 179, 8, 0.1)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-lg" />
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
        {[Box, Hexagon, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-orange-400/20"
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
            stroke="rgba(245, 158, 11, 0.3)"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-12 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Client Testimonials
            </span>
            <Sparkles size={16} className="text-primary animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trusted By Industry Leaders
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Don't just take our word for it. Here's what our clients say about working with us.
          </motion.p>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.id}
              direction="up"
              delay={index * 0.1}
              className={index === 3 ? "lg:col-span-2 xl:col-span-1" : ""}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GlassCard className="h-full group">
                  <motion.div
                    className="relative h-full p-6 md:p-8"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute top-6 right-6 opacity-10"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star
                            className="w-4 h-4 md:w-5 md:h-5 fill-current text-yellow-400"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <motion.blockquote 
                      className="text-sm md:text-base italic text-muted-foreground mb-6 leading-relaxed"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      "{testimonial.content}"
                    </motion.blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                      <div className="min-w-0">
                        <motion.h4 
                          className="font-bold text-base text-foreground truncate"
                          whileHover={{ x: 3 }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <motion.p 
                          className="text-sm text-muted-foreground truncate"
                          whileHover={{ x: 3 }}
                        >
                          {testimonial.role}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={0.6} className="mt-12 md:mt-20 text-center">
          <motion.div 
            className="bg-brand-gradient-subtle p-6 md:p-8 rounded-xl border border-primary/20 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Ready to experience the R Technologies difference?
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto"
              whileHover={{ scale: 1.01 }}
            >
              Join our growing list of satisfied clients and let's build something amazing together.
            </motion.p>
            <motion.div 
              className="inline-block" 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 rounded-lg bg-brand-gradient text-black font-medium text-sm md:text-base shadow-glow hover:shadow-glow-accent transition-all duration-300"
              >
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
