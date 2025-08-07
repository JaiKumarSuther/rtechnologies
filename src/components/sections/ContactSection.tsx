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
      {/* 3D Grid Background */}
      <Grid3D 
        rows={20}
        cols={20}
        spacing={80}
        depth={100}
        color="#8B5CF6"
        intensity={15}
        className="opacity-20"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-5">
                  {["Get", "In", "Touch"].map((word, index) => (
                    <div key={index} className="relative word-3d">
                      <Text3DSimple
                        variant="elegant"
                        color="#3B82F6"
                        shadowColor="#1E293B"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-3d-hover"
                      >
                        {word}
                      </Text3DSimple>
                    </div>
                  ))}
                </div>
              </div>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to bring your ideas to life? Let's discuss your project and 
                explore how we can help you achieve your goals.
              </motion.p>
              
              <motion.button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary hover:bg-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Get in Touch
                <span>→</span>
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
                  <Text3DSimple
                    variant="subtle"
                    color="#3B82F6"
                    shadowColor="#1E293B"
                    className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight"
                  >
                    Let's Connect
                  </Text3DSimple>
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
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {info.content}
                        </p>
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
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">Why Choose Us?</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <li>• Fast response time (within 24 hours)</li>
                    <li>• Free consultation and project planning</li>
                    <li>• Transparent pricing and timelines</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </motion.div>
              </div>
            </ScrollAnimation>

            {/* Contact Redirect */}
            <ScrollAnimation direction="right" delay={0.4}>
              <Card3D className="p-4 sm:p-6 lg:p-8" intensity={15}>
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get in touch with us to discuss your project requirements, 
                      get a free consultation, and receive a personalized quote.
                    </p>
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
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button3D>
                    
                    <p className="text-sm text-muted-foreground">
                      Or call us directly: <a href="tel:+923001234567" className="text-primary hover:underline">+92 300 1234567</a>
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Free consultation available</span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;