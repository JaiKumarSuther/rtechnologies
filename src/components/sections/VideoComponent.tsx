import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const VideoComponent = () => {
  const videoRef = useRef(null);

  // Spring animation for enhanced 3D effect
  const [style, api] = useSpring(() => ({
    transform: 'perspective(1000px) rotateY(0deg) scale(1)',
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.2)', // Add some shadow for depth
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
    // Apply rotation, scaling, and shadow increase for a more immersive 3D effect
    api.start({
      transform: 'perspective(1000px) rotateY(15deg) scale(1.05)',
      boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.3)',
    });
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Reset to initial state
    api.start({
      transform: 'perspective(1000px) rotateY(0deg) scale(1)',
      boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.2)',
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
