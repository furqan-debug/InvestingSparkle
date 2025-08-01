
import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

const PakistaniTicker = () => {
  const [currentFact, setCurrentFact] = useState(0);
  
  const facts = [
    "PSX is the 3rd largest stock exchange in South Asia",
    "Over 540 companies listed on Pakistan Stock Exchange",
    "KSE-100 Index tracks top performing companies",
    "70% of PSX stocks are Shariah compliant",
    "Banking sector represents 30% of market capitalization",
    "Textile sector drives Pakistan's export economy"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary/50 border-y border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <div className="text-sm font-medium text-foreground transition-all duration-300 ease-in-out">
            {facts[currentFact]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakistaniTicker;
