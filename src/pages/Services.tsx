import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import FloatingParticles from '@/components/animations/FloatingParticles';
import MouseFollower from '@/components/animations/MouseFollower';
import { Button3D } from '@/components/ui/Button3D';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Technology",
      description: "We focus on providing the right tools for product innovation and digital communication.",
      features: [
        "Web and App Design",
        "Development",
        "Mobile Apps",
        "UI/UX Design",
        "Technology Consulting",
        "Marketing"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Development",
      description: "We are committed to delivering robust tools for web development, aimed at creating dynamic, high-performing websites that drive engagement and growth. Our focus is on leveraging cutting-edge technology and thoughtful design to build seamless, user-friendly web experiences.",
      features: [],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "UI/UX",
      description: "We are committed to equipping you with the most effective tools for UI/UX design, aimed at refining user interfaces and elevating user experiences. Our focus is on driving product innovation through thoughtful and intuitive design, ensuring that digital interactions are both engaging and seamless.",
      features: [],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "App Development",
      description: "We are dedicated to providing you with cutting-edge tools for mobile app development, designed to enhance functionality and user satisfaction. Our goal is to drive innovation through intuitive, high-performance apps.",
      features: [],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right"
    },
    {
      id: 5,
      title: "Graphic Designing",
      description: "We are committed to equipping you with powerful tools for graphic design, aimed at transforming your creative vision into stunning visual experiences. Our focus is on fostering innovation through compelling, eye-catching graphics that captivate and engage audiences.",
      features: [],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&h=600&fit=crop&auto=format&q=80",
      imagePosition: "left"
    },
    {
      id: 6,
      title: "Marketing",
      description: "We are dedicated to providing you with advanced tools for marketing, designed to enhance your strategic approach and amplify your brand's reach. We ensure your marketing campaigns are not only impactful but also resonate deeply with your target market.",
      features: [],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
      imagePosition: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Global Animation Elements */}
      <MouseFollower />
      <FloatingParticles />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <ScrollAnimation direction="up" className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Make your Digital Presence Matter
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We are a full-service technology and digital solutions company with over 20 years of experience in the industry.
            </p>

            <Button3D
              variant="default"
              size="lg"
              onClick={() => navigate('/contact')}
              intensity={20}
              className="group"
            >
              Start a Project Together
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button3D>
          </ScrollAnimation>

          {/* Services Sections */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} direction="up" delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  service.imagePosition === 'right' ? 'lg:grid-flow-col' : ''
                }`}>
                  {/* Image Section */}
                  <motion.div
                    className={`relative ${service.imagePosition === 'right' ? 'lg:order-2' : ''}`}
                    initial={{ opacity: 0, x: service.imagePosition === 'right' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card3D className="overflow-hidden" intensity={20}>
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
                        {/* Glowing frame effect */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-lg pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                      </div>
                    </Card3D>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className={`${service.imagePosition === 'right' ? 'lg:order-1' : ''}`}
                    initial={{ opacity: 0, x: service.imagePosition === 'right' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {service.features.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: featureIndex * 0.1 + 0.4 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                                                 <motion.div
                           className="relative group"
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                         >
                           <Button3D
                             variant="outline"
                             size="lg"
                             onClick={() => navigate('/contact')}
                             intensity={20}
                             className="group relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:border-primary/50 transition-all duration-300"
                           >
                             <span className="relative z-10 flex items-center gap-2">
                               Learn More
                               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                             </span>
                             
                             {/* Animated background gradient */}
                             <motion.div
                               className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                               initial={{ x: '-100%' }}
                               whileHover={{ x: '0%' }}
                               transition={{ duration: 0.3 }}
                             />
                             
                             {/* Glowing effect */}
                             <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 to-accent/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                           </Button3D>
                         </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="text-center mt-32">
              <Card3D className="p-12 bg-gradient-to-r from-primary/10 to-accent/10" intensity={15}>
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how our comprehensive services can help you achieve your digital goals and drive business growth.
                </p>
                <Button3D
                  variant="default"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  intensity={20}
                  className="group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button3D>
              </Card3D>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services; 