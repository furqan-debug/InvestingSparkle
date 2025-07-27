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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <Badge variant="glass" className="glass animate-fade-in">
                  🇵🇰 Pakistan's Trusted Investment Partner
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-scale-in">
                  Start Your <span className="gradient-text animate-gradient bg-size-200">PSX Journey</span> Today
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground animate-fade-in">
                  Simplify stock market investing with our expert guidance. Get Shariah-compliant investment strategies designed for Pakistani investors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up">
                <Button 
                  size="xl" 
                  variant="glow"
                  className="hover-lift"
                  asChild
                >
                  <a href="https://wa.me/923181300262?text=Hi! I want to start my PSX journey. Can you provide me with a free consultation?" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Start Free Consultation
                  </a>
                </Button>
                <Button 
                  variant="glass" 
                  size="xl" 
                  className="hover-scale"
                >
                  Learn More
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center glass rounded-2xl p-4 hover-lift">
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl animate-pulse-glow"></div>
              <img 
                src={heroImage} 
                alt="Professional Pakistani financial office showing PSX trading"
                className="relative rounded-3xl shadow-strong w-full hover-lift floating"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="accent" className="animate-pulse-glow">
              ✨ Premium Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Our Expert Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive investment solutions designed specifically for Pakistani investors with cutting-edge technology and personalized support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover-lift animate-scale-in border-0 relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-medium">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
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
            <div className="space-y-6">
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
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Shariah Compliant</h3>
                <p className="text-sm text-muted-foreground">All investments follow Islamic principles</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Experienced Pakistani market analysts</p>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Consistent returns for our clients</p>
              </Card>
              <Card className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real success stories from Pakistani investors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about PSX investing</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft border-0">
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
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-floating" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10 animate-slide-up">
            <Badge variant="glass" className="glass text-white/90 animate-pulse-glow">
              🚀 Transform Your Financial Future
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Start Your <span className="gradient-text bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent">Investment Journey?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Pakistani investors who trust Investing Sparkle for their financial growth. 
              Get started with a free consultation today and unlock your investment potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button 
                size="xl" 
                variant="glass"
                className="glass text-white hover:shadow-glow hover-lift"
                asChild
              >
                <a href="https://wa.me/923181300262?text=Hi! I'm ready to start my investment journey. Please provide me with a WhatsApp consultation." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Consultation
                </a>
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white hover-scale"
              >
                View Our Services
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;