import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Sparkles,
  Box,
  Hexagon,
  Zap
} from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import ScrollAnimation from "@/components/animations/ScrollAnimations";
import { Button3D } from "@/components/ui/Button3D";
import { Text3D } from "@/components/ui/Text3D";
import Text3DSimple from "@/components/ui/Text3DSimple";
import Grid3D from "@/components/ui/Grid3D";
import MorphingShape3D from "@/components/ui/MorphingShape3D";

const ContactSection = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@rtechnologies.pk",
      link: "mailto:hello@rtechnologies.pk",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92 300 1234567",
      link: "tel:+923001234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Islamabad, Pakistan",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 9AM - 6PM",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="relative pb-10 overflow-hidden">
      {/* Enhanced 3D Grid Background */}
      <Grid3D 
        rows={20}
        cols={20}
        spacing={80}
        depth={100}
        color="#8B5CF6"
        intensity={15}
        className="opacity-20"
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-40 h-40 md:w-56 md:h-56 bg-indigo-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-violet-500/10 rounded-full blur-3xl"
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
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(139, 92, 246, 0.2)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-lg" />
        </motion.div>

        {/* Floating Purple Sphere */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.8)"
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

        {/* Indigo Glowing Cube */}
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-lg border border-gray-700"
          style={{
            boxShadow: "0 0 15px rgba(99, 102, 241, 0.5), inset 0 0 15px rgba(99, 102, 241, 0.1)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-lg" />
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
            className="absolute text-purple-400/20"
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
            stroke="rgba(139, 92, 246, 0.3)"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-5">
                  {["Get", "In", "Touch"].map((word, index) => (
                    <motion.div 
                      key={index} 
                      className="relative word-3d"
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Text3DSimple
                        variant="elegant"
                        color="#3B82F6"
                        shadowColor="#1E293B"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-3d-hover"
                      >
                        {word}
                      </Text3DSimple>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                Ready to bring your ideas to life? Let's discuss your project and 
                explore how we can help you achieve your goals.
              </motion.p>
              
              <motion.button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary hover:bg-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Get in Touch
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <MorphingShape3D 
                    size={40}
                    color="#3B82F6"
                    className="hidden sm:block"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Text3DSimple
                      variant="subtle"
                      color="#3B82F6"
                      shadowColor="#1E293B"
                      className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight"
                    >
                      Let's Connect
                    </Text3DSimple>
                  </motion.div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      className="flex items-center p-3 sm:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300 } }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      <div className="ml-3 sm:ml-4">
                        <motion.h4 
                          className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {info.title}
                        </motion.h4>
                        <motion.p 
                          className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {info.content}
                        </motion.p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3 animate-pulse" />
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">Why Choose Us?</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <motion.li 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      • Fast response time (within 24 hours)
                    </motion.li>
                    <motion.li 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      • Free consultation and project planning
                    </motion.li>
                    <motion.li 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      • Transparent pricing and timelines
                    </motion.li>
                    <motion.li 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      • Ongoing support and maintenance
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </ScrollAnimation>

            {/* Contact Redirect */}
            <ScrollAnimation direction="right" delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card3D className="p-4 sm:p-6 lg:p-8" intensity={15}>
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        Ready to Start Your Project?
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        whileHover={{ x: 3 }}
                      >
                        Get in touch with us to discuss your project requirements, 
                        get a free consultation, and receive a personalized quote.
                      </motion.p>
                    </div>
                    
                    <div className="space-y-4">
                      <Button3D
                        variant="default"
                        size="lg"
                        onClick={() => navigate('/contact')}
                        intensity={20}
                        className="w-full group"
                      >
                        Contact Us Now
                        <motion.div
                          whileHover={{ x: 3, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </Button3D>
                      
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        whileHover={{ scale: 1.01 }}
                      >
                        Or call us directly: <a href="tel:+923001234567" className="text-primary hover:underline">+92 300 1234567</a>
                      </motion.p>
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <motion.div 
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                        whileHover={{ scale: 1.02 }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Free consultation available</span>
                      </motion.div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;