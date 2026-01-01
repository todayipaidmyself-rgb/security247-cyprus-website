import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trpc } from "@/lib/trpc";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Category = "Product Updates" | "Safety Tips" | "Installation Guides" | "Company News";

const categories: Category[] = ["Product Updates", "Safety Tips", "Installation Guides", "Company News"];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);

  const { data: posts, isLoading } = trpc.blog.list.useQuery({
    search: searchQuery || undefined,
    category: selectedCategory,
  });

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(undefined);
  };

  const hasActiveFilters = searchQuery || selectedCategory;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Security News & Tips | 247 Security Cyprus</title>
        <meta
          name="description"
          content="Latest security news, tips, and updates from 247 Security Cyprus. Learn about alarm systems, CCTV, home security, and safety advice for Cyprus residents."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/ai-control-room.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security News & Expert Tips
            </h1>
            <p className="text-xl text-slate-300">
              Stay informed with the latest security advice, product updates, and safety tips from Paphos's leading security specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-12 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-700">Filter by category:</span>
              <Button
                variant={selectedCategory === undefined ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(undefined)}
                className={selectedCategory === undefined ? "bg-red-700 hover:bg-red-800" : ""}
              >
                All Articles
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-700 hover:bg-red-800" : ""}
                >
                  {category}
                </Button>
              ))}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-red-700 hover:text-red-800 hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Results Count */}
            {!isLoading && posts && (
              <p className="text-sm text-slate-600">
                {posts.length} {posts.length === 1 ? "article" : "articles"} found
                {hasActiveFilters && " matching your filters"}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="w-full h-64 bg-slate-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4 w-3/4"></div>
                    <div className="h-10 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Featured Image */}
                  <Link href={`/news/${post.slug}`}>
                    <div className="relative h-64 overflow-hidden bg-slate-200 cursor-pointer group">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800">
                          <svg
                            className="w-20 h-20 text-white opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <Link href={`/news/${post.slug}`}>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-red-700 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-slate-600 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <time className="text-sm text-slate-500">
                        {post.date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <Link href={`/news/${post.slug}`}>
                        <button className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors">
                          Read More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-slate-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                {hasActiveFilters ? "No articles found" : "No posts yet"}
              </h3>
              <p className="text-slate-500 mb-4">
                {hasActiveFilters
                  ? "Try adjusting your search or filter criteria."
                  : "Check back soon for security news and tips."}
              </p>
              {hasActiveFilters && (
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  className="border-red-700 text-red-700 hover:bg-red-50"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Security Advice?</h2>
            <p className="text-xl text-red-100 mb-8">
              Our security experts are ready to help you choose the right security solution for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getWhatsAppLink("general")} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  Contact Us
                </button>
              </a>
              <a href="tel:26323204" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors border-2 border-white">
                Call 26 323204
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
