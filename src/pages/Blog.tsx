
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TrendingUp, Search } from "lucide-react";
import { blogPosts, categories, getFeaturedPost } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const featuredPost = getFeaturedPost();
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch && !post.featured;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Investment Blog - Pakistan Stock Exchange Insights | Investing Sparkle</title>
        <meta name="description" content="Expert insights on Pakistan Stock Exchange, investment strategies, market analysis, and Shariah-compliant investing. Stay informed with our latest research and educational content." />
        <meta name="keywords" content="Pakistan Stock Exchange, PSX, investment blog, market analysis, Shariah compliant investing, blue chip stocks" />
        <meta property="og:title" content="Investment Blog - Pakistan Stock Exchange Insights | Investing Sparkle" />
        <meta property="og:description" content="Expert insights on Pakistan Stock Exchange, investment strategies, market analysis, and Shariah-compliant investing." />
        <meta property="og:type" content="website" />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Investment Insights & Market Analysis
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay informed with our latest research, market analysis, and educational content about Pakistan's stock market and investment strategies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BlogCard post={featuredPost} featured={true} />
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
                      <div 
                        key={index} 
                        className={`flex items-center justify-between p-3 hover:bg-accent rounded-md cursor-pointer transition-colors ${
                          selectedCategory === category.name ? "bg-accent" : ""
                        }`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span className="text-sm font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get our latest market insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="text-sm"
                    />
                    <Button size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>

              {filteredPosts.length === 0 ? (
                <Card className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or browse different categories.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                  >
                    Clear Filters
                  </Button>
                </Card>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Load More */}
                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                      Load More Articles
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Never Miss Market Opportunities</h2>
            <p className="text-xl opacity-90 mb-8">
              Get our expert market analysis, investment tips, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground bg-background border-0 focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 5,000+ investors already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
