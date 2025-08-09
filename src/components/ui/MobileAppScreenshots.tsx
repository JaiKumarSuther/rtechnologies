import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Smartphone, Monitor, Tablet, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileAppScreenshotsProps {
  images: string[];
  title: string;
  className?: string;
}

interface GroupedImage {
  group: string;
  images: string[];
  isGroup: boolean;
  type: 'login' | 'main' | 'feature' | 'settings' | 'other';
}

const MobileAppScreenshots: React.FC<MobileAppScreenshotsProps> = ({
  images,
  title,
  className
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Analyze images and group them by type and content
  const groupedImages = useMemo(() => {
    const groups: { [key: string]: string[] } = {};
    const singles: string[] = [];
    const imageTypes: { [key: string]: 'login' | 'main' | 'feature' | 'settings' | 'other' } = {};

    images.forEach((image) => {
      const filename = image.split('/').pop() || '';
      
      // Determine image type based on filename patterns
      let imageType: 'login' | 'main' | 'feature' | 'settings' | 'other' = 'other';
      
      if (filename.includes('login') || filename.includes('signup') || filename.includes('auth')) {
        imageType = 'login';
      } else if (filename.includes('main') || filename.includes('home') || filename.includes('dashboard')) {
        imageType = 'main';
      } else if (filename.includes('feature') || filename.includes('chat') || filename.includes('profile')) {
        imageType = 'feature';
      } else if (filename.includes('settings') || filename.includes('config')) {
        imageType = 'settings';
      }

      const match = filename.match(/(\d+)\.(\d+)/);
      
      if (match) {
        const groupKey = match[1];
        if (!groups[groupKey]) {
          groups[groupKey] = [];
        }
        groups[groupKey].push(image);
        imageTypes[groupKey] = imageType;
      } else {
        singles.push(image);
        imageTypes[image] = imageType;
      }
    });

    const result: GroupedImage[] = [];
    
    // Add grouped images
    Object.entries(groups).forEach(([group, groupImages]) => {
      if (groupImages.length > 1) {
        result.push({
          group,
          images: groupImages.sort(),
          isGroup: true,
          type: imageTypes[group]
        });
      } else {
        singles.push(...groupImages);
      }
    });

    // Add single images
    singles.forEach((image) => {
      result.push({
        group: image,
        images: [image],
        isGroup: false,
        type: imageTypes[image]
      });
    });

    return result;
  }, [images]);

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex);
    setCurrentImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  const getImageIndex = (groupedImage: GroupedImage, imageIndex: number) => {
    let globalIndex = 0;
    for (const item of groupedImages) {
      if (item === groupedImage) {
        return globalIndex + imageIndex;
      }
      globalIndex += item.images.length;
    }
    return globalIndex;
  };

  const getGroupTitle = (groupedImage: GroupedImage) => {
    if (!groupedImage.isGroup) return null;
    
    switch (groupedImage.type) {
      case 'login':
        return 'Authentication Flow';
      case 'main':
        return 'Main App Screens';
      case 'feature':
        return 'Feature Screens';
      case 'settings':
        return 'Settings & Configuration';
      default:
        return `Screen Flow ${groupedImage.group}`;
    }
  };

  const getGroupIcon = (groupedImage: GroupedImage) => {
    switch (groupedImage.type) {
      case 'login':
        return <Monitor className="w-5 h-5 text-primary" />;
      case 'main':
        return <Smartphone className="w-5 h-5 text-primary" />;
      case 'feature':
        return <Tablet className="w-5 h-5 text-primary" />;
      default:
        return <Smartphone className="w-5 h-5 text-primary" />;
    }
  };

  const getLayoutClass = (groupedImage: GroupedImage) => {
    if (!groupedImage.isGroup) {
      // Single images get different layouts based on type
      switch (groupedImage.type) {
        case 'login':
          return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1"; // Login screens in 1 column for larger size
        case 'main':
          return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1"; // Main screens in 1 column for larger size
        case 'feature':
          return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1"; // Feature screens in 1 column for larger size
        default:
          return "grid-cols-1 md:grid-cols-1 lg:grid-cols-1";
      }
    }
    
    // Grouped images get different layouts based on type
    switch (groupedImage.type) {
      case 'login':
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; // Login flow in 2 columns
      case 'main':
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; // Main app flow in 2 columns
      case 'feature':
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Feature screens in 3 columns
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
    }
  };

  const getFrameSize = (groupedImage: GroupedImage, imageIndex: number) => {
    if (!groupedImage.isGroup) {
      // Single images get different sizes based on type
      switch (groupedImage.type) {
        case 'login':
          return "max-w-[280px]"; // Login screens smaller
        case 'main':
          return "max-w-[320px]"; // Main screens medium
        case 'feature':
          return "max-w-[300px]"; // Feature screens smaller
        default:
          return "max-w-[280px]";
      }
    }
    
    // Grouped images get different sizes based on position
    if (groupedImage.type === 'login') {
      return imageIndex === 0 ? "max-w-[280px]" : "max-w-[260px]"; // First login screen larger
    }
    
    return "max-w-[300px]";
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Enhanced Screenshots Grid */}
      <div className="space-y-8">
        {groupedImages.map((groupedImage, groupIndex) => (
          <motion.div
            key={groupedImage.group}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.2 }}
          >
            {/* Enhanced Group Header */}
            {groupedImage.isGroup && groupedImage.images.length > 1 && (
              <div className="mb-8 text-center">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/30 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {getGroupIcon(groupedImage)}
                  <span className="text-lg font-semibold text-primary">
                    {getGroupTitle(groupedImage)}
                  </span>
                </motion.div>
              </div>
            )}

            {/* Single Image Header */}
            {!groupedImage.isGroup && (
              <div className="mb-8 text-center">
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-600/20 to-gray-600/10 rounded-full border border-gray-600/30"
                  whileHover={{ scale: 1.05 }}
                >
                  {getGroupIcon(groupedImage)}
                  <span className="text-lg font-medium text-gray-400">
                    {groupedImage.type === 'login' ? 'Login Screen' :
                     groupedImage.type === 'main' ? 'Main Screen' :
                     groupedImage.type === 'feature' ? 'Feature Screen' :
                     groupedImage.type === 'settings' ? 'Settings Screen' : 'App Screen'}
                  </span>
                </motion.div>
              </div>
            )}

            {/* Images Container with Dynamic Layout */}
            <div className={cn(
              "grid gap-4 md:gap-6 lg:gap-8",
              getLayoutClass(groupedImage)
            )}>
              {groupedImage.images.map((image, imageIndex) => {
                const globalIndex = getImageIndex(groupedImage, imageIndex);
                return (
                  <motion.div
                    key={image}
                    className="relative group cursor-pointer flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: groupIndex * 0.2 + imageIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      zIndex: 10,
                      y: -12
                    }}
                    onClick={() => openLightbox(globalIndex)}
                  >
                    {/* Enhanced Mobile Frame */}
                    <div className={cn("relative w-full", getFrameSize(groupedImage, imageIndex))}>
                                             {/* Phone Frame with enhanced styling */}
                       <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-4 shadow-2xl mobile-frame">
                         {/* Screen with enhanced effects */}
                         <div className="relative overflow-hidden rounded-[2.5rem] bg-white">
                          <img
                            src={image}
                            alt={`${title} screenshot ${globalIndex + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          
                          {/* Enhanced overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 group-hover:from-black/40 group-hover:to-black/40 transition-all duration-500 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                              <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 shadow-lg">
                                <Maximize2 className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Home Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full opacity-80"></div>
                        
                        {/* Side Button */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced Image Number Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white/20">
                      {globalIndex + 1}
                    </div>

                    {/* Floating Info Card */}
                    <motion.div
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      Click to enlarge
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 lightbox-backdrop z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Enhanced Close Button */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/20"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Enhanced Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/20"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={32} />
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/20"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={32} />
                </motion.button>
              </>
            )}

            {/* Enhanced Image Container */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Mobile Frame in Lightbox */}
              <div className="relative mx-auto w-full max-w-[450px] md:max-w-[500px]">
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-4 shadow-2xl mobile-frame">
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-white">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full opacity-80"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Enhanced Image Counter */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentImageIndex + 1} of {images.length}
              </motion.div>
            </motion.div>

            {/* Enhanced Thumbnail Navigation */}
            {images.length > 1 && (
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileAppScreenshots; 