import { useState, useEffect } from 'react';

const PakistaniTicker = () => {
  const [currentFact, setCurrentFact] = useState(0);
  
  const facts = [
    "🇵🇰 PSX is the 3rd largest stock exchange in South Asia",
    "📈 Over 540 companies listed on Pakistan Stock Exchange",
    "💎 PSX KSE-100 Index tracks top 100 companies",
    "🕌 70% of PSX stocks are Shariah compliant",
    "🏦 Banking sector represents 30% of market capitalization",
    "⚡ Textile sector is Pakistan's largest export industry"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary/5 border-y border-primary/10 py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-sm font-medium text-primary transition-all duration-500 ease-in-out">
            {facts[currentFact]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakistaniTicker;