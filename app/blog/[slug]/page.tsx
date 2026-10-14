import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// تابع واکشی تکی پست بر اساس اسلاگ از وردپرس
async function getPost(slug: string) {
  try {
    // دیکود کردن اسلاگ فارسی برای تطابق دقیق با وردپرس
    const decodedSlug = decodeURIComponent(slug);
    const res = await fetch(`https://api.dezhaweb.ir/wp-json/wp/v2/posts?slug=${encodeURIComponent(decodedSlug)}&_embed`, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) return null;
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('خطا در دریافت متن کامل مقاله:', error);
    return null;
  }
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featured_image_url;
  const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'دسته‌بندی نشده';
  const postDate = new Date(post.date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-vazir">
      {/* هدر سایت */}
      <Header />

      <main className="pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto w-full flex-1">
        {/* نوار ناوبری بالا / بازگشت */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">صفحه اصلی</Link>
          <span>/</span>
          <span className="text-slate-400">وبلاگ</span>
          <span>/</span>
          <span className="text-blue-600 font-medium truncate max-w-[200px] md:max-w-md">
            {post.title?.rendered}
          </span>
        </div>

        {/* برچسب و متادیتای مقاله */}
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-500 mb-4">
          <span className="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full border border-blue-100">
            {categoryName}
          </span>
          <span>{postDate}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>زمان مطالعه: ۵ دقیقه</span>
        </div>

        {/* عنوان مقاله */}
        <h1 
          className="text-2xl md:text-4xl font-black text-slate-900 leading-tight md:leading-snug mb-8"
          dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
        />

        {/* تصویر شاخص */}
        {imageUrl && (
          <div className="relative w-full h-[240px] sm:h-[350px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm mb-10 bg-slate-200">
            <img 
              src={imageUrl} 
              alt={post.title?.rendered || 'تصویر مقاله'} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* محتوای کامل مقاله از ادیتور وردپرس */}
        <article className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-slate-700 text-base md:text-lg">
          <div 
            className="prose prose-slate max-w-none 
              [&>p]:mb-6 [&>p]:leading-loose
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mt-8 [&>h2]:mb-4
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-6 [&>h3]:mb-3
              [&>ul]:list-disc [&>ul]:pr-6 [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:pr-6 [&>ol]:mb-6
              [&>figure]:my-8 [&>figure]:rounded-2xl [&>figure]:overflow-hidden
              [&_img]:rounded-2xl [&_img]:w-full [&_img]:h-auto
              [&>blockquote]:border-r-4 [&>blockquote]:border-blue-600 [&>blockquote]:pr-4 [&>blockquote]:italic [&>blockquote]:my-6 [&>blockquote]:text-slate-600"
            dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }}
          />
        </article>

        {/* دکمه بازگشت به صفحه اصلی */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm transition-all shadow-md"
          >
            ← بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}