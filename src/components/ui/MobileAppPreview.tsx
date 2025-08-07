import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileAppPreviewProps {
  images: string[];
  title: string;
  className?: string;
  maxImages?: number;
}

interface ImageType {
  type: 'login' | 'main' | 'feature' | 'settings' | 'other';
  size: 'small' | 'medium' | 'large';
}

const MobileAppPreview: React.FC<MobileAppPreviewProps> = ({
  images,
  title,
  className = "",
  maxImages = 3
}) => {
  const displayImages = images.slice(0, maxImages);
  const hasMoreImages = images.length > maxImages;

  const getImageType = (image: string): ImageType => {
    const filename = image.split('/').pop() || '';
    
    if (filename.includes('login') || filename.includes('signup') || filename.includes('auth')) {
      return { type: 'login', size: 'small' };
    } else if (filename.includes('main') || filename.includes('home') || filename.includes('dashboard')) {
      return { type: 'main', size: 'large' };
    } else if (filename.includes('feature') || filename.includes('chat') || filename.includes('profile')) {
      return { type: 'feature', size: 'medium' };
    } else if (filename.includes('settings') || filename.includes('config')) {
      return { type: 'settings', size: 'small' };
    }
    
    return { type: 'other', size: 'medium' };
  };

  const getFrameSize = (imageType: ImageType) => {
    switch (imageType.size) {
      case 'small':
        return "w-32 h-48 md:w-40 md:h-60";
      case 'medium':
        return "w-40 h-60 md:w-48 md:h-72";
      case 'large':
        return "w-48 h-72 md:w-56 md:h-84";
      default:
        return "w-40 h-60 md:w-48 md:h-72";
    }
  };

  return (
    <div className={`w-full ${className}`}>
             <div className="flex gap-6 justify-center">
                 {displayImages.map((image, index) => {
           const imageType = getImageType(image);
           return (
             <motion.div
               key={index}
               className="relative"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ 
                 scale: 1.1,
                 zIndex: 10
               }}
             >
               {/* Dynamic Mobile Frame */}
               <div className={cn("relative", getFrameSize(imageType))}>
                           {/* Enhanced Phone Frame */}
             <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg p-1 shadow-lg mobile-frame">
                {/* Screen */}
                <div className="relative overflow-hidden rounded-md bg-white">
                  <img
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                                 {/* Enhanced Home Indicator */}
                 <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-white/40 via-white/60 to-white/40 rounded-full opacity-80"></div>
              </div>
            </div>
            
                         {/* Enhanced Image Number Badge for additional images */}
             {index === maxImages - 1 && hasMoreImages && (
               <motion.div
                 className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-white/20"
                 whileHover={{ scale: 1.1 }}
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: index * 0.1 + 0.5 }}
               >
                 +{images.length - maxImages}
               </motion.div>
             )}
           </motion.div>
         );
       })}
      </div>
    </div>
  );
};

export default MobileAppPreview; 