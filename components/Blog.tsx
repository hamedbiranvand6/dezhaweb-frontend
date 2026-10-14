import React from 'react';
import Link from 'next/link';

// دریافت مقالات از وردپرس
async function getPosts() {
  try {
    const res = await fetch('https://api.dezhaweb.ir/wp-json/wp/v2/posts?_embed', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      console.error("خطا در پاسخ سرور وردپرس:", res.status);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("خطای شبکه وردپرس:", error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section id="blog" className="w-full py-16 bg-white border-t border-slate-100 font-vazir">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر وبلاگ */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
              مجله رشد <span className="text-blue-600">دژاوب</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-lg font-light">
              جدیدترین استراتژی‌ها و تکنیک‌های روز دنیا برای توسعه برند شما.
            </p>
          </div>
          
          {/* لینک اتصال به صفحه آرشیو مقالات */}
          <Link 
            href="/blog"
            className="shrink-0 flex items-center gap-1.5 text-slate-500 text-sm font-bold hover:text-blue-600 transition-colors group"
          >
            همه مقالات
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        </div>

        {/* گرید مقالات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post: any) => {
            const imageUrl = post.featured_image_url;
            const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'عمومی';
            const postDate = new Date(post.date).toLocaleDateString('fa-IR', { month: 'long', day: 'numeric' });

            return (
              <article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 group flex flex-col"
              >
                {/* بخش تصویر شاخص */}
                <div className="relative w-full h-44 bg-slate-100 overflow-hidden flex items-center justify-center">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={post.title?.rendered || 'تصویر مقاله'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                      بدون تصویر
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] font-bold px-2 py-1 rounded">
                    {categoryName}
                  </div>
                </div>

                {/* محتوا */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium mb-2.5">
                    <span>{postDate}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                    <span>۵ دقیقه</span>
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }} />
                  </h3>
                  
                  <div 
                    className="text-slate-500 text-xs font-light leading-relaxed mb-4 line-clamp-2 flex-1"
                    dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
                  />
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-slate-400 text-xs font-bold hover:text-blue-600 transition-colors mt-auto">
                    مطالعه مقاله
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}