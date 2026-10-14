'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  client: string;
  url: string;
  badge: string;
  image: string;
  categorySlug: string;
}

interface CategoryOption {
  slug: string;
  name: string;
}

const fallbackProjects: PortfolioItem[] = [
  {
    id: 1,
    title: 'فروشگاه تخصصی پوشاک آوانگارد',
    slug: 'avangard-shop',
    client: 'برند آوانگارد',
    url: '#',
    badge: 'طراحی سایت هدلس و سئو',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'ecommerce',
  },
  {
    id: 2,
    title: 'اتوماسیون منابع انسانی و مدیریت ماموریت‌ها',
    slug: 'hr-automation-system',
    client: 'هلدینگ پارس انرژی',
    url: '#',
    badge: 'سیستماسیون اختصاصی و داشبورد',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'automation',
  },
  {
    id: 3,
    title: 'کمپین ری‌برندینگ و هویت بصری مدرن',
    slug: 'fintech-rebranding',
    client: 'استارتاپ فین‌تک پی‌رو',
    url: '#',
    badge: 'برندشو و تولید محتوا',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    categorySlug: 'branding',
  },
];

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioItem[]>(fallbackProjects);
  const [categories, setCategories] = useState<CategoryOption[]>([
    { slug: 'all', name: 'همه پروژه‌ها' },
  ]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    async function fetchPortfolioData() {
      try {
        const [portRes, catRes] = await Promise.all([
          fetch('https://api.dezhaweb.ir/wp-json/wp/v2/portfolios?per_page=20', { cache: 'no-store' }),
          fetch('https://api.dezhaweb.ir/wp-json/wp/v2/portfolio_categories', { cache: 'no-store' }),
        ]);

        if (catRes.ok) {
          const catsData = await catRes.json();
          if (Array.isArray(catsData) && catsData.length > 0) {
            setCategories([
              { slug: 'all', name: 'همه پروژه‌ها' },
              ...catsData.map((c: any) => ({ slug: c.slug, name: c.name })),
            ]);
          }
        }

        if (portRes.ok) {
          const items = await portRes.json();
          if (Array.isArray(items) && items.length > 0) {
            const mapped: PortfolioItem[] = items.map((item: any) => ({
              id: item.id,
              title: item.title?.rendered || 'پروژه دژاوب',
              slug: item.slug || `project-${item.id}`,
              client: item.client_name || 'کارفرمای اختصاصی',
              url: item.project_url || '#',
              badge: item.badge || 'توسعه اختصاصی',
              image: item.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
              categorySlug: item.category_info?.slug || 'other',
            }));
            setProjects(mapped);
          }
        }
      } catch (err) {
        console.error('خطای واکشی پروژه‌ها از وردپرس:', err);
      }
    }

    fetchPortfolioData();
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === activeFilter);

  return (
    <section id="portfolio" className="w-full py-20 bg-slate-50 border-t border-slate-100 font-vazir">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* هدر بخش نمونه کارها */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-extrabold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              پروژه‌های شاخص اجرا شده
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
              داستان خلق نتایج ملموس در <span className="text-blue-600">دژاوب</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-light mt-2 max-w-xl leading-relaxed">
              نگاهی به گزیده‌ای از راهکارهای نرم‌افزاری، فروشگاهی و کمپین‌های دیجیتال مارکتینگ طراحی شده برای برندهای پیشرو.
            </p>
          </div>

          {/* تب‌های فیلتر دسته‌بندی */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/70 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === cat.slug
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* گرید پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
            >
              {/* لینک تصویر کاور */}
              <Link href={`/portfolio/${project.slug}`} className="relative w-full h-56 sm:h-64 bg-slate-100 overflow-hidden block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-bold text-slate-800 shadow-sm border border-white/40">
                  {project.badge}
                </div>
              </Link>

              {/* بدنه اطلاعات پروژه */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/portfolio/${project.slug}`} dangerouslySetInnerHTML={{ __html: project.title }} />
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                  >
                    مطالعه کیس‌استادی
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  </Link>

                  {project.url && project.url !== '#' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1"
                    >
                      دموی زنده ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}