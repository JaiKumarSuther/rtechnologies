import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  ShoppingCart, 
  Settings,
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Send
} from 'lucide-react';
import { Card3D } from '@/components/ui/Card3D';
import { Button3D } from '@/components/ui/Button3D';
import { Input3D } from '@/components/ui/Input3D';
import FloatingParticles3D from '@/components/animations/FloatingParticles3D';
import { use3DCard, use3DButton, use3DInput } from '@/hooks/use3DAnimation';

const Demo3D = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const demoCards = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites with stunning 3D effects",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with smooth animations",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces with interactive 3D elements",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* 3D Floating Particles Background */}
      <FloatingParticles3D 
        count={40}
        colors={['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']}
        sizeRange={[2, 15]}
        speedRange={[20, 100]}
        depthRange={[0, 200]}
        className="z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">3D Demo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Experience 3D Magic
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the power of anime.js with our stunning 3D components. 
            Every element responds to your mouse with smooth, realistic 3D transformations.
          </p>

          <div className="flex justify-center gap-4">
            <Button3D 
              variant="default" 
              size="lg"
              onClick={() => setIsPlaying(!isPlaying)}
              intensity={25}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaying ? 'Pause' : 'Play'} Animations
            </Button3D>
            
            <Button3D 
              variant="outline" 
              size="lg"
              onClick={() => window.location.reload()}
              intensity={25}
            >
              <RotateCcw size={20} />
              Reset
            </Button3D>
          </div>
        </motion.div>

        {/* 3D Cards Demo */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            3D Cards with Hover Effects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card3D 
                  className="h-full p-8 group"
                  intensity={30}
                  scaleOnHover={true}
                  shadowIntensity={0.5}
                >
                  <div className="relative">
                    {/* Icon with Gradient Background */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} p-4 shadow-glow group-hover:shadow-glow-accent transition-all duration-500`}
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <card.icon className="w-full h-full text-white" />
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
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium opacity-70 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Buttons Demo */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            3D Buttons with Press Effects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button3D variant="default" size="lg" intensity={20}>
              Primary Action
            </Button3D>
            
            <Button3D variant="outline" size="lg" intensity={20}>
              Secondary Action
            </Button3D>
            
            <Button3D variant="destructive" size="lg" intensity={20}>
              Destructive Action
            </Button3D>
            
            <Button3D variant="secondary" size="lg" intensity={20}>
              <Code size={20} />
              Code Action
            </Button3D>
          </div>
        </motion.div>

        {/* 3D Form Demo */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            3D Form Inputs with Focus Effects
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card3D className="p-8" intensity={15}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input3D
                    type="text"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    intensity={12}
                    glowColor="rgba(59, 130, 246, 0.5)"
                  />
                  
                  <Input3D
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    intensity={12}
                    glowColor="rgba(59, 130, 246, 0.5)"
                  />
                </div>
                
                <Input3D
                  type="text"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  intensity={12}
                  glowColor="rgba(59, 130, 246, 0.5)"
                  className="h-32"
                />
                
                <Button3D
                  variant="default"
                  size="lg"
                  className="w-full"
                  intensity={20}
                >
                  <Send size={20} />
                  Send Message
                </Button3D>
              </form>
            </Card3D>
          </div>
        </motion.div>

        {/* Interactive 3D Elements */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">
            Interactive 3D Elements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="h-32 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-primary/20 flex items-center justify-center cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: 10,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <span className="text-lg font-semibold text-primary">
                  Element {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo3D; 