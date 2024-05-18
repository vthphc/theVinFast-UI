// src/components/SlideInSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

const SlideInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-transform duration-1000 ease-in-out transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {children}
    </div>
  );
};

export default SlideInSection;
