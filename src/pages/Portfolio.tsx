import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import FloatingParticles from '@/components/animations/FloatingParticles';
import MouseFollower from '@/components/animations/MouseFollower';
import MobileAppPreview from '@/components/ui/MobileAppPreview';

// Import project images
import checkin1 from '@/assets/checkin-1.1.webp';
import checkin2 from '@/assets/checkin-1.2.webp';
import checkin3 from '@/assets/checkin-1.3.webp';
import checkin4 from '@/assets/checkin-2.1.webp';
import checkin5 from '@/assets/checkin-2.2.webp';
import checkin6 from '@/assets/checkin-2.3.webp';
import holla1 from '@/assets/gorrila-2.1.webp';
import holla2 from '@/assets/gorrila-2.2.webp';
import holla3 from '@/assets/gorrila-2.3.webp';
import holla4 from '@/assets/gorrila.webp';
import guided1 from '@/assets/guided-by-culture-1.webp';
import guided2 from '@/assets/guided-by-culture-2.1.webp';
import guided3 from '@/assets/guided-by-culture-2.2.webp';
import guided4 from '@/assets/guided-by-culture-2.3.webp';
import nursery1 from '@/assets/nursery-app-1.webp';
import nursery2 from '@/assets/nursery-app-2.webp';
import nursery3 from '@/assets/nursery-app-3.1.webp';
import nursery4 from '@/assets/nursery-app-3.2.webp';
import nursery5 from '@/assets/nursery-app-3.3.webp';
import dance1 from '@/assets/dance-around-1.webp';
import dance2 from '@/assets/dance-around-2.webp';
import blush1 from '@/assets/blush-app-1.1.webp';
import blush2 from '@/assets/blush-app-1.2.webp';
import blush3 from '@/assets/blush-app-1.3.webp';
import blush4 from '@/assets/blush-app-2.1.webp';
import blush5 from '@/assets/blush-app-2.2.webp';
import blush6 from '@/assets/blush-app-2.3.webp';
import iptv1 from '@/assets/iptv-1.webp';
import iptv2 from '@/assets/iptv-2.webp';
import iptv3 from '@/assets/iptv-3.webp';
import iptv4 from '@/assets/iptv-4.1.webp';
import iptv5 from '@/assets/iptv-4.2.webp';
import iptv6 from '@/assets/iptv-4.3.webp';
import hitechie1 from '@/assets/hitechie-1.webp';
import hitechie2 from '@/assets/hitechie-2.1.webp';
import hitechie3 from '@/assets/hitechie-2.2.webp';
import hitechie4 from '@/assets/hitechie-2.3.webp';
import fixit1 from '@/assets/fixit-1.webp';
import fixit2 from '@/assets/fixit-2.webp';
import fixit3 from '@/assets/fixit-3.1.webp';
import fixit4 from '@/assets/fixit-3.2.webp';
import fixit5 from '@/assets/fixit-3.3.webp';

const Portfolio = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'checkin',
      title: 'Check In',
      tagline: 'Meeting with new people',
      description: 'A location-based social app that enables users to check in at nearby venues, connect with others, and engage in real-time chats.',
      images: [checkin1, checkin2, checkin3, checkin4, checkin5, checkin6],
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Google Places API'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'holla-gorilla',
      title: 'Holla Gorilla',
      tagline: 'Find, Meet And Make New Friends',
      description: 'A vibrant social app that connects users through location-based matching, group chats, and real-time event discovery.',
      images: [holla1, holla2, holla3, holla4],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'guided-by-culture',
      title: 'Guided by Culture',
      tagline: 'Find Mentors and schedule lessons',
      description: 'A mentorship app where mentees can hire mentors, chat, arrange meetings, and pay for mentorship services.',
      images: [guided1, guided2, guided3, guided4],
      technologies: ['Flutter', 'Spring Boot', 'Firebase'],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'nursery-app',
      title: 'Nursery App',
      tagline: 'Nannies supervise while parents monitor',
      description: 'Streamlines nursery management with dedicated panels for students, nannies, admins, and financers.',
      images: [nursery1, nursery2, nursery3, nursery4, nursery5],
      technologies: ['Flutter', 'Node.js', 'Next.js', 'TypeScript'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'dance-around',
      title: 'Dance Around',
      tagline: 'Meet New People Around You',
      description: 'A social app where users can make friends, chat to earn points, and jam together by listening to the same song.',
      images: [dance1, dance2],
      technologies: ['Flutter', 'Firebase'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'blush-app',
      title: 'Blush App',
      tagline: 'Find Friends, Meet and Eat Together',
      description: 'A hookah bar app where users can explore various hookah flavors, order food, and book events.',
      images: [blush1, blush2, blush3, blush4, blush5, blush6],
      technologies: ['Flutter', 'Node.js'],
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 'iptv',
      title: 'IPTV',
      tagline: 'Internet Protocol Television',
      description: 'IPTV apps allow users to stream live TV, video-on-demand, and time-shifted media over the internet.',
      images: [iptv1, iptv2, iptv3, iptv4, iptv5, iptv6],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-gray-500 to-slate-600'
    },
    {
      id: 'hitechie',
      title: 'Hitechie',
      tagline: 'Connect With Professionals',
      description: 'A job and freelance marketplace app where users can apply for jobs across various domains or hire freelancers.',
      images: [hitechie1, hitechie2, hitechie3, hitechie4],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'fixit',
      title: 'Fixit',
      tagline: 'Find Service Providers Around You',
      description: 'A service booking app where users can negotiate offers from service providers for tasks like home repairs or cleaning.',
      images: [fixit1, fixit2, fixit3, fixit4, fixit5],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/portfolio/${projectId}`);
  };

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
              <span className="text-sm font-medium text-primary">Our Portfolio</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Our Projects
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our diverse portfolio of innovative applications and digital solutions that showcase our expertise in mobile development, web applications, and cutting-edge technology.
            </p>
          </ScrollAnimation>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.id} 
                direction="up" 
                delay={index * 0.1}
              >
                <motion.div
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.id)}
                  className="cursor-pointer"
                >
                  <Card3D 
                    className="h-full bg-card/90 backdrop-blur-sm border border-border/50 overflow-hidden group"
                    intensity={25}
                    scaleOnHover={true}
                    shadowIntensity={0.4}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                       {/* Mobile App Preview */}
                       <div className="w-full h-full flex items-center justify-center p-4">
                                                   <MobileAppPreview
                            images={project.images}
                            title={project.title}
                            maxImages={6}
                          />
                       </div>
                       
                       {/* Gradient Overlay */}
                       <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                       
                       {/* View Details Button */}
                       <motion.div
                         className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         initial={{ opacity: 0 }}
                         whileHover={{ opacity: 1 }}
                       >
                         <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                           <ExternalLink className="w-6 h-6 text-white" />
                         </div>
                       </motion.div>
                     </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm font-medium text-primary mb-3">
                        {project.tagline}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Details Link */}
                      <motion.div
                        className="flex items-center gap-2 text-primary font-medium opacity-90 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm">View Details</span>
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </Card3D>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio; 