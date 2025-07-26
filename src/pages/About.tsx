import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target,
  Heart,
  Shield,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Shariah Compliance",
      description: "We ensure all our investment recommendations strictly follow Islamic principles and are completely Halal."
    },
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Your financial success is our priority. We provide personalized guidance tailored to your unique goals."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We believe in creating a supportive community of Pakistani investors who learn and grow together."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We strive for excellence in everything we do, from research to customer support and education."
    }
  ];

  const team = [
    {
      name: "Muhammad Ahmed",
      role: "Founder & Lead Analyst",
      experience: "8+ years in Pakistani stock market",
      specialization: "PSX analysis, Shariah-compliant investing"
    },
    {
      name: "Fatima Hassan",
      role: "Senior Investment Advisor",
      experience: "6+ years in financial planning",
      specialization: "Portfolio management, risk assessment"
    },
    {
      name: "Ali Raza",
      role: "Market Research Analyst",
      experience: "5+ years in market research",
      specialization: "Technical analysis, market trends"
    },
    {
      name: "Ayesha Khan",
      role: "Client Relations Manager",
      experience: "4+ years in customer service",
      specialization: "Client onboarding, support"
    }
  ];

  const achievements = [
    {
      number: "2000+",
      label: "Happy Clients",
      description: "Investors who trust us with their financial journey"
    },
    {
      number: "PKR 5M+",
      label: "Assets Managed",
      description: "Total investment value under our guidance"
    },
    {
      number: "25%",
      label: "Average Returns",
      description: "Average annual returns for our clients"
    },
    {
      number: "100%",
      label: "Halal Certified",
      description: "All recommendations are Shariah-compliant"
    }
  ];

  const certifications = [
    "SECP Registered Investment Advisor",
    "PSX Certified Market Professional",
    "Islamic Finance Certification",
    "Risk Management Professional"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary-light/30 to-secondary-light/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-secondary-light text-secondary">
              🏢 About Profit Way
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Empowering Pakistani Investors to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Build Wealth</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to simplify stock market investing for everyday people in Pakistan through smart, ethical, and long-term investment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Profit Way was founded in 2020 with a simple yet powerful vision: to make stock market investing accessible, understandable, and profitable for every Pakistani investor, regardless of their background or experience level.
                </p>
                <p>
                  As practicing Muslims and experienced investors, we noticed a significant gap in the Pakistani market for Shariah-compliant investment guidance. Many potential investors were either afraid of the stock market or unsure about its permissibility in Islam.
                </p>
                <p>
                  Today, we proudly serve over 2000 clients across Pakistan, helping them navigate the complexities of PSX investing while staying true to their Islamic values. Our team of certified professionals combines deep market knowledge with Islamic finance principles to deliver results that matter.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 shadow-soft border-0">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="font-semibold text-foreground mb-2">{achievement.label}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-soft border-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To simplify stock market investing for everyday people in Pakistan and help them grow their wealth through smart, ethical, and long-term strategies. We believe that everyone deserves access to professional investment guidance, regardless of their financial background.
              </p>
            </Card>
            
            <Card className="p-8 shadow-soft border-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become Pakistan's most trusted investment advisory platform, known for our commitment to Islamic values, client success, and educational excellence. We envision a future where every Pakistani has the knowledge and confidence to build long-term wealth through smart investing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your financial success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-soft border-0">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                  <p className="text-xs text-muted-foreground italic">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              We maintain the highest standards of professional excellence and regulatory compliance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-soft border-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Regulatory Compliance</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Profit Way is fully compliant with SECP (Securities and Exchange Commission of Pakistan) regulations and maintains all required licenses for investment advisory services.
                    </p>
                    <p>
                      Our Islamic finance compliance is verified by qualified Shariah scholars, ensuring all our recommendations meet the highest standards of Islamic financial principles.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of Pakistani investors who trust Profit Way for their financial growth. 
              Let us help you build wealth the halal way.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started Today
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;