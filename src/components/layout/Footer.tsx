import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
import rtechLogo from '@/assets/rtech-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Software Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-Commerce"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card/50 backdrop-blur-xl border-t border-border/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={rtechLogo} 
                alt="R Technologies" 
                className="h-10 w-auto filter brightness-110"
              />
              <div className="text-xl font-bold text-gradient">
                R TECHNOLOGIES
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into innovative digital solutions. We build the future, one line of code at a time.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:hello@rtechnologies.pk"
                  className="hover:text-primary transition-colors duration-300"
                >
                  hello@rtechnologies.pk
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a 
                  href="tel:+923001234567"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +92 300 1234567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gradient">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-gradient">Stay Connected</h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Follow us for the latest updates, tech insights, and project showcases.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-full px-4 py-3 rounded-lg bg-brand-gradient text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Back to Top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} R Technologies. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;