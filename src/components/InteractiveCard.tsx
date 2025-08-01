
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveCard = ({ children, className = "" }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`professional-card ${className} ${isHovered ? 'transform translate-y-[-2px] shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="relative">
        {children}
      </CardContent>
    </Card>
  );
};

export default InteractiveCard;
