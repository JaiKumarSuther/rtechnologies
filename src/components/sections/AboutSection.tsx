import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  Target, 
  Zap, 
  Shield, 
  Rocket,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import office1 from '@/assets/office-1.jpg';
import office2 from '@/assets/office-2.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';
import GlassCard from '@/components/ui/GlassCard';
import ScrollAnimation from '@/components/animations/ScrollAnimations';

const AboutSection = () => {
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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            We Don't Just Build Software.<br />We Build What's Next.
          </h2>
        </ScrollAnimation>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Text Content */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At <span className="text-gradient font-semibold">R TECHNOLOGIES</span>, we turn ideas into high-impact digital products. Based in Pakistan, we're a next-gen software development company delivering custom solutions in web development, mobile app development, UI/UX design, and digital transformation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're the team brands call when they're tired of the slow, the sloppy, and the same-old.
              </p>
              
              <div className="bg-brand-gradient-subtle p-6 rounded-lg border border-primary/20">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  No tech jargon. No bloated processes. Just clean code, smart design, and solutions that scale.
                </p>
              </div>
              
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
                  >
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
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
                <img 
                  src={office1} 
                  alt="Modern tech office workspace" 
                  className="w-full h-48 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
                />
                <img 
                  src={teamMeeting} 
                  alt="Team meeting and collaboration" 
                  className="w-full h-32 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
                />
              </motion.div>
              <motion.div
                className="pt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={office2} 
                  alt="Software development workspace" 
                  className="w-full h-64 object-cover rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500"
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
                  rotate: [0, -2, 2, 0]
                }}
              >
                <GlassCard className="text-center group">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-brand-gradient mx-auto mb-4 flex items-center justify-center shadow-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Choose Us
            </h3>
            <p className="text-xl text-muted-foreground">
              Because You Don't Need Just Developers—You Need Disruptors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollAnimation 
                key={item.title} 
                direction="up" 
                delay={1.2 + index * 0.1}
              >
                <GlassCard className="h-full">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
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
                      <h4 className="text-xl font-bold mb-3 text-gradient">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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