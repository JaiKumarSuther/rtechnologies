import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ScrollAnimation from "@/components/animations/ScrollAnimations";

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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-12 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Client Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Trusted By Industry Leaders
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
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
              <GlassCard className="h-full group hover:scale-[1.02] transition-transform duration-500">
                <motion.div
                  className="relative h-full p-6 md:p-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-sm md:text-base italic text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
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
                      <h4 className="font-bold text-base text-foreground truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </GlassCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation direction="up" delay={0.6} className="mt-12 md:mt-20 text-center">
          <div className="bg-brand-gradient-subtle p-6 md:p-8 rounded-xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Ready to experience the R Technologies difference?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let's build something amazing together.
            </p>
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 rounded-lg bg-brand-gradient text-black font-medium text-sm md:text-base shadow-glow hover:shadow-glow-accent transition-all duration-300"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
