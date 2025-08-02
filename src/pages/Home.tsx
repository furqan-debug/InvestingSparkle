import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, MessageCircle, CheckCircle, ArrowRight, Building, Award, Clock, Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import StockTicker from "@/components/StockTicker";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import AnimatedCounter from "@/components/AnimatedCounter";
import PakistaniTicker from "@/components/PakistaniTicker";
import InteractiveCard from "@/components/InteractiveCard";
const Home = () => {
  const services = [{
    icon: Building,
    title: "PSX Account Opening",
    description: "Complete assistance in opening your Pakistan Stock Exchange account with comprehensive guidance and support."
  }, {
    icon: Users,
    title: "Beginner Investment Programs",
    description: "Structured investment programs designed specifically for first-time investors with educational support."
  }, {
    icon: Shield,
    title: "Shariah-Compliant Investments",
    description: "Monthly curated stock recommendations that comply with Islamic principles and Shariah guidelines."
  }, {
    icon: Award,
    title: "Portfolio Analysis & Review",
    description: "Professional portfolio analysis and optimization services to maximize your investment returns."
  }, {
    icon: Clock,
    title: "Market Research & Updates",
    description: "Regular market analysis, research reports, and investment opportunities delivered weekly."
  }, {
    icon: MessageCircle,
    title: "Premium Advisory Services",
    description: "Exclusive access to our premium advisory group for real-time market insights and investment guidance."
  }];
  const testimonials = [{
    name: "Ahmed Hassan",
    role: "Software Engineer",
    content: "Investing Sparkle provided exceptional guidance for my PSX journey. Their professional approach and Shariah-compliant recommendations gave me the confidence to invest.",
    rating: 5
  }, {
    name: "Fatima Khan",
    role: "Educator",
    content: "As a beginner investor, their structured approach and educational support made stock market investing accessible and profitable for me.",
    rating: 5
  }, {
    name: "Muhammad Ali",
    role: "Business Owner",
    content: "Their portfolio review service significantly improved my investment returns. The professional analysis and recommendations are top-notch.",
    rating: 5
  }];
  const stats = [{
    number: "2000+",
    label: "Satisfied Clients"
  }, {
    number: "5M+",
    label: "PKR Managed"
  }, {
    number: "25%",
    label: "Average Returns"
  }, {
    number: "100%",
    label: "Shariah Compliant"
  }];
  const faqs = [{
    question: "Is stock market investing permissible under Islamic law?",
    answer: "Yes, stock market investing is permissible when conducted according to Islamic principles. We ensure all recommendations comply with Shariah guidelines and avoid companies engaged in prohibited activities such as conventional banking, alcohol, gambling, or excessive debt."
  }, {
    question: "What is the minimum investment required for PSX?",
    answer: "You can begin investing in PSX with as little as PKR 10,000. However, we recommend a minimum of PKR 50,000 to build a properly diversified portfolio and optimize risk management."
  }, {
    question: "How can I open a PSX trading account?",
    answer: "We provide comprehensive assistance throughout the account opening process, including broker selection, document preparation (CNIC, bank statements, photographs), and verification completion."
  }, {
    question: "Do you provide investment guarantees?",
    answer: "We do not provide profit guarantees as all securities investments carry inherent market risks. However, our research-based methodology and risk management strategies have consistently delivered positive results for our clients."
  }];
  return <div className="min-h-screen">
      {/* Professional Facts Ticker */}
      <PakistaniTicker />
      
      {/* Stock Market Ticker */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <StockTicker />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center px-4 py-2 text-sm font-medium border">
                  Pakistan's Trusted Investment Partner
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Professional <span className="text-primary">PSX Investment</span> Services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Expert guidance for Pakistan Stock Exchange investing. Shariah-compliant strategies designed specifically for Pakistani investors seeking long-term growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="professional-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8" asChild>
                  <a href="https://wa.me/+923181300262?text=Hi! I would like to schedule a professional consultation regarding PSX investment services." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="professional-button h-12 px-8">
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => <div key={stat.label} className="text-center">
                    <AnimatedCounter end={stat.number} />
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>)}
              </div>
            </div>
            
            <div className="relative slide-up">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src={heroImage} alt="Professional financial advisory office in Pakistan" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">Investment Growth Calculator</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estimate your potential returns with our professional investment calculator
            </p>
          </div>
          <InvestmentCalculator />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">Professional Investment Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored for Pakistani investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <InteractiveCard key={index} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </InteractiveCard>;
          })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                Why Choose Investing Sparkle
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in the Pakistani market with deep understanding of local regulations, cultural values, and investment preferences. Our approach combines Islamic principles with proven investment strategies.
              </p>
              
              <div className="space-y-4">
                {["100% Shariah-compliant investment strategies", "Comprehensive PSX account opening assistance", "Structured programs for beginner investors", "Regular market analysis and research reports", "Premium advisory services and support"].map((benefit, index) => <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground mx-[12px]">{benefit}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <InteractiveCard className="p-6 text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Shariah Compliant</h3>
                <p className="text-sm text-muted-foreground">All investments follow Islamic principles</p>
              </InteractiveCard>
              <InteractiveCard className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Advisory</h3>
                <p className="text-sm text-muted-foreground">Experienced market professionals</p>
              </InteractiveCard>
              <InteractiveCard className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">Consistent client portfolio growth</p>
              </InteractiveCard>
              <InteractiveCard className="p-6 text-center">
                <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Professional Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated customer service</p>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">Testimonials from satisfied Pakistani investors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="professional-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about PSX investing and our services</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => <Card key={index} className="professional-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Start Your Professional Investment Journey
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of Pakistani investors who trust Investing Sparkle for their financial growth. 
              Schedule a professional consultation to discuss your investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 font-medium" asChild>
                <a href="https://wa.me/+923181300262?text=Hello! I would like to schedule a professional consultation to discuss PSX investment opportunities." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground h-12 px-8 font-medium bg-[#0352a0] text-slate-50">
                View Investment Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75">Shariah Compliant • Professional Advisory Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
