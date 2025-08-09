import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Trophy, 
  Target, 
  Zap, 
  Shield, 
  Rocket,
  CheckCircle,
  Sparkles,
  Box,
  Hexagon,
  Star
} from 'lucide-react';
import office1 from '@/assets/office-1.jpg';
import office2 from '@/assets/office-2.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';
import GlassCard from '@/components/ui/GlassCard';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import Grid3D from '@/components/ui/Grid3D';

const AboutSection = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: Trophy },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support", icon: Shield }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Startup Energy, Enterprise Delivery",
      description: "We move fast, adapt faster, and scale like pros. Whether you're an early-stage startup or an established enterprise, we bring the hustle."
    },
    {
      icon: Target,
      title: "Tech Brains with Business Sense",
      description: "We don't just speak code—we speak growth, ROI, user experience, and KPIs."
    },
    {
      icon: Shield,
      title: "No Templates. No Shortcuts.",
      description: "Every product we build is custom-coded, user-obsessed, and performance-driven. We don't believe in one-size-fits-all."
    },
    {
      icon: Rocket,
      title: "Built to Rank. Built to Convert.",
      description: "Our solutions are SEO-friendly, mobile-first, lightning-fast, and conversion-optimized. Because pretty isn't enough—performance is power."
    }
  ];

  return (
    <section id="about" className="pb-24 pt-16 relative overflow-hidden">
      {/* Enhanced 3D Grid Background */}
      <Grid3D 
        rows={30}
        cols={30}
        spacing={70}
        depth={120}
        color="#10B981"
        intensity={20}
        className="opacity-15"
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-green-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl"
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
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.2)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-lg" />
        </motion.div>

        {/* Floating Green Sphere */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.8)"
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

        {/* Blue Glowing Cube */}
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-lg border border-gray-700"
          style={{
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 15px rgba(59, 130, 246, 0.1)"
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-lg" />
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
        {[Box, Hexagon, Star].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
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
            stroke="rgba(16, 185, 129, 0.3)"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">About Us</span>
            <Sparkles size={16} className="text-primary animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Don't Just Build Software.<br />We Build What's Next.
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            At R Technologies, we believe in creating a collaborative and dynamic environment where innovation thrives. Founded by seasoned professionals, we foster a culture of continuous learning, creativity, and teamwork.
          </motion.p>
          
          <motion.button
            onClick={() => navigate('/about')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary hover:bg-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Learn More About Us
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.button>
        </ScrollAnimation>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Text Content */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="space-y-6">
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                At <span className="text-gradient font-semibold">R TECHNOLOGIES</span>, we turn ideas into high-impact digital products. Based in Pakistan, we're a next-gen software development company delivering custom solutions in web development, mobile app development, UI/UX design, and digital transformation.
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                We're the team brands call when they're tired of the slow, the sloppy, and the same-old.
              </motion.p>
              
              <motion.div 
                className="bg-brand-gradient-subtle p-6 rounded-lg border border-primary/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  No tech jargon. No bloated processes. Just clean code, smart design, and solutions that scale.
                </p>
              </motion.div>
              
              <div className="space-y-3">
                {[
                  "Startups trust us.",
                  "Enterprises grow with us.",
                  "Users love what we build.",
                  "And you? You're next."
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-foreground font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Image Grid */}
          <ScrollAnimation direction="right" delay={0.4}>
            <div className="grid grid-cols-2 gap-4 h-full">
              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={office1} 
                  alt="Modern tech office workspace" 
                  className="w-full h-48 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src={teamMeeting} 
                  alt="Team meeting and collaboration" 
                  className="w-full h-32 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="pt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={office2} 
                  alt="Software development workspace" 
                  className="w-full h-64 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
                  whileHover={{ scale: 1.05, rotateY: 3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Stats Section */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <GlassCard className="text-center group">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-brand-gradient mx-auto mb-4 flex items-center justify-center shadow-glow"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Why Choose Us */}
        <ScrollAnimation direction="up" delay={1}>
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
              whileHover={{ scale: 1.02 }}
            >
              Why Choose Us
            </motion.h3>
            <motion.p 
              className="text-xl text-muted-foreground"
              whileHover={{ scale: 1.01 }}
            >
              Because You Don't Need Just Developers—You Need Disruptors.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollAnimation 
                key={item.title} 
                direction="up" 
                delay={1.2 + index * 0.1}
              >
                <GlassCard className="h-full group">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-glow"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="text-xl font-bold mb-3 text-gradient"
                        whileHover={{ x: 3 }}
                      >
                        {item.title}
                      </motion.h4>
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        whileHover={{ x: 3 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;