import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Code } from 'lucide-react';
import rtechLogo from '@/assets/rtech-logo.png';
import AnimatedButton from '@/components/ui/AnimatedButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-card backdrop-blur-glass shadow-glow border-b border-primary/30' 
          : 'bg-background/20 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-code-gradient rounded-lg flex items-center justify-center border border-primary/30 shadow-code">
                <Terminal className="w-7 h-7 text-primary" />
              </div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-mono text-gradient">
                R-TECH
              </span>
              <span className="text-xs text-primary/70 font-mono">./dev/code</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <AnimatedButton
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 hover-target"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="lg:hidden mt-6 pb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4">
                  <AnimatedButton
                    variant="primary"
                    size="sm"
                    onClick={() => scrollToSection('#contact')}
                    className="w-full"
                  >
                    Get Started
                  </AnimatedButton>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;