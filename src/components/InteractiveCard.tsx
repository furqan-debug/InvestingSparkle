import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveCard = ({ children, className = "" }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 ${className} ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)), transparent)`
          }}
        />
      )}
      <CardContent className="relative z-10">
        {children}
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;