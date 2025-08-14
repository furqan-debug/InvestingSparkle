import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, TrendingUp, Users, MessageCircle, BarChart3, BookOpen, HeadphonesIcon, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveCard from "@/components/InteractiveCard";
const Services = () => {
  const services = [{
    title: "PSX Account Opening",
    description: "Complete assistance in opening your Pakistan Stock Exchange trading account with verified brokers.",
    price: "PKR 2,400",
    features: ["Broker comparison and selection", "Documentation assistance", "Account verification support", "Initial setup guidance"],
    icon: Users,
    popular: false
  }, {
    title: "Investment Packages",
    description: "Curated investment portfolios designed for different risk appetites and financial goals.",
    price: "Starting from PKR 50,000",
    features: ["Diversified stock selection", "Risk-adjusted portfolios", "Monthly performance reports", "Rebalancing recommendations"],
    icon: BarChart3,
    popular: true
  }, {
    title: "Portfolio Review",
    description: "Comprehensive analysis of your existing investments with actionable recommendations.",
    price: "PKR 5,000",
    features: ["Complete portfolio analysis", "Risk assessment", "Performance evaluation", "Strategic recommendations"],
    icon: TrendingUp,
    popular: false
  }, {
    title: "Stock Research & Picks",
    description: "Weekly stock recommendations based on fundamental and technical analysis.",
    price: "PKR 15,000/month",
    features: ["Weekly stock picks", "Detailed analysis reports", "Entry and exit strategies", "Risk management guidelines"],
    icon: BookOpen,
    popular: false
  }, {
    title: "Educational Sessions",
    description: "Learn the fundamentals of stock market investing through structured sessions.",
    price: "PKR 25,000",
    features: ["Market fundamentals training", "Technical analysis basics", "Risk management strategies", "Live trading demonstrations"],
    icon: HeadphonesIcon,
    popular: false
  }, {
    title: "Premium Advisory",
    description: "Comprehensive investment advisory service with dedicated support.",
    price: "PKR 50,000/month",
    features: ["Personalized investment strategy", "Direct WhatsApp support", "Weekly portfolio reviews", "Priority market updates"],
    icon: Shield,
    popular: false
  }];
  const handleServiceSelect = (service: typeof services[0]) => {
    const message = `Hi! I'm interested in your "${service.title}" service.

Service Details:
- Price: ${service.price}
- Description: ${service.description}

Features included:
${service.features.map(feature => `• ${feature}`).join('\n')}

I would like to know more about this service and how to get started.`;
    const whatsappUrl = `https://wa.me/923181300262?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Investment Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive solutions for your stock market investment journey in Pakistan
            </p>
            <Button size="lg" className="mr-4" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I want to get started with your investment services. Please guide me." target="_blank" rel="noopener noreferrer">
                Get Started Today
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I'd like to learn more about your investment services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Consult Now</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional services designed to help you succeed in the Pakistan Stock Exchange
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <InteractiveCard key={index} className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    {service.popular && <Badge variant="default" className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                  
                  <Button className="w-full mt-auto" onClick={() => handleServiceSelect(service)}>
                    Choose This Service
                  </Button>
                </div>
              </InteractiveCard>)}
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-background border rounded-lg p-8 shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Terms and Conditions</h2>
              <p className="text-muted-foreground mb-6">
                Please read our terms and conditions carefully before using our services. 
                Understanding our policies helps ensure a transparent and responsible investment experience.
              </p>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/terms" className="inline-flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>View Terms & Conditions</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Investing Sparkle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional, ethical, and transparent investment services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Service</h3>
              <p className="text-muted-foreground">
                We provide expert investment guidance with years of market experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Our investment strategies have consistently delivered results for our clients
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Get personalized support and guidance throughout your investment journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful investors who trust us with their financial future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I'm ready to start my investment journey. Please help me get started." target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I'm interested in your investment services and would like to get started." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-gray-700">Contact Us</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;