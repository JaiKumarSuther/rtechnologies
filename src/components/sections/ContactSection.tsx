import { useState } from "react";
import { motion } from "framer-motion";
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
import ScrollAnimation from "@/components/animations/ScrollAnimations";
import { Button3D } from "@/components/ui/Button3D";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { toast } = useToast();

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
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-Commerce Solutions",
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

      <div className="container mx-auto px-6 relative z-10 pt-[10px]">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Ready to Transform Your Ideas?
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and turn your vision into reality. Get a
            free consultation and see how we can help your business grow.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  Let's Start Something Amazing Together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ready to take your business to the next level? We're here to
                  help you succeed with cutting-edge technology solutions.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Card3D className="text-center p-6 group" intensity={20}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-brand-gradient mx-auto mb-4 flex items-center justify-center shadow-glow"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 text-gradient">
                        {info.title}
                      </h4>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">
                          {info.content}
                        </span>
                      )}
                    </Card3D>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="p-6 rounded-lg bg-brand-gradient-subtle border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">
                    Global Reach, Local Expertise
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based in Pakistan, serving clients worldwide. We work in your
                  timezone and speak your language.
                </p>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right" delay={0.4}>
            <Card3D className="p-8" intensity={15}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
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
                  <div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
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
                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setIsDropdownOpen(true)}
                        onBlur={() => setIsDropdownOpen(false)}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/70 border border-border/70 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground pointer-events-none">
                        {isDropdownOpen ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Input3D
                    type="text"
                    id="message"
                    name="message"
                    label="Project Details *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    intensity={10}
                    glowColor="rgba(59, 130, 246, 0.5)"
                    className="h-32"
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

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>We'll respond within 24 hours</span>
                </div>
              </form>
            </Card3D>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;