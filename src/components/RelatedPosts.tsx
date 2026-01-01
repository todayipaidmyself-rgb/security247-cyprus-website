import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

interface RelatedPostsProps {
  slug: string;
}

export default function RelatedPosts({ slug }: RelatedPostsProps) {
  const { data: relatedPosts, isLoading } = trpc.blog.getRelated.useQuery({ slug, limit: 3 });

  if (isLoading) {
    return (
      <div className="py-12 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-50 rounded-lg overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-slate-200"></div>
                  <div className="p-4">
                    <div className="h-6 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="py-12 bg-white border-t border-slate-200">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/news/${post.slug}`}>
                <article className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800">
                        <svg
                          className="w-12 h-12 text-white opacity-50"
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
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <time className="text-xs text-slate-500">
                        {post.date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
