import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Globe,
  Sparkles,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card3D } from "@/components/ui/Card3D";
import { Input3D } from "@/components/ui/Input3D";
import { Select3D } from "@/components/ui/Select3D";
import ScrollAnimation from "@/components/animations/ScrollAnimations";
import { Button3D } from "@/components/ui/Button3D";
import React from "react";

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Debug function to check form state
  const debugFormState = () => {
    console.log('Current form data:', formData);
  };

  // Add useEffect to debug form state changes
  React.useEffect(() => {
    debugFormState();
  }, [formData]);

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

  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "software-development", label: "Software Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "ecommerce-solutions", label: "E-Commerce Solutions" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    console.log('ContactSection handleChange:', e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative pb-10 overflow-hidden">
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
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get In Touch
              </motion.h2>
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
                <motion.h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient mb-6 sm:mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Let's Connect
                </motion.h3>
                
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

            {/* Contact Form */}
            <ScrollAnimation direction="right" delay={0.4}>
              <Card3D className="p-4 sm:p-6 lg:p-8" intensity={15}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-h-[80px]">
                      <Input3D
                        type="text"
                        id="name"
                        name="name"
                        label="Full Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        intensity={10}
                        glowColor="rgba(59, 130, 246, 0.5)"
                      />
                    </div>
                    <div className="min-h-[80px]">
                      <Input3D
                        type="email"
                        id="email"
                        name="email"
                        label="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        intensity={10}
                        glowColor="rgba(59, 130, 246, 0.5)"
                      />
                    </div>
                  </div>

                  {/* Company and Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-h-[80px]">
                      <Input3D
                        type="text"
                        id="company"
                        name="company"
                        label="Company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        intensity={10}
                        glowColor="rgba(59, 130, 246, 0.5)"
                      />
                    </div>
                    <div className="min-h-[80px]">
                      <Select3D
                        id="service"
                        name="service"
                        label="Service Interested In"
                        value={formData.service}
                        onChange={handleChange}
                        options={services}
                        placeholder="Select a service"
                        intensity={10}
                        glowColor="rgba(59, 130, 246, 0.5)"
                      />
                    </div>
                  </div>

                  {/* Message Row */}
                  <div className="min-h-[140px]">
                    <Input3D
                      multiline={true}
                      rows={5}
                      id="message"
                      name="message"
                      label="Project Details *"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      intensity={10}
                      glowColor="rgba(59, 130, 246, 0.5)"
                      className="min-h-[140px]"
                    />
                  </div>

                  <Button3D
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    intensity={20}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send size={20} />
                      </div>
                    )}
                  </Button3D>

                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary" />
                    <span>We'll respond within 24 hours</span>
                  </div>
                </form>
              </Card3D>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;