
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Shield } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `New Inquiry from ${formData.firstName} ${formData.lastName}`;
    const emailBody = `Hello Investing Sparkle Team,

I am reaching out regarding your investment services. Please find my details below:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}

Message:
${formData.message}

I look forward to hearing from you soon.

Best regards,
${formData.firstName} ${formData.lastName}`;

    const mailtoUrl = `mailto:support@investingsparkle.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Get instant responses to your queries",
      contact: "+92 318 1300262",
      action: "Chat Now",
      link: "https://wa.me/923181300262?text=Hi! I'm interested in your investment services and would like to get more information."
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Speak directly with our investment advisors",
      contact: "+92 318 1300262",
      action: "Call Now",
      link: "tel:+923181300262"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us detailed queries or documents",
      contact: "support@investingsparkle.com",
      action: "Send Email",
      link: "mailto:support@investingsparkle.com"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const faqs = [
    {
      question: "How do I start investing with Investing Sparkle?",
      answer: "Simply contact us via WhatsApp or phone. We'll schedule a consultation to understand your goals and help you open a PSX account."
    },
    {
      question: "What is the minimum investment amount?",
      answer: "Our investment packages start from PKR 50,000, but we can work with different budgets based on your financial situation."
    },
    {
      question: "Are your services Shariah compliant?",
      answer: "Yes, we offer Shariah-compliant investment options and ensure all recommendations meet Islamic finance principles."
    },
    {
      question: "How often do you provide portfolio updates?",
      answer: "We provide monthly performance reports for all clients, with weekly updates for premium advisory service subscribers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to start your investment journey? Our expert team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Preferred Contact Method</h2>
            <p className="text-muted-foreground">
              We're available through multiple channels to provide you with the best support possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <InteractiveCard key={index}>
                <div className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="font-medium text-foreground mb-4">{method.contact}</p>
                  <Button className="w-full" asChild>
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </div>
              </InteractiveCard>
            ))}
          </div>

          {/* Quick Contact Form */}
          <div className="max-w-2xl mx-auto">
            <InteractiveCard>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    >
                      <option value="">Select a service...</option>
                      <option value="PSX Account Opening">PSX Account Opening</option>
                      <option value="Investment Packages">Investment Packages</option>
                      <option value="Portfolio Review">Portfolio Review</option>
                      <option value="Stock Research & Picks">Stock Research & Picks</option>
                      <option value="Educational Sessions">Educational Sessions</option>
                      <option value="Premium Advisory">Premium Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Tell us about your investment goals and how we can help you..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Office</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Suite 401, Business Bay Tower<br />
                      Main Shahrah-e-Faisal<br />
                      Karachi, Sindh 75400<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Commitment</h3>
                    <p className="text-muted-foreground">
                      We are committed to providing transparent, ethical, and professional investment advisory services to all our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <InteractiveCard key={index}>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </InteractiveCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - start building your wealth through smart investing today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/923181300262?text=Hi! I'm ready to start my investment journey. Can you help me get started?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Start on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
