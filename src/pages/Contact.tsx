import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Get instant responses to your queries",
      value: "+92 300 1234567",
      action: "Chat Now",
      link: "https://wa.me/923001234567",
      primary: true
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us detailed queries",
      value: "info@investingsparkle.pk",
      action: "Send Email",
      link: "mailto:info@investingsparkle.pk",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call for urgent matters",
      value: "+92 21 1234567",
      action: "Call Now",
      link: "tel:+922112345678",
      primary: false
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to WhatsApp messages within 30 minutes during business hours and to emails within 24 hours."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to understand your investment goals and explain how we can help."
    },
    {
      question: "Can I visit your office?",
      answer: "We operate primarily online to keep our costs low and pass the savings to our clients. However, we can arrange in-person meetings for premium clients."
    },
    {
      question: "What information should I prepare before contacting you?",
      answer: "Please have your investment goals, risk tolerance, current financial situation, and any existing investments information ready."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary-light/30 to-secondary-light/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-secondary-light text-secondary">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Ready to Start Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Investment Journey?</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about PSX investing or need personalized guidance? Our expert team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className={`shadow-soft border-0 group hover:shadow-medium transition-all duration-300 ${method.primary ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${method.primary ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-muted'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="font-medium text-primary mb-3">{method.value}</p>
                        <Button 
                          size="sm" 
                          className={method.primary ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" : ""}
                          variant={method.primary ? "default" : "outline"}
                          asChild
                        >
                          <a href={method.link} target="_blank" rel="noopener noreferrer">
                            {method.action}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-foreground">{schedule.day}</span>
                    <span className="text-sm text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Karachi, Pakistan<br />
                      (Virtual consultations available)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please use WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+92 300 1234567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="What would you like to discuss?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your investment goals, experience level, and any specific questions you have..."
                    rows={6}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from Investing Sparkle regarding my inquiry and investment opportunities. *
                    </Label>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about contacting us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </div>

      {/* Quick Action Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-soft border-0 p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Need Immediate Help?</h3>
                  <p className="text-muted-foreground">
                    Get instant answers to your investment questions through our WhatsApp support.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    asChild
                  >
                    <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>
              
              <Card className="shadow-soft border-0 p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-primary flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Ready to Start Investing?</h3>
                  <p className="text-muted-foreground">
                    Book your free consultation and take the first step towards building wealth.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;