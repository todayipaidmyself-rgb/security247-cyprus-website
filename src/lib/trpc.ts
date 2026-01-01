/**
 * Static data module - replaces tRPC for static site
 * All data is hardcoded and served directly to components
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Product Updates" | "Safety Tips" | "Installation Guides" | "Company News";
  date: Date;
  author: string;
  image?: string;
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "home-security-trends-2024",
    title: "Home Security Trends 2024",
    excerpt: "Discover the latest trends in residential security systems and how they can protect your home.",
    content: "Latest trends in home security include smart home integration, AI-powered surveillance, and mobile app monitoring...",
    category: "Product Updates",
    date: new Date("2024-01-15"),
    author: "247 Security Team",
    image: "/images/blog-1.jpg"
  },
  {
    id: "2",
    slug: "cctv-installation-guide",
    title: "Complete Guide to CCTV Installation",
    excerpt: "Learn the best practices for installing CCTV systems in your property.",
    content: "CCTV installation requires careful planning and professional expertise...",
    category: "Installation Guides",
    date: new Date("2024-01-10"),
    author: "Security Expert",
    image: "/images/blog-2.jpg"
  },
  {
    id: "3",
    slug: "home-security-tips",
    title: "10 Essential Home Security Tips",
    excerpt: "Simple yet effective ways to improve your home security.",
    content: "Home security doesn't have to be complicated. Here are 10 essential tips...",
    category: "Safety Tips",
    date: new Date("2024-01-05"),
    author: "247 Security Team",
    image: "/images/blog-3.jpg"
  }
];

// Static hooks that replace tRPC
export const trpc = {
  blog: {
    list: {
      useQuery: (params?: { search?: string; category?: string }) => {
        let filtered = blogPosts;
        
        if (params?.search) {
          const q = params.search.toLowerCase();
          filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.excerpt.toLowerCase().includes(q)
          );
        }
        
        if (params?.category) {
          filtered = filtered.filter(p => p.category === params.category);
        }
        
        return {
          data: filtered,
          isLoading: false,
          error: null
        };
      }
    },
    getBySlug: {
      useQuery: (params: { slug: string }) => {
        const post = blogPosts.find(p => p.slug === params.slug);
        return {
          data: post,
          isLoading: false,
          error: post ? null : new Error("Post not found")
        };
      }
    },
    getRelated: {
      useQuery: (params: { slug: string; limit?: number }) => {
        const current = blogPosts.find(p => p.slug === params.slug);
        const limit = params.limit || 3;
        
        if (!current) return { data: [], isLoading: false, error: null };
        
        const related = blogPosts
          .filter(p => p.id !== current.id && p.category === current.category)
          .slice(0, limit);
        
        return {
          data: related,
          isLoading: false,
          error: null
        };
      }
    }
  }
};
