import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, Users, Code, Database, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Card3DModule from '../components/ui/Card3D';
import * as Button3DModule from '../components/ui/Button3D';
import MobileAppScreenshots from '@/components/ui/MobileAppScreenshots';
import Text3DSimple from '@/components/ui/Text3DSimple';
import Grid3D from '@/components/ui/Grid3D';
import MorphingShape3D from '@/components/ui/MorphingShape3D';

// Extract named exports
const { Card3D } = Card3DModule;
const { Button3D } = Button3DModule;

// Import all project images
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

const projects = [
  {
    id: 'checkin',
    title: 'Check In',
    tagline: 'Meeting with new people',
    description: 'A location-based social app that enables users to check in at nearby venues, connect with others, and engage in real-time chats.',
    longDescription: 'Check In is a revolutionary social networking app that transforms how people connect in real-world spaces. Using advanced location services and real-time chat capabilities, users can discover and interact with others at nearby venues, creating meaningful connections in their local community.',
    images: [checkin1, checkin2, checkin3, checkin4, checkin5, checkin6],
    technologies: ['Flutter', 'Node.js', 'MySQL', 'Google Places API'],
    gradient: 'from-orange-500 to-red-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Real-time location-based check-ins',
      'Live chat with nearby users',
      'Venue discovery and recommendations',
      'Social networking features',
      'Push notifications for new connections'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'holla-gorilla',
    title: 'Holla Gorilla',
    tagline: 'Find, Meet And Make New Friends',
    description: 'A vibrant social app that connects users through location-based matching, group chats, and real-time event discovery.',
    longDescription: 'Holla Gorilla is a dynamic social platform designed to break down barriers and create genuine connections. The app combines location-based matching with group activities and event discovery, making it easier than ever to find like-minded people in your area.',
    images: [holla1, holla2, holla3, holla4],
    technologies: ['Flutter', 'Node.js', 'Firebase'],
    gradient: 'from-green-500 to-emerald-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Location-based friend matching',
      'Group chat functionality',
      'Event discovery and creation',
      'Real-time messaging',
      'User profile customization'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'guided-by-culture',
    title: 'Guided by Culture',
    tagline: 'Find Mentors and schedule lessons',
    description: 'A mentorship app where mentees can hire mentors, chat, arrange meetings, and pay for mentorship services.',
    longDescription: 'Guided by Culture bridges the gap between knowledge seekers and experienced mentors. The platform facilitates meaningful mentorship relationships through structured scheduling, secure payments, and comprehensive communication tools.',
    images: [guided1, guided2, guided3, guided4],
    technologies: ['Flutter', 'Spring Boot', 'Firebase'],
    gradient: 'from-blue-500 to-indigo-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Mentor discovery and booking',
      'Secure payment processing',
      'Video call integration',
      'Progress tracking',
      'Review and rating system'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'nursery-app',
    title: 'Nursery App',
    tagline: 'Nannies supervise while parents monitor',
    description: 'Streamlines nursery management with dedicated panels for students, nannies, admins, and financers.',
    longDescription: 'The Nursery App revolutionizes childcare management by providing comprehensive tools for all stakeholders. From real-time monitoring for parents to efficient management for staff, the app ensures transparency and peace of mind.',
    images: [nursery1, nursery2, nursery3, nursery4, nursery5],
    technologies: ['Flutter', 'Node.js', 'Next.js', 'TypeScript'],
    gradient: 'from-purple-500 to-pink-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Multi-role user management',
      'Real-time monitoring system',
      'Payment and billing integration',
      'Attendance tracking',
      'Communication platform'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'dance-around',
    title: 'Dance Around',
    tagline: 'Meet New People Around You',
    description: 'A social app where users can make friends, chat to earn points, and jam together by listening to the same song.',
    longDescription: 'Dance Around combines social networking with music discovery in a unique gamified experience. Users earn points through meaningful conversations while discovering new music and connecting with others who share their taste.',
    images: [dance1, dance2],
    technologies: ['Flutter', 'Firebase'],
    gradient: 'from-pink-500 to-rose-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Music-based social matching',
      'Gamified chat system',
      'Point-based rewards',
      'Music discovery features',
      'Social networking tools'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'blush-app',
    title: 'Blush App',
    tagline: 'Find Friends, Meet and Eat Together',
    description: 'A hookah bar app where users can explore various hookah flavors, order food, and book events.',
    longDescription: 'Blush App transforms the traditional hookah bar experience into a digital platform. Users can explore flavors, order food, book events, and connect with others who share their interests in a sophisticated social environment.',
    images: [blush1, blush2, blush3, blush4, blush5, blush6],
    technologies: ['Flutter', 'Node.js'],
    gradient: 'from-red-500 to-pink-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Hookah flavor exploration',
      'Food ordering system',
      'Event booking platform',
      'Social networking features',
      'Loyalty program integration'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'iptv',
    title: 'IPTV',
    tagline: 'Internet Protocol Television',
    description: 'IPTV apps allow users to stream live TV, video-on-demand, and time-shifted media over the internet.',
    longDescription: 'The IPTV app delivers a comprehensive streaming experience with live TV, on-demand content, and advanced features like time-shifting. Built for modern viewing habits, it provides seamless access to entertainment across all devices.',
    images: [iptv1, iptv2, iptv3, iptv4, iptv5, iptv6],
    technologies: ['Flutter', 'Node.js', 'Firebase'],
    gradient: 'from-gray-500 to-slate-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Live TV streaming',
      'Video on demand',
      'Time-shifted viewing',
      'Multi-device support',
      'Content recommendation engine'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'hitechie',
    title: 'Hitechie',
    tagline: 'Connect With Professionals',
    description: 'A job and freelance marketplace app where users can apply for jobs across various domains or hire freelancers.',
    longDescription: 'Hitechie is a comprehensive job and freelance marketplace that connects talented professionals with opportunities across various domains. The platform facilitates seamless hiring and job application processes.',
    images: [hitechie1, hitechie2, hitechie3, hitechie4],
    technologies: ['Flutter', 'Node.js', 'Firebase'],
    gradient: 'from-cyan-500 to-blue-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Job posting and application',
      'Freelancer marketplace',
      'Skill-based matching',
      'Secure payment system',
      'Professional networking'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'fixit',
    title: 'Fixit',
    tagline: 'Find Service Providers Around You',
    description: 'A service booking app where users can negotiate offers from service providers for tasks like home repairs or cleaning.',
    longDescription: 'Fixit revolutionizes service booking by connecting users with qualified service providers in their area. The platform enables transparent pricing, secure payments, and quality assurance for various home and business services.',
    images: [fixit1, fixit2, fixit3, fixit4, fixit5],
    technologies: ['Flutter', 'Node.js', 'Firebase'],
    gradient: 'from-emerald-500 to-green-600',
    date: '2023',
    location: 'Remote',
    team: 'Solo Developer',
    features: [
      'Service provider discovery',
      'Quote negotiation system',
      'Secure payment processing',
      'Service tracking',
      'Review and rating system'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Project not found</h1>
          <Button3D onClick={() => navigate('/portfolio')}>
            Back to Portfolio
          </Button3D>
        </div>
      </div>
    );
  }

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'react native':
        return <Code className="w-5 h-5" />;
      case 'node.js':
      case 'express':
        return <Database className="w-5 h-5" />;
      case 'mobile':
      case 'ios':
      case 'android':
        return <Smartphone className="w-5 h-5" />;
      case 'web':
      case 'html':
      case 'css':
        return <Globe className="w-5 h-5" />;
      case 'security':
      case 'authentication':
        return <Shield className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <Grid3D className="absolute inset-0 opacity-20" />
      <div className="absolute top-20 left-10 opacity-30">
        <MorphingShape3D size="lg" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <MorphingShape3D size="lg" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-8">
          <motion.button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </motion.button>

          {/* Project Title and Basic Info */}
          <div className="text-center mb-16">
            <div className="mb-6">
              {project.title.split(' ').map((word, index) => (
                <div key={index} className="inline-block word-3d text-3d-hover">
                  <Text3DSimple
                    variant="premium"
                    className="text-4xl md:text-6xl font-bold text-white mb-2 mr-4"
                  >
                    {word}
                  </Text3DSimple>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Project Meta Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="container mx-auto px-4 pb-16">
          
          {/* Section 1: Project Overview & First Screenshot */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left: Project Overview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right: First Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Card3D className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Main Interface</h3>
                  <p className="text-gray-400 text-sm">Primary app screen showcasing core functionality</p>
                </div>
                <div className="relative mx-auto w-full max-w-[300px]">
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[2rem] bg-white">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} main screen`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full opacity-80"></div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </div>

          {/* Section 2: Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Built with modern technologies and best practices for optimal performance and user experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card3D className="p-6 text-center hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/20 rounded-full">
                        {getTechIcon(tech)}
                      </div>
                    </div>
                    <h3 className="font-semibold text-white">{tech}</h3>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: App Screenshots Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">App Screenshots</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore the complete user interface and experience across different screens
              </p>
            </div>
            
            <Card3D className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30">
              <MobileAppScreenshots 
                images={project.images} 
                title={project.title}
                className="screenshot-container"
              />
            </Card3D>
          </motion.div>

          {/* Section 4: Project Details & Final Screenshot */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left: Final Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <Card3D className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Feature Showcase</h3>
                  <p className="text-gray-400 text-sm">Highlighting advanced app capabilities</p>
                </div>
                <div className="relative mx-auto w-full max-w-[300px]">
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[2rem] bg-white">
                      <img
                        src={project.images[project.images.length - 1]}
                        alt={`${project.title} feature screen`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full opacity-80"></div>
                  </div>
                </div>
              </Card3D>
            </motion.div>

            {/* Right: Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Development Process</h2>
                  <p className="text-gray-300 leading-relaxed">
                    This project was developed using modern development methodologies, focusing on user experience, 
                    performance optimization, and scalable architecture. The development process included extensive 
                    testing, user feedback integration, and iterative improvements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Challenges & Solutions</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Performance Optimization:</strong> Implemented efficient rendering and caching strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>User Experience:</strong> Designed intuitive navigation and responsive layouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Cross-Platform:</strong> Ensured consistent experience across different devices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 5: Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <Card3D className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Explore More?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out the live demo or view the source code to see this project in action
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {project.liveUrl && (
                  <Button3D 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button3D>
                )}
                
                {project.githubUrl && (
                  <Button3D 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button3D>
                )}
                
                <Button3D 
                  onClick={() => navigate('/portfolio')}
                  variant="outline"
                >
                  Back to Portfolio
                </Button3D>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 