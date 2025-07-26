import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building,
  Users,
  Shield,
  Award,
  Clock,
  MessageCircle,
  FileText,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "PSX Account Opening Assistance",
      description: "Complete step-by-step guidance to open your Pakistan Stock Exchange trading account",
      features: [
        "Broker selection assistance",
        "Document preparation guidance",
        "Account verification support",
        "Initial deposit assistance",
        "Platform setup tutorial"
      ],
      price: "Free with any package",
      popular: false
    },
    {
      icon: Users,
      title: "First-Time Investor Package",
      description: "Perfect for beginners who want to start their PSX journey with confidence",
      features: [
        "PSX account opening",
        "Basic investment education",
        "Risk assessment profile",
        "First portfolio setup",
        "30-day support included"
      ],
      price: "PKR 15,000",
      popular: true
    },
    {
      icon: Award,
      title: "Portfolio Review & Optimization",
      description: "Professional analysis and optimization of your existing investment portfolio",
      features: [
        "Complete portfolio analysis",
        "Risk-return optimization",
        "Rebalancing recommendations",
        "Performance tracking setup",
        "Quarterly review meetings"
      ],
      price: "PKR 10,000",
      popular: false
    },
    {
      icon: Shield,
      title: "Monthly Shariah-Compliant Stock Picks",
      description: "Carefully researched Halal stock recommendations updated monthly",
      features: [
        "5-7 monthly stock picks",
        "Detailed research reports",
        "Entry and exit strategies",
        "Risk assessment for each pick",
        "WhatsApp group access"
      ],
      price: "PKR 5,000/month",
      popular: true
    },
    {
      icon: Clock,
      title: "Weekly Market Updates & Reports",
      description: "Stay informed with our comprehensive weekly market analysis and insights",
      features: [
        "Weekly market summary",
        "Sector analysis and trends",
        "Economic indicators review",
        "Trading opportunities",
        "PDF and WhatsApp delivery"
      ],
      price: "PKR 3,000/month",
      popular: false
    },
    {
      icon: MessageCircle,
      title: "Premium WhatsApp Group Access",
      description: "Exclusive access to our premium investment community and real-time alerts",
      features: [
        "Real-time market alerts",
        "Community discussions",
        "Expert Q&A sessions",
        "Breaking news updates",
        "Priority customer support"
      ],
      price: "PKR 2,000/month",
      popular: false
    },
    {
      icon: HeadphonesIcon,
      title: "One-on-One Mentorship",
      description: "Personalized investment coaching and mentorship for serious investors",
      features: [
        "Monthly 1-hour sessions",
        "Personalized investment plan",
        "Direct access to mentor",
        "Custom portfolio tracking",
        "Investment psychology coaching"
      ],
      price: "PKR 25,000/month",
      popular: false
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "PKR 20,000",
      description: "Perfect for beginners starting their investment journey",
      features: [
        "PSX account opening assistance",
        "First-time investor package",
        "3 months of stock picks",
        "Basic portfolio setup",
        "WhatsApp group access"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "PKR 45,000",
      description: "Comprehensive package for serious investors",
      features: [
        "Everything in Starter Package",
        "Portfolio review & optimization",
        "6 months of weekly reports",
        "Quarterly mentorship sessions",
        "Priority customer support"
      ],
      popular: true
    },
    {
      name: "Elite Package",
      price: "PKR 75,000",
      description: "Premium package with full mentorship and support",
      features: [
        "Everything in Growth Package",
        "Monthly one-on-one mentorship",
        "Custom investment strategies",
        "Unlimited consultations",
        "Direct mentor access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary-light/30 to-secondary-light/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-secondary-light text-secondary">
              📈 Professional Investment Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Expert Investment Services for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pakistani Investors</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From PSX account opening to advanced portfolio management, we provide comprehensive investment solutions tailored for the Pakistani market.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional investment services designed specifically for Pakistani investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`group hover:shadow-medium transition-all duration-300 border-0 shadow-soft ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          {service.popular && (
                            <Badge variant="secondary" className="mt-1 bg-secondary-light text-secondary">
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      asChild
                    >
                      <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Get Started
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Package Deals</h2>
            <p className="text-xl text-muted-foreground">
              Save money with our comprehensive packages designed for different investment levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105 shadow-strong' : 'shadow-soft'} border-0`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Choose Package
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Choose Your Service?
            </h2>
            <p className="text-xl text-white/90">
              Not sure which service is right for you? Contact us for a free consultation and we'll help you choose the perfect package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free Consultation
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                Compare Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;