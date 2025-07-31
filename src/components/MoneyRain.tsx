import { useEffect, useState } from 'react';

interface RupeeProps {
  id: number;
  left: number;
  delay: number;
}

const MoneyRain = ({ trigger }: { trigger: boolean }) => {
  const [rupees, setRupees] = useState<RupeeProps[]>([]);

  useEffect(() => {
    if (trigger) {
      const newRupees = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setRupees(newRupees);

      // Clear after animation
      setTimeout(() => setRupees([]), 3000);
    }
  }, [trigger]);

  if (rupees.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {rupees.map((rupee) => (
        <div
          key={rupee.id}
          className="absolute text-4xl animate-fall"
          style={{
            left: `${rupee.left}%`,
            animationDelay: `${rupee.delay}s`,
            animationDuration: '3s',
            top: '-50px'
          }}
        >
          💰
        </div>
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall 3s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default MoneyRain;