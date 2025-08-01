
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link to="/" className="inline-flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Go to Homepage</span>
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="w-full" asChild>
            <button onClick={() => window.history.back()} className="inline-flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>
          </Button>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Need help? Contact our support team:
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I need help navigating your website." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Contact Support</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
