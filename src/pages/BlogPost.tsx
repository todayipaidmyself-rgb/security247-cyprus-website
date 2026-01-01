import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";

  const { data: post, isLoading, error } = trpc.blog.getBySlug.useQuery({ slug });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/4 mb-8"></div>
              <div className="h-96 bg-slate-200 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
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
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-slate-700 mb-2">Post Not Found</h1>
          <p className="text-slate-500 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/news">
            <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
              Back to News
            </button>
          </Link>
        </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | 247 Security Cyprus</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Header />

      <article className="flex-1 bg-slate-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-red-700 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-red-700 transition-colors">
                News
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-600">
                <time>
                  {post.date.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="bg-white pb-12">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8 first:prose-h1:mt-0 prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2 prose-ul:mb-4 prose-ul:text-slate-700 prose-ol:list-decimal prose-ol:list-inside prose-ol:space-y-2 prose-ol:mb-4 prose-ol:text-slate-700 prose-li:ml-4 prose-strong:font-bold prose-strong:text-slate-900 prose-a:text-red-700 prose-a:hover:text-red-800 prose-a:underline">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-lg p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Need Professional Security Services?</h2>
                <p className="text-xl text-red-100 mb-6">
                  Contact Twenty4Seven Security for expert advice and installation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={getWhatsAppLink("blog-post")} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                      Get a Quote
                    </button>
                  </a>
                  <a
                    href="tel:26323204"
                    className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors border-2 border-white"
                  >
                    Call 26 323204
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts slug={slug} />

        {/* Back to News */}
        <div className="pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/news">
                <button className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to All News
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
