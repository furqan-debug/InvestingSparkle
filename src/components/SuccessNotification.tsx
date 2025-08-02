
import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessNotification = ({ trigger, message }: { trigger: boolean; message: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 3000);
    }
  }, [trigger]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-success text-success-foreground px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
        <CheckCircle className="h-5 w-5" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default SuccessNotification;
