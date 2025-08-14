import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, Shield, BookOpen, Info, AlertTriangle, FileText, Calendar } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      id: 1,
      title: "Purpose of Our Platform",
      icon: BookOpen,
      content: [
        "Investing Sparkle is an educational and informational platform designed to help users understand the basics of the Pakistan Stock Exchange (PSX) and general investing principles.",
        "We do not provide personalized investment advice or financial services licensed under SECP or any financial regulator."
      ]
    },
    {
      id: 2,
      title: "Our Role: Guidance, Not Management",
      icon: Shield,
      content: [
        "Our team provides guidance and insights based on publicly available data, technical analysis, and market trends.",
        "However, we do not operate any user accounts, manage client funds, or make investment decisions on anyone's behalf."
      ],
      highlight: "We only provide general direction and clarity, so that you can make smarter decisions on your own terms."
    },
    {
      id: 3,
      title: "Investment Risk Disclosure",
      icon: AlertTriangle,
      content: [
        "All investments carry inherent risks including potential loss of principal amount.",
        "Past performance does not guarantee future results.",
        "Market conditions can be influenced by various factors including government policy changes, global economic events, and market sentiment.",
        "Our goal is to help you reduce uninformed risk through proper education and strategies."
      ]
    },
    {
      id: 4,
      title: "Liability & Responsibility",
      icon: Scale,
      content: [
        "You, as the user, are solely responsible for any investment decisions made after engaging with our content.",
        "We do not guarantee returns, nor do we accept responsibility for any gains or losses resulting from your investments.",
        "All investment decisions are made at your own discretion and risk."
      ],
      highlight: "Remember: All decisions are your own. We're here to educate, not influence."
    },
    {
      id: 5,
      title: "Service Limitations",
      icon: Info,
      content: [
        "We do not buy or sell stocks on your behalf",
        "We do not open or manage brokerage accounts",
        "We do not handle, transfer, or custody any funds",
        "Our platform serves as an educational resource, not a trading platform"
      ]
    },
    {
      id: 6,
      title: "Disclaimer of Guarantees",
      icon: FileText,
      content: [
        "We strive to provide accurate, insightful, and practical information, however we cannot guarantee:",
        "• Any specific return on investment",
        "• That our suggestions will always be profitable",
        "• That market conditions will remain stable",
        "• The accuracy of all market predictions"
      ]
    },
    {
      id: 7,
      title: "Legal Compliance",
      icon: Scale,
      content: [
        "Users are expected to comply with all applicable laws and regulations of their jurisdiction.",
        "Investing Sparkle shall not be liable for any misuse of information that results in violation of any law or regulation."
      ]
    },
    {
      id: 8,
      title: "Intellectual Property",
      icon: Shield,
      content: [
        "All content, including graphics, tools, videos, guides, and written materials are the intellectual property of Investing Sparkle.",
        "Content may not be reproduced, copied, or redistributed without prior written permission."
      ]
    },
    {
      id: 9,
      title: "Terms Updates",
      icon: Calendar,
      content: [
        "We reserve the right to update or modify these Terms at any time.",
        "Users are encouraged to review these Terms periodically.",
        "Continued use of the platform after updates constitutes acceptance of the changes."
      ]
    },
    {
      id: 10,
      title: "Jurisdiction & Dispute Resolution",
      icon: Scale,
      content: [
        "These Terms are governed by the laws of Pakistan.",
        "Any legal disputes shall be resolved in the jurisdiction of Karachi, Sindh."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Scale className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Legal Document</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms and Conditions
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Calendar className="h-3 w-3 mr-1" />
              Effective: August 7, 2025
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <FileText className="h-3 w-3 mr-1" />
              Version 1.0
            </Badge>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our investment education platform and services.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-background">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Welcome to Investing Sparkle</h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using our platform, website, or any of our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and Conditions. These terms are designed to ensure 
                transparency and promote responsible investing practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.id} className="border border-border/50 hover:border-border transition-colors">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                    {section.id}
                  </div>
                  <section.icon className="h-5 w-5 text-primary" />
                  <span className="text-lg">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {section.content.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                {section.highlight && (
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-4">
                    <p className="font-medium text-primary text-sm text-center">
                      {section.highlight}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Contact Information */}
        <Card className="bg-muted/30 border-muted">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Questions About These Terms?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>📧 Email: info@investingsparkle.com</span>
              <span className="hidden sm:inline">|</span>
              <span>📱 WhatsApp: +92 318 1300262</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            Last updated: August 7, 2025 | © 2025 Investing Sparkle. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;