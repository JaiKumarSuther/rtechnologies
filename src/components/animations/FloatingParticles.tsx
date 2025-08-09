import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  targetX: number;
  targetY: number;
  depth: number;
  symbol: string;
  color: string;
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Coding symbols to display
  const codingSymbols = [
    '{', '}', '[', ']', '(', ')', '<', '>', '+', '=', '$', '%', '&', '*', 
    '|', '^', '~', '!', '@', '#', '?', '/', '\\', ';', ':', '"', "'", '`',
    '→', '←', '↑', '↓', '∞', '≠', '≤', '≥', '±', '×', '÷', '√', '∑', '∏'
  ];

  // Color palette for coding theme
  const colors = [
    '#3B82F6', // Blue
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#10B981', // Green
    '#F59E0B', // Orange
    '#EF4444', // Red
    '#06B6D4', // Cyan
    '#84CC16', // Lime
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.1,
          life: Math.random() * 200 + 100,
          targetX: 0,
          targetY: 0,
          depth: Math.random() * 0.5 + 0.5,
          symbol: codingSymbols[Math.floor(Math.random() * codingSymbols.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Calculate mouse influence
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.targetX = particle.x + (dx * force * 0.02 * particle.depth);
          particle.targetY = particle.y + (dy * force * 0.02 * particle.depth);
        } else {
          particle.targetX = particle.x;
          particle.targetY = particle.y;
        }

        // Smooth movement towards target
        particle.x += (particle.targetX - particle.x) * 0.1 + particle.vx;
        particle.y += (particle.targetY - particle.y) * 0.1 + particle.vy;
        particle.life -= 0.1;

        // Wrap around screen
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;

        // Reset particle when life ends
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = Math.random() * 200 + 100;
          particle.symbol = codingSymbols[Math.floor(Math.random() * codingSymbols.length)];
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Draw coding symbol instead of circle
        const fontSize = particle.size * 8;
        ctx.font = `${fontSize}px 'Courier New', monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        
        // Draw the symbol
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default FloatingParticles;