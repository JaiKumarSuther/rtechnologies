import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Globe, Smartphone, Database, Code, Users, MapPin, MessageSquare, Calendar, DollarSign } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card3D } from '@/components/ui/Card3D';
import ScrollAnimation from '@/components/animations/ScrollAnimations';
import FloatingParticles from '@/components/animations/FloatingParticles';
import MouseFollower from '@/components/animations/MouseFollower';
import { Button3D } from '@/components/ui/Button3D';

// Import all project images
import checkin1 from '@/assets/checkin-1.1.webp';
import checkin2 from '@/assets/checkin-1.2.webp';
import checkin3 from '@/assets/checkin-1.3.webp';
import holla1 from '@/assets/gorrila-2.1.webp';
import holla2 from '@/assets/gorrila-2.2.webp';
import holla3 from '@/assets/gorrila-2.3.webp';
import guided1 from '@/assets/guided-by-culture-1.webp';
import guided2 from '@/assets/guided-by-culture-2.1.webp';
import guided3 from '@/assets/guided-by-culture-2.2.webp';
import nursery1 from '@/assets/nursery-app-1.webp';
import nursery2 from '@/assets/nursery-app-2.webp';
import nursery3 from '@/assets/nursery-app-3.1.webp';
import dance1 from '@/assets/dance-around-1.webp';
import dance2 from '@/assets/dance-around-2.webp';
import blush1 from '@/assets/blush-app-1.1.webp';
import blush2 from '@/assets/blush-app-1.2.webp';
import blush3 from '@/assets/blush-app-1.3.webp';
import iptv1 from '@/assets/iptv-1.webp';
import iptv2 from '@/assets/iptv-2.webp';
import iptv3 from '@/assets/iptv-3.webp';
import hitechie1 from '@/assets/hitechie-1.webp';
import hitechie2 from '@/assets/hitechie-2.1.webp';
import hitechie3 from '@/assets/hitechie-2.2.webp';
import fixit1 from '@/assets/fixit-1.webp';
import fixit2 from '@/assets/fixit-2.webp';
import fixit3 from '@/assets/fixit-3.1.webp';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = {
    checkin: {
      title: 'Check In',
      tagline: 'Meeting with new people',
      description: 'CheckIn is a cutting-edge social app designed to facilitate real-world connections by allowing users to check in at nearby venues such as restaurants, clubs, bars, and museums. By leveraging geolocation and real-time data, CheckIn empowers users to discover and engage with people around them, making every outing an opportunity to meet new friends.',
      longDescription: `CheckIn is a location-based social app that enables users to check in at nearby venues, connect with others, and engage in real-time chats, all powered by Node.js and Flutter. The app integrates various functionalities that enhance the user experience, including matching, chatting, and venue insights.

**Key Features:**
- **Venue Check-In**: Users can easily check in at venues nearby, providing a seamless way to announce their presence to others in the area. The app utilizes Google Places API to fetch accurate venue details.
- **Nearby Users Discovery**: The app displays a list of users currently at the same venue, allowing for easy connection opportunities.
- **Matching Functionality**: Once users identify potential matches at the venue, they can initiate a match, creating opportunities for meaningful interactions.
- **Chat Feature**: After matching, users can chat in real-time, facilitating smooth communication and engagement.
- **Nearby Places and User Insights**: Users can view detailed information about nearby venues, including user presence, popularity ratings, and event schedules.
- **Subscription Services**: CheckIn offers subscription plans through Google Pay and Apple Pay, allowing users to unlock premium features.`,
      images: [checkin1, checkin2, checkin3],
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Google Places API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShedCN', 'TanStack Queries', 'Firebase'],
      gradient: 'from-orange-500 to-red-600',
      features: [
        { icon: MapPin, title: 'Location-Based Check-ins', description: 'Check in at nearby venues using Google Places API' },
        { icon: Users, title: 'User Discovery', description: 'Find and connect with people at the same venue' },
        { icon: MessageSquare, title: 'Real-time Chat', description: 'Engage in conversations with matched users' },
        { icon: Calendar, title: 'Event Scheduling', description: 'Plan and join events at popular venues' },
        { icon: DollarSign, title: 'Premium Subscriptions', description: 'Unlock enhanced features with subscription plans' }
      ]
    },
    'holla-gorilla': {
      title: 'Holla Gorilla',
      tagline: 'Find, Meet And Make New Friends',
      description: 'Hola Gorilla is an engaging social app designed to foster community connections and spontaneous social interactions. Targeted towards individuals looking for fun, adventure, and like-minded social groups.',
      longDescription: `Hola Gorilla is a vibrant social app that connects users through location-based matching, group chats, and real-time event discovery, all built with Node.js and Flutter.

**Key Features:**
- **Gorilla Match**: Location-based matching with interest filters for compatible connections
- **Group Roar**: Themed group chats for community building around specific activities
- **Adventure Map**: Interactive map showing nearby users, activities, and real-time events
- **Chat Features**: Built-in messaging with multimedia sharing and interactive tools
- **Subscription Options**: Premium features including priority matching and custom avatars
- **Notification Services**: Real-time alerts for matches, messages, and events`,
      images: [holla1, holla2, holla3],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-green-500 to-emerald-600',
      features: [
        { icon: MapPin, title: 'Location Matching', description: 'Find connections based on location and interests' },
        { icon: Users, title: 'Group Chats', description: 'Join themed conversations and build communities' },
        { icon: Calendar, title: 'Event Discovery', description: 'Discover real-time social activities nearby' },
        { icon: MessageSquare, title: 'Interactive Chat', description: 'Enhanced messaging with stickers and emojis' },
        { icon: DollarSign, title: 'Premium Features', description: 'Access enhanced visibility and custom avatars' }
      ]
    },
    'guided-by-culture': {
      title: 'Guided by Culture',
      tagline: 'Find Mentors and schedule lessons',
      description: 'Guided by Culture is a mentorship-based application designed to connect mentees with experienced mentors across a wide range of skills.',
      longDescription: `Guided by Culture is a mentorship app where mentees can hire mentors, chat, arrange meetings, and pay for mentorship services. Built using Spring Boot (Java) and Flutter, it offers a seamless experience for personalized skill development.

**Key Features:**
- **Seamless Tutor Search**: Students can explore and hire tutors based on their specific needs
- **Session Booking**: Users can book tutoring sessions directly through the app
- **Real-time Communication**: Built-in chat functionality for smooth communication
- **Service Sales**: Tutors can promote and sell their educational services
- **User-Friendly Interface**: Intuitive experience that simplifies finding and hiring tutors`,
      images: [guided1, guided2, guided3],
      technologies: ['Flutter', 'Spring Boot', 'Firebase', 'Java'],
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        { icon: Users, title: 'Mentor Discovery', description: 'Find experienced mentors across various skills' },
        { icon: Calendar, title: 'Session Booking', description: 'Schedule and manage tutoring sessions' },
        { icon: MessageSquare, title: 'Real-time Chat', description: 'Communicate with mentors before and after sessions' },
        { icon: DollarSign, title: 'Payment Integration', description: 'Secure payment processing for mentorship services' },
        { icon: Globe, title: 'Skill Categories', description: 'Browse mentors by specific skill areas' }
      ]
    },
    'nursery-app': {
      title: 'Nursery App',
      tagline: 'Nannies supervise while parents monitor',
      description: 'The Nursery App is a cutting-edge solution designed to bring efficiency and transparency to managing nursery school operations.',
      longDescription: `The Nursery App streamlines nursery management with dedicated panels for students, nannies, admins, and financers, handling attendance, activities, and fees efficiently.

**Key Features:**
- **Student Panel**: View daily activities, access notes, submit fees, and provide feedback
- **Nanny Panel**: Manage attendance, assign activities, and create educational notes
- **Admin Panel**: Oversee all operations, manage users, and track performance
- **Financer Panel**: Handle fee management and generate financial reports
- **Real-time Updates**: Synchronized data across all panels for seamless operations`,
      images: [nursery1, nursery2, nursery3],
      technologies: ['Flutter', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN'],
      gradient: 'from-purple-500 to-pink-600',
      features: [
        { icon: Users, title: 'Multi-Role Access', description: 'Separate interfaces for students, nannies, admins, and financers' },
        { icon: Calendar, title: 'Activity Management', description: 'Assign and track daily educational activities' },
        { icon: MessageSquare, title: 'Communication Tools', description: 'Notes, comments, and feedback system' },
        { icon: DollarSign, title: 'Fee Management', description: 'Comprehensive financial tracking and reporting' },
        { icon: Database, title: 'Real-time Sync', description: 'Instant updates across all user panels' }
      ]
    },
    'dance-around': {
      title: 'Dance Around',
      tagline: 'Meet New People Around You',
      description: 'Dance Around is a social app designed to help people make friends, chat, and enjoy music together in a fun and interactive way.',
      longDescription: `Dance Around is a social app where users can make friends, chat to earn points, and jam together by listening to the same song. The more users chat, the more they earn, adding a fun, gamified twist to interactions.

**Key Features:**
- **Friendship Building**: Connect with others and grow your social circle
- **Points System**: Earn points through chatting and interactions
- **Music Sharing**: Jam together by listening to the same songs
- **Gamified Experience**: Rewards and achievements for active participation
- **Social Environment**: Friendly and inviting space for music lovers`,
      images: [dance1, dance2],
      technologies: ['Flutter', 'Firebase'],
      gradient: 'from-pink-500 to-rose-600',
      features: [
        { icon: Users, title: 'Social Connections', description: 'Build friendships through music and chat' },
        { icon: MessageSquare, title: 'Points System', description: 'Earn rewards through active chatting' },
        { icon: Globe, title: 'Music Sharing', description: 'Listen to the same songs with friends' },
        { icon: Calendar, title: 'Gamified Experience', description: 'Unlock features and achievements' },
        { icon: Smartphone, title: 'Mobile-First', description: 'Optimized for mobile social interactions' }
      ]
    },
    'blush-app': {
      title: 'Blush App',
      tagline: 'Find Friends, Meet and Eat Together',
      description: 'Blush app is a dedicated platform for a hookah bar experience, where users can enjoy a range of hookah flavors, from classic to exotic blends.',
      longDescription: `Blush is a hookah bar app where users can explore various hookah flavors, order food, and book events. It provides a seamless way to enjoy a personalized hookah and food experience.

**Key Features:**
- **Wide Range of Hookah Flavors**: Choose from traditional, fruity, and custom blends
- **Food and Beverage Ordering**: Order complementary items from the menu
- **Event Booking**: Book tables or private spaces for special occasions
- **Special Deals**: Exclusive promotions and loyalty rewards
- **Social Features**: User reviews, recommendations, and sharing options`,
      images: [blush1, blush2, blush3],
      technologies: ['Flutter', 'Node.js'],
      gradient: 'from-red-500 to-pink-600',
      features: [
        { icon: Globe, title: 'Flavor Selection', description: 'Browse and choose from various hookah flavors' },
        { icon: Calendar, title: 'Event Booking', description: 'Reserve tables and private spaces' },
        { icon: DollarSign, title: 'Food Ordering', description: 'Order food and beverages directly' },
        { icon: Users, title: 'Social Features', description: 'Reviews, recommendations, and group bookings' },
        { icon: MessageSquare, title: 'Customer Support', description: 'Direct communication with staff' }
      ]
    },
    iptv: {
      title: 'IPTV',
      tagline: 'Internet Protocol Television',
      description: 'IPTV apps allow users to stream live TV, video-on-demand, and time-shifted media over the internet on various devices.',
      longDescription: `IPTV (Internet Protocol Television) apps are software applications that allow users to stream television content via the internet, rather than traditional broadcast methods such as satellite or cable.

**Key Features:**
- **Live TV Streaming**: Access to live television channels
- **Video on Demand**: Library of movies and TV shows
- **Multi-Device Support**: Compatible with smartphones, tablets, smart TVs, and computers
- **EPG (Electronic Program Guide)**: Current and upcoming programming information
- **PVR (Personal Video Recorder)**: Record live TV for later viewing
- **Parental Controls**: Restrict content based on age ratings`,
      images: [iptv1, iptv2, iptv3],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-gray-500 to-slate-600',
      features: [
        { icon: Globe, title: 'Live Streaming', description: 'Stream live TV channels over the internet' },
        { icon: Calendar, title: 'Program Guide', description: 'Browse current and upcoming shows' },
        { icon: Smartphone, title: 'Multi-Platform', description: 'Works on various devices and platforms' },
        { icon: Users, title: 'Parental Controls', description: 'Restrict content for family safety' },
        { icon: Database, title: 'Video Library', description: 'Extensive on-demand content library' }
      ]
    },
    hitechie: {
      title: 'Hitechie',
      tagline: 'Connect With Professionals',
      description: 'Hitechie is a versatile job and freelance marketplace app that connects job seekers with employers across various domains.',
      longDescription: `Hitechie is a job and freelance marketplace app where users can apply for jobs across various domains or hire freelancers for project-based and part-time work.

**Key Features:**
- **Job Search**: Browse and apply for jobs in various industries
- **Freelancer Hiring**: Hire freelancers for specific projects or short-term contracts
- **Customizable Profiles**: Detailed profiles showcasing skills and experience
- **Application Tracking**: Track application status and receive feedback
- **Built-in Communication**: Direct messaging between employers and candidates`,
      images: [hitechie1, hitechie2, hitechie3],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        { icon: Users, title: 'Job Marketplace', description: 'Browse and apply for jobs across industries' },
        { icon: Globe, title: 'Freelancer Platform', description: 'Hire talent for project-based work' },
        { icon: MessageSquare, title: 'Direct Communication', description: 'Chat with employers and candidates' },
        { icon: Calendar, title: 'Application Tracking', description: 'Monitor application status and feedback' },
        { icon: Database, title: 'Profile Management', description: 'Create detailed professional profiles' }
      ]
    },
    fixit: {
      title: 'Fixit',
      tagline: 'Find Service Providers Around You',
      description: 'Fixit is a service booking app similar to Indrive, but instead of booking cars, users can book service providers for various tasks.',
      longDescription: `Fixit is a service booking app where users can negotiate offers from service providers for tasks like home repairs or cleaning. The app allows users to post service requests, after which service providers respond with offers.

**Key Features:**
- **Service Requests**: Post detailed service requirements
- **Offer Negotiation**: Compare and negotiate with multiple providers
- **User Ratings**: Choose trusted service providers based on reviews
- **Instant Notifications**: Real-time updates on offers and requests
- **Service Categories**: Organized categories for different service types`,
      images: [fixit1, fixit2, fixit3],
      technologies: ['Flutter', 'Node.js', 'Firebase'],
      gradient: 'from-emerald-500 to-green-600',
      features: [
        { icon: Users, title: 'Service Providers', description: 'Connect with qualified professionals' },
        { icon: MessageSquare, title: 'Negotiation Platform', description: 'Compare and negotiate service offers' },
        { icon: Globe, title: 'Service Categories', description: 'Organized by service type and location' },
        { icon: Calendar, title: 'Booking System', description: 'Schedule and manage service appointments' },
        { icon: Database, title: 'Rating System', description: 'Choose providers based on reviews and ratings' }
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
        <div className="container mx-auto px-6 py-20">
          {/* Back Button */}
          <ScrollAnimation direction="up">
            <motion.button
              onClick={() => navigate('/portfolio')}
              className="flex items-center gap-2 text-primary hover:text-white transition-colors mb-8"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </motion.button>
          </ScrollAnimation>

          {/* Project Header */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="mb-12">
              <motion.div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-white">Project</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
                {project.title}
              </h1>
              
              <p className="text-xl text-primary mb-6">
                {project.tagline}
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </div>
          </ScrollAnimation>

          {/* Project Images */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-16">
              <div className="relative">
                <Card3D className="overflow-hidden" intensity={20}>
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </Card3D>
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {project.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Detailed Description */}
              <ScrollAnimation direction="up" delay={0.3}>
                <Card3D className="p-8" intensity={15}>
                  <h2 className="text-3xl font-bold text-white mb-6">About the Project</h2>
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card3D>
              </ScrollAnimation>

              {/* Features */}
              <ScrollAnimation direction="up" delay={0.4}>
                <Card3D className="p-8" intensity={15}>
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card3D>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <ScrollAnimation direction="up" delay={0.5}>
                <Card3D className="p-6" intensity={15}>
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card3D>
              </ScrollAnimation>

              {/* Project Stats */}
              <ScrollAnimation direction="up" delay={0.6}>
                <Card3D className="p-6" intensity={15}>
                  <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Platform</span>
                      <span className="text-white font-medium">Mobile App</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-white font-medium">Social/Utility</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-green-400 font-medium">Completed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Team Size</span>
                      <span className="text-white font-medium">4-6 Developers</span>
                    </div>
                  </div>
                </Card3D>
              </ScrollAnimation>

              {/* CTA */}
              <ScrollAnimation direction="up" delay={0.7}>
                <Card3D className="p-6" intensity={15}>
                  <h3 className="text-xl font-bold text-white mb-4">Interested in Similar Project?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Let's discuss how we can help bring your ideas to life with our expertise.
                  </p>
                  <Button3D
                    variant="default"
                    size="lg"
                    onClick={() => navigate('/contact')}
                    intensity={20}
                    className="w-full"
                  >
                    Start Your Project
                  </Button3D>
                </Card3D>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectDetail; 