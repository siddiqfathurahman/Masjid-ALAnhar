import React, { useRef, useState, useEffect } from 'react';

const AnimatedText = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className={`relative inline-block mt-2 p-1 text-white transition-transform duration-700 ${
        isVisible ? 'animate-gradient-box scale-105' : 'opacity-0'
      }`}
    >
      {children}
    </span>
  );
};

export default AnimatedText;
