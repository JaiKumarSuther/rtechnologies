import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  ShoppingCart, 
  Settings,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import AnimatedButton from '@/components/ui/AnimatedButton';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "SEO-Optimized | Responsive | Conversion-Focused",
      description: "We build modern, fast, and mobile-friendly websites that work like a 24/7 sales team. From business websites to custom web portals, we combine speed, security, and search visibility to help you stand out and scale online.",
      gradient: "from-blue-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: Settings,
      title: "Software Development",
      subtitle: "Scalable | Secure | Tailor-Made for You",
      description: "We develop bespoke software solutions that streamline operations, automate tasks, and boost ROI. From ERP systems to SaaS platforms, we turn your workflow challenges into powerful tools—designed to grow with your business.",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS | Android | Cross-Platform Experts",
      description: "Build mobile apps that users love and businesses need. Whether you need a sleek startup MVP or a full-fledged enterprise app, we deliver high-performance, user-friendly apps that shine in app stores.",
      gradient: "from-green-500 to-blue-600",
      delay: 0.3
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered | Intuitive | Beautifully Functional",
      description: "We design with empathy and engineer with clarity. From wireframes to prototypes, our design team creates digital experiences that are both intuitive and conversion-driven.",
      gradient: "from-orange-500 to-red-600",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      subtitle: "SEO | Social Media | Performance Marketing",
      description: "We don't just grow followers—we grow revenue. Through data-driven SEO, strategic content, and paid campaigns, we help brands increase visibility, engagement, and sales across digital channels.",
      gradient: "from-teal-500 to-green-600",
      delay: 0.5
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      subtitle: "Online Stores | POS Systems | Shopify & WooCommerce",
      description: "We build fast, secure, and scalable online stores that convert browsers into buyers. Whether it's Shopify, WooCommerce, or a custom solution, we help you sell smarter—across devices and geographies.",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="pt-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Smart Tech. Sharp Growth.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We craft digital experiences that go beyond the ordinary. Every service is engineered for results, powered by code, and designed for impact.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={service.title} 
              direction="up" 
              delay={service.delay}
            >
              <GlassCard className="h-full group hover:scale-105 transition-transform duration-500">
                <motion.div
                  className="relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 shadow-glow group-hover:shadow-glow-accent transition-all duration-500`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Floating particles around icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-gradient group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-accent mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-primary font-medium opacity-70 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.div>
              </GlassCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-4 mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedButton 
                variant="primary" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
                <ArrowRight size={20} />
              </AnimatedButton>
            </motion.div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation • Custom solutions • Award-winning results
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;