import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PortfolioDetail {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  image_url: string | null;
  client_name: string;
  project_url: string;
  badge: string;
  year: string;
  video_url: string;
  gallery: string[];
  kpis: { label: string; value: string }[];
  category_info: { id: number; name: string; slug: string } | null;
}

async function getPortfolioBySlug(slug: string): Promise<PortfolioDetail | null> {
  try {
    const res = await fetch(`https://api.dezhaweb.ir/wp-json/wp/v2/portfolios?slug=${encodeURIComponent(slug)}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('خطا در دریافت جزئیات نمونه کار:', error);
    return null;
  }
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between font-vazir selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* هاله‌های نوری پس‌زمینه (Ambient Glow) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-96 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Header />

      <main className="pt-28 md:pt-36 pb-24 px-4 md:px-6 max-w-7xl mx-auto w-full flex-1 z-10">
        
        {/* ۱. هیرو سکشن معرفی پروژه */}
        <div className="relative mb-14 text-center max-w-4xl mx-auto">
          
          {/* بردکرامب مدرن */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 backdrop-blur-md text-xs text-slate-300 mb-6 shadow-sm">
            <Link href="/" className="hover:text-blue-400 transition-colors">صفحه اصلی</Link>
            <span className="text-slate-600">/</span>
            <Link href="/#portfolio" className="hover:text-blue-400 transition-colors">نمونه‌کارها</Link>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-bold truncate max-w-[180px]">{project.title.rendered}</span>
          </div>

          {/* تگ‌های مشخصات بالا */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
            {project.badge && (
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-extrabold px-3.5 py-1 rounded-full backdrop-blur-sm">
                ✦ {project.badge}
              </span>
            )}
            {project.category_info && (
              <span className="bg-slate-800/90 text-slate-300 border border-slate-700/50 text-xs font-semibold px-3 py-1 rounded-full">
                {project.category_info.name}
              </span>
            )}
            {project.year && (
              <span className="bg-slate-800/50 text-slate-400 border border-slate-800 text-xs px-3 py-1 rounded-full font-light">
                سال اجرا: {project.year}
              </span>
            )}
          </div>

          {/* عنوان اصلی پروژه */}
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[1.15] tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: project.title.rendered }}
          />

          {/* نام کارفرما و دکمه‌های اکشن سریع */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
            {project.client_name && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>سفارش‌دهنده:</span>
                <span className="text-white font-extrabold">{project.client_name}</span>
              </div>
            )}

            {project.project_url && project.project_url !== '#' && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>مشاهده وب‌سایت زنده</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
          </div>
        </div>

        {/* ۲. فریم ماک‌آپ دسکتاپ برای تصویر شاخص اصلی */}
        {project.image_url && (
          <div className="relative mb-16 group">
            {/* کادر مرورگر شبیه‌سازی‌شده */}
            <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/90 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              
              {/* هدر مرورگر */}
              <div className="h-10 bg-slate-900/90 border-b border-slate-800 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="w-64 max-w-[50%] h-6 bg-slate-800/80 rounded-md border border-slate-700/50 flex items-center justify-center text-[10px] text-slate-400 font-mono truncate px-2" dir="ltr">
                  {project.project_url && project.project_url !== '#' ? project.project_url : 'https://dezhaweb.ir'}
                </div>
                <div className="w-6"></div>
              </div>

              {/* تصویر اصلی */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                <img 
                  src={project.image_url} 
                  alt={project.title.rendered} 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        )}

        {/* ۳. کارت‌های شاخص‌های کلیدی (KPIs) به سبک نئومورفیک/گلس */}
        {project.kpis && project.kpis.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {project.kpis.map((kpi, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2 tracking-tight" dir="ltr">
                  {kpi.value}
                </div>
                <div className="text-xs font-bold text-slate-300 group-hover:text-blue-300 transition-colors">
                  {kpi.label}
                </div>
                <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            ))}
          </div>
        )}

        {/* ۴. بدنه اصلی و سایدبار */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 items-start">
          
          {/* ستون متن و داستان کیس‌استادی */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-slate-900/60 rounded-3xl p-7 md:p-10 border border-slate-800/80 backdrop-blur-xl shadow-xl">
              <h2 className="text-xl md:text-2xl font-black text-white pb-5 mb-8 border-b border-slate-800 flex items-center justify-between">
                <span>روایت و استراتژی پروژه</span>
                <span className="text-xs font-medium text-slate-500">Case Study</span>
              </h2>

              {project.content?.rendered ? (
                <div 
                  className="prose prose-invert prose-blue max-w-none text-slate-300 text-sm md:text-base leading-relaxed font-light [&>p]:mb-6 [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:space-y-2 [&>ul]:mr-4 [&>li]:text-slate-300"
                  dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                />
              ) : (
                <p className="text-sm text-slate-500">داستان و جزئیات تکمیلی این پروژه در حال به‌روزرسانی است.</p>
              )}
            </div>

            {/* پخش‌کننده ویدیویی دمو */}
            {project.video_url && (
              <div className="bg-slate-900/60 rounded-3xl p-7 md:p-8 border border-slate-800/80 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    تیزر و نمایش زنده عملکرد
                  </h3>
                  <span className="text-xs text-slate-500">Video Demo</span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-black/90 border border-slate-800 aspect-video shadow-2xl flex items-center justify-center">
                  <video 
                    src={project.video_url} 
                    controls 
                    className="w-full h-full object-contain"
                  >
                    مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                  </video>
                </div>
              </div>
            )}
          </div>

          {/* سایدبار چسبان (Sticky Sidebar) */}
          <div className="lg:sticky lg:top-28 space-y-6">
            
            {/* کارت شناسنامه پروژه */}
            <div className="bg-slate-900/80 rounded-3xl p-6 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-sm font-black text-white pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>شناسنامه فنی پروژه</span>
                <span className="text-blue-400">✦</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">کارفرما:</span>
                  <span className="font-bold text-white">{project.client_name || 'اختصاصی'}</span>
                </div>

                {project.year && (
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">سال انتشار:</span>
                    <span className="font-bold text-white">{project.year}</span>
                  </div>
                )}

                {project.badge && (
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">نوع پروژه:</span>
                    <span className="font-bold text-blue-400">{project.badge}</span>
                  </div>
                )}

                {project.category_info && (
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <span className="text-slate-400">دپارتمان:</span>
                    <span className="font-bold text-slate-300">{project.category_info.name}</span>
                  </div>
                )}
              </div>

              {project.project_url && project.project_url !== '#' && (
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold text-center transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
                >
                  مشاهده سایت آنلاین
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </div>

            {/* کارت بنر تبدیل (CTA) */}
            <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-blue-900/60 via-slate-900 to-indigo-950/70 border border-blue-500/30 shadow-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 block mb-2">
                همکاری با دژاوب
              </span>
              <h4 className="text-lg font-black text-white mb-2 leading-snug">
                می‌خواهید جهش مشابهی در فروش تجربه کنید؟
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                تیم مهندسی و بازاریابی دژاوب آماده است دقیق‌ترین مسیر رشد دیجیتال را برای شما طراحی کند.
              </p>
              <Link
                href="/#pricing"
                className="w-full block py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold text-center transition-all shadow-md shadow-white/10"
              >
                رزرو وقت مشاوره رایگان
              </Link>
            </div>

          </div>

        </div>

        {/* ۵. گالری تصاویر مدرن پروژه */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="bg-slate-900/60 rounded-3xl p-7 md:p-10 border border-slate-800/80 backdrop-blur-xl mb-16">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-black text-white">
                  زاویه‌های بصری و مستندات پروژه
                </h3>
                <p className="text-xs text-slate-400 mt-1">گزیده‌ای از صفحات، داشبوردها و جزئیات گرافیکی پیاده‌سازی‌شده</p>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {project.gallery.length} تصویر
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 group aspect-[4/3] relative shadow-lg"
                >
                  <img 
                    src={imgUrl} 
                    alt={`گالری ${project.title.rendered} - عکس ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[11px] text-slate-200 font-medium">نمای {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ۶. بنر انتهای صفحه برای بازگشت و شروع پروژه */}
        <div className="text-center pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#portfolio"
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            بازگشت به همه نمونه‌کارها
          </Link>

          <Link
            href="/#pricing"
            className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            شروع پروژه شما با دژاوب ←
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}