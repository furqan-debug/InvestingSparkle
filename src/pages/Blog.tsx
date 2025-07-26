import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  BookOpen,
  MessageCircle
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Complete Guide to Starting PSX Investing in 2024",
    excerpt: "Everything you need to know about beginning your investment journey in the Pakistan Stock Exchange, from account opening to your first stock purchase.",
    author: "Muhammad Ahmed",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Beginner Guide",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  };

  const blogPosts = [
    {
      title: "Is Stock Market Investment Halal? A Complete Islamic Perspective",
      excerpt: "Understanding the Islamic principles of stock market investing and how to ensure your investments are Shariah-compliant.",
      author: "Fatima Hassan",
      date: "January 12, 2024",
      readTime: "6 min read",
      category: "Islamic Finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Top 10 PSX Stocks for Long-term Investment in 2024",
      excerpt: "Our research team's analysis of the most promising Pakistani stocks for long-term wealth building this year.",
      author: "Ali Raza",
      date: "January 10, 2024",
      readTime: "10 min read",
      category: "Stock Analysis",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Understanding Risk Management in PSX Trading",
      excerpt: "Learn how to protect your investments and manage risk effectively when trading on the Pakistan Stock Exchange.",
      author: "Muhammad Ahmed",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Risk Management",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How to Read Financial Statements for PSX Stocks",
      excerpt: "A beginner-friendly guide to understanding company financial statements and making informed investment decisions.",
      author: "Fatima Hassan",
      date: "January 5, 2024",
      readTime: "12 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Market Update: PSX Performance in Q4 2023",
      excerpt: "Comprehensive analysis of Pakistan Stock Exchange performance in the last quarter and what to expect in 2024.",
      author: "Ali Raza",
      date: "January 3, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Your First Investment Portfolio: A Step-by-Step Guide",
      excerpt: "Learn how to create a diversified investment portfolio that aligns with your financial goals and risk tolerance.",
      author: "Ayesha Khan",
      date: "December 30, 2023",
      readTime: "9 min read",
      category: "Portfolio Management",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { name: "All Posts", count: 25 },
    { name: "Beginner Guide", count: 8 },
    { name: "Islamic Finance", count: 6 },
    { name: "Stock Analysis", count: 5 },
    { name: "Market Analysis", count: 4 },
    { name: "Risk Management", count: 2 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 via-primary-light/30 to-secondary-light/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-secondary-light text-secondary">
              📚 Investment Education Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Learn, Grow, and <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Invest Wisely</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest market insights, investment strategies, and educational content tailored for Pakistani investors.
            </p>
            <div className="flex max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 border-primary/20 focus:border-primary"
                />
              </div>
              <Button className="ml-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <span className="text-sm text-foreground">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Get weekly market updates and investment tips delivered to your inbox.
                </p>
                <Input placeholder="Your email address" />
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            <Card className="shadow-medium border-0 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 space-y-4">
                  <Badge variant="secondary" className="bg-primary-light text-primary">
                    Featured
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Want Personalized Investment Advice?
            </h2>
            <p className="text-xl text-white/90">
              While our blog provides valuable insights, nothing beats personalized guidance. 
              Book a consultation with our experts today.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;