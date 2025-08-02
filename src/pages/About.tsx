import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, TrendingUp, MessageCircle, Target, Eye, Heart } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedCounter from "@/components/AnimatedCounter";
const About = () => {
  const stats = [{
    number: "2000+",
    label: "Happy Investors"
  }, {
    number: "₨50M+",
    label: "Assets Under Management"
  }, {
    number: "5+",
    label: "Years Experience"
  }, {
    number: "95%",
    label: "Client Satisfaction"
  }];
  const values = [{
    icon: Shield,
    title: "Transparency",
    description: "We believe in complete transparency in all our investment recommendations and processes."
  }, {
    icon: Heart,
    title: "Ethics First",
    description: "All our investment strategies are based on ethical principles and Shariah compliance."
  }, {
    icon: Target,
    title: "Client-Focused",
    description: "Your financial goals and risk tolerance drive every investment decision we make."
  }, {
    icon: TrendingUp,
    title: "Long-term Growth",
    description: "We focus on sustainable, long-term wealth creation rather than quick profits."
  }];
  const team = [{
    name: "Muhammad Ahmad",
    role: "Founder & Chief Investment Officer",
    description: "10+ years experience in Pakistan's financial markets with a proven track record.",
    certifications: ["CFA Level II", "Investment Advisory Certified"]
  }, {
    name: "Sarah Khan",
    role: "Senior Investment Analyst",
    description: "Expert in fundamental analysis with focus on emerging market opportunities.",
    certifications: ["MBA Finance", "Technical Analysis Certified"]
  }, {
    name: "Ali Hassan",
    role: "Portfolio Manager",
    description: "Specializes in risk management and portfolio optimization strategies.",
    certifications: ["FRM Certified", "Investment Management Certified"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Investing Sparkle
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are dedicated to making stock market investing accessible, ethical, and profitable for everyday people in Pakistan.
            </p>
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I'd like to learn more about Investing Sparkle and your services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <AnimatedCounter end={stat.number} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Founded in 2019, Investing Sparkle emerged from a simple observation: most Pakistanis wanted to invest in the stock market but didn't know where to start or whom to trust.
              </p>
              <p className="text-center mb-6">
                Our founder, Muhammad Ahmad, experienced firsthand the challenges of navigating Pakistan's financial markets without proper guidance. After years of studying global investment strategies and understanding the local market dynamics, he decided to create a platform that would democratize access to professional investment advice.
              </p>
              <p className="text-center">
                Today, we're proud to have helped over 2,000 individuals and families build wealth through smart, ethical, and long-term investment strategies in the Pakistan Stock Exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InteractiveCard>
              <div className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make stock market investing accessible, transparent, and profitable for every Pakistani, regardless of their background or experience level.
                </p>
              </div>
            </InteractiveCard>

            <InteractiveCard>
              <div className="p-8 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become Pakistan's most trusted investment advisory platform, empowering millions to achieve financial independence through ethical investing.
                </p>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => <InteractiveCard key={index}>
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.certifications.map((cert, certIndex) => <Badge key={certIndex} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>)}
                  </div>
                </div>
              </InteractiveCard>)}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Trusted & Secure</h2>
            <p className="text-muted-foreground mb-8">
              We maintain the highest standards of security and ethical conduct in all our operations. 
              Your trust is our most valuable asset, and we work hard to earn and maintain it every day.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Secure Platform</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Ethical Practices</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Proven Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful investors who trust us with their financial future.
          </p>
          <Button variant="secondary" size="lg" className="mr-4">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <a href="https://wa.me/923181300262?text=Hi! I'm interested in learning more about Investing Sparkle and how to get started." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-[#0830ad]">Contact Us</span>
            </a>
          </Button>
        </div>
      </section>
    </div>;
};
export default About;