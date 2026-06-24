import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor on body
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute w-5 h-5 border rounded-full pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(99, 91, 255, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(99, 91, 255, 0.4)' : 'rgba(59, 130, 246, 0.4)',
          boxShadow: isHovered ? '0 0 15px rgba(99, 91, 255, 0.15)' : 'none'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-accent-blue rounded-full pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          left: 6.5,
          top: 6.5,
          scale: isHovered ? 0 : 1
        }}
      />
    </div>
  );
}
