
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const AnimatedCounter = ({ end, duration = 1000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number from string (e.g., "2000+" -> 2000)
    const numericEnd = parseInt(end.replace(/[^\d]/g, ''));
    const suffix = end.replace(/[\d]/g, '');
    
    if (isNaN(numericEnd)) {
      setCount(end);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Subtle easing
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easeOut * numericEnd);
      
      setCount(currentCount + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-2xl font-semibold text-primary">
      {count}
    </div>
  );
};

export default AnimatedCounter;
