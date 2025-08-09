import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  ShoppingCart, 
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Hexagon
} from 'lucide-react';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import { Button3D } from '@/components/ui/Button3D';
import { Text3D } from '@/components/ui/Text3D';
import Text3DSimple from '@/components/ui/Text3DSimple';
import Grid3D from '@/components/ui/Grid3D';

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "SEO-Optimized | Responsive | Conversion-Focused",
      description: "We build modern, fast, and mobile-friendly websites that work like a 24/7 sales team. From business websites to custom web portals, we combine speed, security, and search visibility to help you stand out and scale online.",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10",
      accentColor: "#3B82F6",
      delay: 0.1
    },
    {
      icon: Settings,
      title: "Software Development",
      subtitle: "Scalable | Secure | Tailor-Made for You",
      description: "We develop bespoke software solutions that streamline operations, automate tasks, and boost ROI. From ERP systems to SaaS platforms, we turn your workflow challenges into powerful tools—designed to grow with your business.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      accentColor: "#8B5CF6",
      delay: 0.2
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS | Android | Cross-Platform Experts",
      description: "Build mobile apps that users love and businesses need. Whether you need a sleek startup MVP or a full-fledged enterprise app, we deliver high-performance, user-friendly apps that shine in app stores.",
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-500/10 to-blue-600/10",
      accentColor: "#10B981",
      delay: 0.3
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered | Intuitive | Beautifully Functional",
      description: "We design with empathy and engineer with clarity. From wireframes to prototypes, our design team creates digital experiences that are both intuitive and conversion-driven.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      accentColor: "#F59E0B",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      subtitle: "SEO | Social Media | Performance Marketing",
      description: "We don't just grow followers—we grow revenue. Through data-driven SEO, strategic content, and paid campaigns, we help brands increase visibility, engagement, and sales across digital channels.",
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-500/10 to-green-600/10",
      accentColor: "#14B8A6",
      delay: 0.5
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      subtitle: "Online Stores | POS Systems | Shopify & WooCommerce",
      description: "We build fast, secure, and scalable online stores that convert browsers into buyers. Whether it's Shopify, WooCommerce, or a custom solution, we help you sell smarter—across devices and geographies.",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-500/10 to-purple-600/10",
      accentColor: "#6366F1",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced 3D Grid Background */}
      <Grid3D 
        rows={30}
        cols={30}
        spacing={80}
        depth={120}
        color="#3B82F6"
        intensity={20}
        className="opacity-15"
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={18} className="text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
            <Sparkles size={18} className="text-primary animate-pulse" />
          </motion.div>
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {["Smart", "Tech.", "Sharp", "Growth."].map((word, index) => (
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
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-3d-hover"
                  >
                    {word}
                  </Text3DSimple>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We craft digital experiences that go beyond the ordinary. Every service is engineered for results, powered by code, and designed for impact.
          </motion.p>
        </ScrollAnimation>

        {/* Services Grid - Completely Separate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={service.title} 
              direction="up" 
              delay={service.delay}
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -20, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card3D 
                  className="h-[480px] w-full p-10 group bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-border/50 relative overflow-hidden"
                  intensity={35}
                  scaleOnHover={true}
                  shadowIntensity={0.7}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Section */}
                    <div className="flex justify-center mb-10">
                      <motion.div
                        className={`relative w-28 h-28 rounded-3xl bg-gradient-to-br ${service.gradient} p-7 shadow-2xl group-hover:shadow-glow-accent transition-all duration-500`}
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                        }}
                        whileHover={{ 
                          rotateX: [0, -25, 25, 0],
                          rotateY: [0, 20, -20, 0],
                          rotateZ: [0, 8, -8, 0],
                          scale: 1.25,
                          y: -15,
                          z: 60
                        }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                      >
                        {/* Icon 3D Layers */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Main Icon */}
                        <motion.div
                          className="relative z-10"
                          whileHover={{ 
                            scale: 1.15,
                            rotateY: 15,
                            rotateX: -8
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <service.icon className="w-full h-full text-white drop-shadow-lg" />
                        </motion.div>
                        
                        {/* Icon Glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col">
                      <motion.h3 
                        className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 text-center"
                        whileHover={{ x: 5, scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm font-semibold text-primary mb-6 tracking-wide text-center"
                        whileHover={{ x: 3 }}
                      >
                        {service.subtitle}
                      </motion.p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8 text-sm text-center flex-1">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div
                        className="flex items-center justify-center gap-3 text-primary font-semibold opacity-90 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 10, scale: 1.05 }}
                        onClick={() => navigate('/services')}
                      >
                        <span className="relative">
                          Learn More
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                        <motion.div
                          whileHover={{ x: 5, rotate: 20 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={0.8}>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button3D 
                variant="default" 
                size="lg"
                onClick={() => navigate('/contact')}
                intensity={25}
                className="px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
                <motion.div
                  whileHover={{ x: 3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </Button3D>
            </motion.div>
            
            <motion.p 
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Free consultation • Custom solutions • Award-winning results
            </motion.p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;