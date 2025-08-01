
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, BookOpen, ArrowRight, User } from "lucide-react";
import InteractiveCard from "@/components/InteractiveCard";

const Blog = () => {
  const featuredPost = {
    title: "Understanding the Pakistan Stock Exchange: A Beginner's Guide",
    excerpt: "Learn the fundamentals of PSX, how it works, and why it's a viable investment option for Pakistani investors.",
    category: "Education",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Muhammad Ahmad",
    image: "/placeholder.svg"
  };

  const blogPosts = [
    {
      title: "Top 10 Blue Chip Stocks in Pakistan for 2024",
      excerpt: "Our analysis of the most stable and profitable companies listed on the Pakistan Stock Exchange.",
      category: "Investment Analysis",
      date: "December 12, 2024",
      readTime: "6 min read",
      author: "Sarah Khan"
    },
    {
      title: "Risk Management Strategies for Stock Investors",
      excerpt: "Essential risk management techniques every investor should implement to protect their capital.",
      category: "Risk Management",
      date: "December 10, 2024",
      readTime: "5 min read",
      author: "Ali Hassan"
    },
    {
      title: "Sector Analysis: Banking vs Technology Stocks",
      excerpt: "A comprehensive comparison of Pakistan's banking and technology sectors for investment opportunities.",
      category: "Sector Analysis",
      date: "December 8, 2024",
      readTime: "7 min read",
      author: "Muhammad Ahmad"
    },
    {
      title: "How to Read Financial Statements",
      excerpt: "Master the art of analyzing company financial statements to make informed investment decisions.",
      category: "Education",
      date: "December 5, 2024",
      readTime: "9 min read",
      author: "Sarah Khan"
    },
    {
      title: "Market Update: Q4 2024 Performance Review",
      excerpt: "Detailed analysis of Pakistan Stock Exchange performance in the fourth quarter of 2024.",
      category: "Market Analysis",
      date: "December 3, 2024",
      readTime: "4 min read",
      author: "Ali Hassan"
    },
    {
      title: "Building a Diversified Portfolio in PSX",
      excerpt: "Step-by-step guide to creating a well-balanced investment portfolio using Pakistani stocks.",
      category: "Portfolio Management",
      date: "December 1, 2024",
      readTime: "8 min read",
      author: "Muhammad Ahmad"
    }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Education", count: 8 },
    { name: "Market Analysis", count: 6 },
    { name: "Investment Analysis", count: 5 },
    { name: "Risk Management", count: 3 },
    { name: "Sector Analysis", count: 2 },
    { name: "Portfolio Management", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Investment Insights & Market Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay informed with our latest research, market analysis, and educational content about Pakistan's stock market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <InteractiveCard className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge variant="default" className="mb-4">
                    Featured Article
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <InteractiveCard key={index} className="h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </InteractiveCard>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8">
              Get our latest market insights and investment tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground bg-background border-0 focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
