import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Post {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_image_url?: string;
  categories: number[];
  _embedded?: any;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// واکشی دسته‌بندی‌ها از وردپرس
async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch('https://api.dezhaweb.ir/wp-json/wp/v2/categories?per_page=50&hide_empty=false', {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) return [];
    const data: Category[] = await res.json();
    return data.filter(c => c.slug !== 'uncategorized' && c.name !== 'دسته‌بندی نشده');
  } catch (error) {
    console.error('خطا در دریافت دسته‌بندی‌ها:', error);
    return [];
  }
}

// واکشی مقالات از وردپرس با اعمال فیلتر دسته و جستجو
async function getBlogPosts(categorySlug?: string, search?: string): Promise<Post[]> {
  try {
    let url = 'https://api.dezhaweb.ir/wp-json/wp/v2/posts?per_page=30&_embed';

    // اگر دسته انتخاب شده بود، ابتدا آیدی آن را پیدا می‌کنیم
    if (categorySlug) {
      const catRes = await fetch(`https://api.dezhaweb.ir/wp-json/wp/v2/categories?slug=${encodeURIComponent(categorySlug)}`, {
        cache: 'no-store'
      });
      if (catRes.ok) {
        const catData = await catRes.json();
        if (catData.length > 0) {
          url += `&categories=${catData[0].id}`;
        }
      }
    }

    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }

    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('خطا در دریافت مقالات وبلاگ:', error);
    return [];
  }
}

export default async function BlogArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;
  const [posts, categories] = await Promise.all([
    getBlogPosts(category, search),
    getCategories()
  ]);

  const activeCategory = categories.find(c => c.slug === category);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-vazir">
      {/* هدر سایت */}
      <Header />

      <main className="pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto w-full flex-1">
        {/* نوار ناوبری و عنوان صفحه */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-blue-600 transition-colors">صفحه اصلی</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">مجله رشد دژاوب</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            دانش، استراتژی و <span className="text-blue-600">رشد دیجیتال</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed">
            مجموعه کامل مقالات، راهنماهای کاربردی و تجربیات بازاریابی آنلاین و توسعه کسب‌وکار
          </p>
        </div>

        {/* فیلترها و کادر جستجو */}
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-100 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* تب‌های افقی دسته‌بندی‌ها */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                !category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              همه دسته‌ها
            </Link>
            {categories.map((cat) => {
              const isSelected = category === cat.slug;
              return (
                <Link
                  key={cat.id}
                  href={`/blog?category=${cat.slug}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-500 text-white' : 'bg-slate-200/80 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* کادر فرم سرچ */}
          <form action="/blog" method="GET" className="w-full md:w-72 shrink-0">
            {category && <input type="hidden" name="category" value={category} />}
            <div className="relative">
              <input
                type="text"
                name="search"
                defaultValue={search || ''}
                placeholder="جستجو در مقالات..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all pl-9"
              />
              <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </div>
          </form>
        </div>

        {/* عنوان دسته‌بندی فیلتر شده در صورت وجود */}
        {activeCategory && (
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">نمایش نتایج برای دسته:</span>
              <span className="text-sm font-bold text-slate-800 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                {activeCategory.name}
              </span>
            </div>
            <Link href="/blog" className="text-xs text-slate-400 hover:text-red-500 transition-colors">
              حذف فیلتر ✕
            </Link>
          </div>
        )}

        {/* گرید کارت‌های مقالات */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = post.featured_image_url;
              const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'عمومی';
              const postDate = new Date(post.date).toLocaleDateString('fa-IR', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              });

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 group flex flex-col"
                >
                  {/* تصویر کارت */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden flex items-center justify-center">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        دژاوب
                      </div>
                    )}
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {categoryName}
                    </span>
                  </div>

                  {/* بدنه کارت */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                      <span>{postDate}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>۵ دقیقه مطالعه</span>
                    </div>

                    <h2 className="text-base font-bold text-slate-800 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </h2>

                    <div
                      className="text-slate-500 text-xs font-light leading-relaxed mb-6 line-clamp-3 flex-1"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto pt-4 border-t border-slate-50"
                    >
                      مطالعه کامل مقاله
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-100 p-16 text-center max-w-md mx-auto">
            <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
              ✍️
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">مقاله‌ای یافت نشد</h3>
            <p className="text-xs text-slate-400 mb-6">در این دسته‌بندی هنوز مطلبی منتشر نشده یا نتیجه‌ای با عبارت جستجوی شما مطابقت ندارد.</p>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
            >
              مشاهده همه مقالات
            </Link>
          </div>
        )}
      </main>

      {/* فوتر سایت */}
      <Footer />
    </div>
  );
}