import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import FloatingParticles from '@/components/animations/FloatingParticles';
import MouseFollower from '@/components/animations/MouseFollower';
import { Button3D } from '@/components/ui/Button3D';
import { Input3D } from '@/components/ui/Input3D';
import { Textarea3D } from '@/components/ui/Textarea3D';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    
    setIsSubmitting(false);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@rtechnologies.com", "support@rtechnologies.com"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Tech Street", "Silicon Valley, CA 94025"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      gradient: "from-orange-500 to-red-600"
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
          <ScrollAnimation direction="up" className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Let's Chat
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card3D className="p-6 text-center h-full" intensity={15}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-full mb-4`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Contact Form and Map */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card3D className="p-8" intensity={20}>
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <Input3D
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        intensity={15}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <Input3D
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        intensity={15}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <Input3D
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        intensity={15}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Company
                      </label>
                      <Input3D
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        intensity={15}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message *
                    </label>
                    <Textarea3D
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      intensity={15}
                    />
                  </div>
                  
                  <Button3D
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                    intensity={20}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button3D>
                </form>
              </Card3D>

              {/* Map/Additional Info */}
              <div className="space-y-8">
                <Card3D className="p-8 h-full" intensity={15}>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose R Technologies?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                        <p className="text-muted-foreground text-sm">
                          Our experienced developers and designers bring years of expertise to every project.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
                        <p className="text-muted-foreground text-sm">
                          We follow industry best practices and rigorous testing to ensure top-quality deliverables.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
                        <p className="text-muted-foreground text-sm">
                          We provide comprehensive post-launch support and maintenance for all our projects.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Transparent Communication</h3>
                        <p className="text-muted-foreground text-sm">
                          We keep you updated throughout the development process with regular progress reports.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </ScrollAnimation>

          {/* CTA Section */}
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="text-center mt-20">
              <Card3D className="p-12 bg-gradient-to-r from-primary/10 to-accent/10" intensity={15}>
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a custom solution that perfectly fits your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button3D
                    variant="default"
                    size="lg"
                    onClick={() => window.location.href = 'tel:+15551234567'}
                    intensity={20}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button3D>
                  <Button3D
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = 'mailto:hello@rtechnologies.com'}
                    intensity={20}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button3D>
                </div>
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

export default Contact; 