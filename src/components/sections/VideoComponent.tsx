import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const VideoComponent = () => {
  const videoRef = useRef(null);

  // Spring animation for enhanced 3D effect
  const [style, api] = useSpring(() => ({
    transform: 'perspective(1000px) scale(1)', // No rotation, only scaling
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.2)', // Initial shadow for depth
    config: { mass: 1, tension: 280, friction: 60 }, // Smooth animation with damping
  }));

  // Start the video automatically on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    // Apply scale and shadow effect for a 3D-like zoom effect
    api.start({
      transform: 'perspective(1000px) scale(1.1)', // Zoom in for 3D effect
      boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.3)', // Enhanced shadow
    });
  };

  const handleMouseLeave = () => {
    // Reset to initial state
    api.start({
      transform: 'perspective(1000px) scale(1)', // Reset scale to normal size
      boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.2)', // Reset shadow
    });
  };

  return (
    <div
      className="relative mx-auto w-[60%] max-w-[800px] mt-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.video
        ref={videoRef}
        style={style}
        className="w-full h-auto rounded-lg"
        src="https://res.cloudinary.com/dw9f5quok/video/upload/v1754475291/rtech-video_aew1cp.mp4"
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
      />
    </div>
  );
};

export default VideoComponent;
