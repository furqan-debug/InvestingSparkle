import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Building,
  Award,
  Clock,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import StockTicker from "@/components/StockTicker";
import InvestmentCalculator from "@/components/InvestmentCalculator";

const Home = () => {
  const services = [
    {
      icon: Building,
      title: "PSX Account Opening",
      description: "Complete assistance in opening your Pakistan Stock Exchange account with step-by-step guidance."
    },
    {
      icon: Users,
      title: "Beginner Packages",
      description: "Specially designed investment packages for first-time investors with comprehensive support."
    },
    {
      icon: Shield,
      title: "Shariah-Compliant Picks",
      description: "Monthly stock recommendations that are 100% Halal and comply with Islamic principles."
    },
    {
      icon: Award,
      title: "Portfolio Review",
      description: "Professional analysis and optimization of your investment portfolio for better returns."
    },
    {
      icon: Clock,
      title: "Weekly Updates",
      description: "Stay informed with our weekly market analysis, insights, and investment opportunities."
    },
    {
      icon: MessageCircle,
      title: "Premium WhatsApp Group",
      description: "Exclusive access to our premium group for real-time market discussions and alerts."
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Software Engineer",
      content: "Investing Sparkle helped me start my investment journey. Their guidance made PSX investing simple and profitable.",
      rating: 5
    },
    {
      name: "Fatima Khan",
      role: "Teacher",
      content: "As a beginner, I was scared of the stock market. Their Shariah-compliant approach gave me confidence.",
      rating: 5
    },
    {
      name: "Muhammad Ali",
      role: "Business Owner",
      content: "Excellent portfolio review service. My returns improved significantly after following their advice.",
      rating: 5
    }
  ];

  const stats = [
    { number: "2000+", label: "Happy Clients" },
    { number: "5M+", label: "PKR Invested" },
    { number: "25%", label: "Avg. Returns" },
    { number: "100%", label: "Halal Certified" }
  ];

  const faqs = [
    {
      question: "Is stock market investing Halal in Islam?",
      answer: "Yes, stock market investing is Halal when done according to Islamic principles. We ensure all our recommendations are Shariah-compliant and avoid companies involved in interest-based businesses, alcohol, gambling, or other prohibited activities."
    },
    {
      question: "What's the minimum amount to start investing in PSX?",
      answer: "You can start investing in PSX with as little as PKR 10,000. However, we recommend starting with PKR 50,000 to build a diversified portfolio and reduce risk."
    },
    {
      question: "How do I open a PSX account?",
      answer: "We provide complete assistance in opening your PSX account. The process involves choosing a broker, submitting required documents (CNIC, bank statement, photos), and completing the verification process."
    },
    {
      question: "Do you guarantee profits?",
      answer: "We don't guarantee profits as stock market investments carry inherent risks. However, our research-based approach and risk management strategies have helped our clients achieve consistent returns over time."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Stock Ticker */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <StockTicker />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  🇵🇰 Pakistan's Trusted Investment Partner
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Start Your <span className="text-primary">PSX Journey</span> Today
                </h1>
                <p className="text-xl text-muted-foreground">
                  Simplify stock market investing with our expert guidance. Get Shariah-compliant investment strategies designed for Pakistani investors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-colors"
                  asChild
                >
                  <a href="https://wa.me/923181300262?text=Hi! I want to start my PSX journey. Can you provide me with a free consultation?" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Free Consultation
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional Pakistani financial office showing PSX trading"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InvestmentCalculator />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Expert Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive investment solutions designed specifically for Pakistani investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Why Choose Investing Sparkle?
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand the Pakistani market and the unique needs of local investors. Our approach combines Islamic principles with modern investment strategies.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% Shariah-compliant investment strategies",
                  "Expert guidance for PSX account opening",
                  "Beginner-friendly approach with hand-holding",
                  "Regular market updates and analysis",
                  "Premium WhatsApp group access",
                  "SECP regulated and compliant"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-float">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-glow" />
                <h3 className="font-semibold mb-2">Shariah Compliant</h3>
                <p className="text-sm text-muted-foreground">All investments follow Islamic principles</p>
              </Card>
              <Card className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 animate-glow" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Experienced Pakistani market analysts</p>
              </Card>
              <Card className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4 animate-glow" />
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Consistent returns for our clients</p>
              </Card>
              <Card className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '0.3s' }}>
                <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4 animate-glow" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Always available on WhatsApp</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real success stories from Pakistani investors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-glow" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about PSX investing</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-white/90 animate-fade-in">
              Join thousands of Pakistani investors who trust Investing Sparkle for their financial growth. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 animate-glow"
                asChild
              >
                <a href="https://wa.me/923181300262?text=Hi! I'm ready to start my investment journey. Please provide me with a WhatsApp consultation." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Consultation
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;