
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);

  // SEO optimization
  useEffect(() => {
    document.title = `${post.title} | Investing Sparkle Blog`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "image": post.image,
      "publisher": {
        "@type": "Organization",
        "name": "Investing Sparkle",
        "logo": {
          "@type": "ImageObject",
          "url": "/lovable-uploads/b4d68747-cdd5-4e90-99b9-7a2ac554cabd.png"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.title = "Investing Sparkle";
      document.head.removeChild(script);
    };
  }, [post]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="outline" className="mb-8" asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="default">{post.category}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div 
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n\n')
                    .map(paragraph => {
                      if (paragraph.startsWith('#')) {
                        const level = paragraph.match(/^#+/)?.[0].length || 1;
                        const text = paragraph.replace(/^#+\s*/, '');
                        return `<h${level} class="text-${4-level}xl font-bold text-foreground mt-8 mb-4">${text}</h${level}>`;
                      }
                      if (paragraph.startsWith('- ')) {
                        return `<ul class="list-disc ml-6 space-y-2">${paragraph.split('\n').map(item => 
                          item.startsWith('- ') ? `<li class="text-muted-foreground">${item.substring(2)}</li>` : ''
                        ).join('')}</ul>`;
                      }
                      if (paragraph.match(/^\d+\./)) {
                        return `<ol class="list-decimal ml-6 space-y-2">${paragraph.split('\n').map(item => 
                          item.match(/^\d+\./) ? `<li class="text-muted-foreground">${item.replace(/^\d+\.\s*/, '')}</li>` : ''
                        ).join('')}</ol>`;
                      }
                      if (paragraph.includes('**')) {
                        return `<p class="mb-4">${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')}</p>`;
                      }
                      return paragraph.trim() ? `<p class="mb-4 text-muted-foreground">${paragraph}</p>` : '';
                    })
                    .join('')
                }}
              />
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-primary text-primary-foreground mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Get personalized investment advice and start building your wealth with our expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <a href="https://wa.me/923181300262?text=Hi! I'm interested in your investment services after reading your blog post." target="_blank" rel="noopener noreferrer">
                      Get Investment Advice
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link to="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
