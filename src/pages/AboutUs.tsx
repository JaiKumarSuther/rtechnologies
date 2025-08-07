import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Users, Target, Award, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import FloatingParticles from '@/components/animations/FloatingParticles';
import MouseFollower from '@/components/animations/MouseFollower';
import { Button3D } from '@/components/ui/Button3D';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import TeamSlideshow from '@/components/ui/TeamSlideshow';

// Import team images
import office1 from '@/assets/office-1.jpg';
import office2 from '@/assets/office-2.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<string | undefined>();

  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in software development and business strategy.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Technical expert specializing in scalable architecture and emerging technologies.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer passionate about creating innovative digital solutions.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Creative designer focused on user-centered design and beautiful interfaces.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      description: "Cross-platform mobile expert with deep knowledge of Flutter and React Native.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      description: "Experienced project manager ensuring timely delivery and client satisfaction.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const faqs = [
    {
      question: "What services does R Technologies offer?",
      answer: "We offer comprehensive software development services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and custom software development. Our team specializes in creating scalable, innovative solutions tailored to your business needs."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including Flutter, React, Node.js, Python, Java, Spring Boot, Firebase, AWS, and many more. We choose the best technology stack based on your project requirements and business goals."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex mobile app could take 3-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We believe in building long-term relationships with our clients and ensuring their digital solutions continue to perform optimally."
    },
    {
      question: "What is your development process?",
      answer: "Our development process follows an agile methodology: Discovery & Planning, Design & Prototyping, Development & Testing, Deployment & Launch, and Ongoing Support. We maintain transparent communication throughout each phase."
    },
    {
      question: "Do you work with startups and enterprise clients?",
      answer: "Absolutely! We work with clients of all sizes, from startups looking to build their first MVP to enterprise companies seeking to modernize their digital infrastructure. We adapt our approach and solutions to meet your specific needs and budget."
    }
  ];

  const stats = [
    { icon: Users, number: "50+", label: "Projects Completed" },
    { icon: Target, number: "95%", label: "Client Satisfaction" },
    { icon: Award, number: "15+", label: "Team Members" },
    { icon: Heart, number: "24/7", label: "Support Available" }
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
              <span className="text-sm font-medium text-primary">About Us</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Life At R Technologies
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At R Technologies, we believe in creating a collaborative and dynamic environment where innovation thrives. Founded by seasoned professionals, we foster a culture of continuous learning, creativity, and teamwork.
            </p>
          </ScrollAnimation>

          {/* Company Story */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At R Technologies, we believe in creating a collaborative and dynamic environment where innovation thrives. Founded by seasoned professionals, we foster a culture of continuous learning, creativity, and teamwork.
                  </p>
                  <p>
                    Our startup is built on the principles of integrity, excellence, and a passion for technology. Whether it's building cutting-edge software solutions or brainstorming the next big idea, life at R Technologies is all about making an impact while enjoying the journey together.
                  </p>
                  <p>
                    We specialize in creating innovative digital solutions that help businesses grow and succeed in the modern digital landscape. From mobile apps to web applications, we bring ideas to life with cutting-edge technology and creative design.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card3D className="overflow-hidden" intensity={20}>
                  <img
                    src={office1}
                    alt="R Technologies Office"
                    className="w-full h-80 object-cover"
                  />
                </Card3D>
              </div>
            </div>
          </ScrollAnimation>

          {/* Stats Section */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Values Section */}
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card3D className="p-6 text-center" intensity={15}>
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                </p>
              </Card3D>
              
              <Card3D className="p-6 text-center" intensity={15}>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and foster a collaborative environment where ideas flourish.
                </p>
              </Card3D>
              
              <Card3D className="p-6 text-center" intensity={15}>
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from code quality to client satisfaction.
                </p>
              </Card3D>
            </div>
          </ScrollAnimation>

          {/* Team Section */}
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our talented team of developers, designers, and strategists work together to bring your vision to life.
              </p>
            </div>
            
            
            <div className="mb-20">
              <TeamSlideshow />
            </div>
          </ScrollAnimation>

          {/* FAQs Section */}
          <ScrollAnimation direction="up" delay={1.0}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our services and development process.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                value={activeAccordion}
                onValueChange={setActiveAccordion}
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card/90 border border-border/50 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimation>

          {/* CTA Section */}
          <ScrollAnimation direction="up" delay={1.2}>
            <div className="text-center mt-20">
              <Card3D className="p-12 bg-gradient-to-r from-primary/10 to-accent/10" intensity={15}>
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your ideas to life with our innovative solutions and expert team.
                </p>
                <Button3D
                  variant="default"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  intensity={20}
                >
                  Let's Chat
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

export default AboutUs; 