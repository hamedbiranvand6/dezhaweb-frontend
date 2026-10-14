'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LeadModal from './LeadModal';

interface WPCategory {
  id: number;
  count: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
}

interface CategoryNode {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
  children: CategoryNode[];
}

// تابع ساخت ساختار درختی نامحدود از دسته‌بندی‌های وردپرس
function buildHierarchy(categories: WPCategory[], parentId = 0): CategoryNode[] {
  return categories
    .filter(cat => cat.parent === parentId)
    .map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
      description: cat.description,
      children: buildHierarchy(categories, cat.id)
    }));
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesTree, setCategoriesTree] = useState<CategoryNode[]>([]);
  const [activeParentId, setActiveParentId] = useState<number | null>(null);
  const [hoveredSubCatId, setHoveredSubCatId] = useState<number | null>(null);
  const [hoveredThirdCatId, setHoveredThirdCatId] = useState<number | null>(null);
  const [mobileExpandedCats, setMobileExpandedCats] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // استایل هدر هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دریافت دسته‌بندی‌ها از وردپرس
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('https://api.dezhaweb.ir/wp-json/wp/v2/categories?per_page=100&hide_empty=false', {
          cache: 'no-store',
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!res.ok) return;

        const allCats: WPCategory[] = await res.json();
        const filtered = allCats.filter(c => c.slug !== 'uncategorized' && c.name !== 'دسته‌بندی نشده');
        
        const tree = buildHierarchy(filtered, 0);

        if (tree.length > 0) {
          setCategoriesTree(tree);
          setActiveParentId(tree[0].id);
        }
      } catch (err) {
        console.error('خطا در دریافت دسته‌بندی‌ها از وردپرس:', err);
      }
    }

    loadCategories();
  }, []);

  const toggleMobileCat = (id: number) => {
    setMobileExpandedCats(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const currentParent = categoriesTree.find(p => p.id === activeParentId) || categoriesTree[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-vazir ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-sm'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-100/50'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* لوگو دژاوب */}
        <Link href="/" className="flex flex-col group cursor-pointer">
          <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">
            دژاوب<span className="text-blue-600 inline-block group-hover:rotate-45 transition-transform duration-300">.</span>
          </span>
          <span className="text-[8px] md:text-[9px] text-slate-500 tracking-widest uppercase mt-0.5 font-bold">
            آژانس رشد دیجیتال
          </span>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-xs md:text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-2"
          >
            صفحه اصلی
          </Link>

          {/* مگامنو */}
          <div 
            className="relative group py-2"
            onMouseLeave={() => {
              setHoveredSubCatId(null);
              setHoveredThirdCatId(null);
            }}
          >
            <button className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors focus:outline-none">
              <span>خدمات و دسته‌بندی‌ها</span>
              <svg 
                className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 group-hover:rotate-180" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* بدنه مگامنو */}
            <div className="absolute top-full right-1/2 translate-x-1/2 mt-3 w-[840px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-200/70 p-6 opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
              
              <div className="flex gap-6">
                
                {/* ستون سطح اول: دپارتمان‌های اصلی */}
                <div className="w-1/3 flex flex-col gap-1.5 border-l border-slate-100 pl-4">
                  <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 pr-2">
                    دپارتمان‌های تخصصی
                  </div>
                  {categoriesTree.map((parent) => {
                    const isSelected = (currentParent?.id === parent.id);
                    return (
                      <div
                        key={parent.id}
                        onMouseEnter={() => {
                          setActiveParentId(parent.id);
                          setHoveredSubCatId(null);
                          setHoveredThirdCatId(null);
                        }}
                        className={`group/tab relative flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]'
                            : 'hover:bg-slate-100/70 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full transition-transform ${isSelected ? 'bg-white scale-125' : 'bg-slate-300 group-hover/tab:bg-blue-500'}`} />
                          <span className="text-xs font-bold">{parent.name}</span>
                        </div>
                        {parent.children.length > 0 && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${isSelected ? 'bg-blue-500 text-white' : 'bg-slate-200/70 text-slate-500'}`}>
                            {parent.children.length}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ستون سطح دوم و زیرمجموعه‌ها */}
                <div className="w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-black text-slate-800">{currentParent?.name}</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{currentParent?.description || 'تمامی خدمات و زیرمجموعه‌ها'}</p>
                      </div>
                      <Link
                        href={`/blog?category=${currentParent?.slug}`}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                      >
                        مشاهده همه مقالات
                        <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                      </Link>
                    </div>

                    {/* گرید دسته‌های سطح ۲ */}
                    {currentParent && currentParent.children.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3 relative">
                        {currentParent.children.map((subCat) => {
                          const hasThirdLevel = subCat.children && subCat.children.length > 0;
                          const isHovered = hoveredSubCatId === subCat.id;

                          return (
                            <div
                              key={subCat.id}
                              className="relative"
                              onMouseEnter={() => {
                                setHoveredSubCatId(subCat.id);
                                setHoveredThirdCatId(null);
                              }}
                            >
                              <Link
                                href={`/blog?category=${subCat.slug}`}
                                className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group/card ${
                                  isHovered && hasThirdLevel
                                    ? 'bg-blue-50/80 border-blue-300 shadow-md ring-2 ring-blue-500/10'
                                    : 'bg-slate-50/70 border-slate-100 hover:border-slate-200 hover:bg-slate-100/60'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className={`text-xs font-bold transition-colors ${isHovered ? 'text-blue-600' : 'text-slate-800'}`}>
                                    {subCat.name}
                                  </span>
                                  {hasThirdLevel ? (
                                    <span className="flex items-center gap-1 text-[10px] text-blue-600 font-bold bg-blue-100/70 px-1.5 py-0.5 rounded-md">
                                      {subCat.children.length} زیرشاخه
                                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </span>
                                  ) : (
                                    <svg className="w-3 h-3 text-slate-300 group-hover/card:text-blue-500 transition-transform group-hover/card:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-400">
                                  {subCat.count > 0 ? `${subCat.count} نوشته و راهنما` : 'مشاهده جزییات'}
                                </span>
                              </Link>

                              {/* زیرمنوی سطح ۳ */}
                              {hasThirdLevel && isHovered && (
                                <div 
                                  className="absolute right-0 top-full mt-1.5 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                                  onMouseEnter={() => setHoveredSubCatId(subCat.id)}
                                >
                                  <div className="text-[10px] font-bold text-blue-600 px-2 py-1 mb-1.5 border-b border-slate-100 flex items-center justify-between">
                                    <span>زیرمجموعه‌های {subCat.name}</span>
                                    <span>{subCat.children.length} بخش</span>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    {subCat.children.map((third) => {
                                      const hasFourthLevel = third.children && third.children.length > 0;
                                      const isThirdHovered = hoveredThirdCatId === third.id;

                                      return (
                                        <div 
                                          key={third.id} 
                                          className="relative"
                                          onMouseEnter={() => setHoveredThirdCatId(third.id)}
                                        >
                                          <Link
                                            href={`/blog?category=${third.slug}`}
                                            className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between group/third ${
                                              isThirdHovered && hasFourthLevel
                                                ? 'bg-blue-600 text-white shadow-sm'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                          >
                                            <span className="flex items-center gap-1.5">
                                              <span>•</span>
                                              <span>{third.name}</span>
                                            </span>
                                            {hasFourthLevel ? (
                                              <svg className={`w-3.5 h-3.5 -rotate-90 transition-transform ${isThirdHovered ? 'text-white translate-x-[-2px]' : 'text-slate-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            ) : (
                                              <svg className="w-3 h-3 text-slate-300 group-hover/third:text-blue-600 transition-transform group-hover/third:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                            )}
                                          </Link>

                                          {/* زیرمنوی سطح ۴ */}
                                          {hasFourthLevel && isThirdHovered && (
                                            <div 
                                              className="absolute right-full top-0 mr-2 w-56 bg-white rounded-2xl shadow-2xl border border-blue-200 p-2 z-[60] animate-in fade-in slide-in-from-right-2 duration-150"
                                              onMouseEnter={() => setHoveredThirdCatId(third.id)}
                                            >
                                              <div className="text-[10px] font-bold text-slate-400 px-2 py-1 mb-1 border-b border-slate-50 flex items-center justify-between">
                                                <span>بخش‌های {third.name}</span>
                                              </div>
                                              <div className="flex flex-col gap-0.5 max-h-48 overflow-y-auto">
                                                {third.children.map((fourth) => (
                                                  <Link
                                                    key={fourth.id}
                                                    href={`/blog?category=${fourth.slug}`}
                                                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 transition-colors flex items-center justify-between"
                                                  >
                                                    <span>– {fourth.name}</span>
                                                    {fourth.count > 0 && (
                                                      <span className="text-[9px] text-slate-400">({fourth.count})</span>
                                                    )}
                                                  </Link>
                                                ))}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center text-xs text-slate-500">
                        موردی برای نمایش در این دسته وجود ندارد.
                      </div>
                    )}
                  </div>

                  {/* نوار فوتر مگامنو */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium text-[11px] flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      داده‌ها به صورت زنده از وردپرس همگام‌سازی می‌شوند
                    </span>
                    <button 
                      onClick={() => setIsModalOpen(true)} 
                      className="text-blue-600 font-bold hover:underline text-[11px]"
                    >
                      درخواست مشاوره اختصاصی ←
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <Link
            href="/#portfolio"
            className="text-xs md:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
          >
            نمونه کارها
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs md:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
          >
            مشاوره
          </button>

          <Link
            href="/contact"
            className="text-xs md:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
          >
            تماس با ما
          </Link>
        </nav>

        {/* دکمه‌های اکشن دسکتاپ */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:09120000000"
            className="text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span dir="ltr">۰۹۱۲ ۰۰۰ ۰۰۰۰</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            شروع پروژه
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        {/* دکمه منوی موبایل */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="منوی موبایل"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>

      </div>

      {/* منوی کشویی موبایل */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85%] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xl font-black text-slate-800">دژاوب<span className="text-blue-600">.</span></span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  صفحه اصلی
                </Link>

                {/* آکاردئون چند سطحی برای موبایل */}
                <div className="py-1">
                  <div className="text-[11px] font-bold text-slate-400 px-3 mb-2">دسته‌بندی‌های خدمات</div>
                  {categoriesTree.map((parent) => (
                    <div key={parent.id} className="mb-1">
                      <button
                        onClick={() => toggleMobileCat(parent.id)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <span>{parent.name}</span>
                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpandedCats.includes(parent.id) ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </button>
                      
                      {mobileExpandedCats.includes(parent.id) && (
                        <div className="pr-3 pl-1 py-1 flex flex-col gap-1 border-r-2 border-blue-500 mr-2 my-1 bg-slate-50/50 rounded-l-xl">
                          {parent.children.map((subCat) => (
                            <div key={subCat.id}>
                              <div className="flex items-center justify-between py-1">
                                <Link
                                  href={`/blog?category=${subCat.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[11px] font-bold text-slate-700 hover:text-blue-600"
                                >
                                  {subCat.name}
                                </Link>
                                {subCat.children.length > 0 && (
                                  <button
                                    onClick={() => toggleMobileCat(subCat.id)}
                                    className="p-1 text-slate-400 hover:text-blue-600"
                                  >
                                    <svg className={`w-3 h-3 transition-transform ${mobileExpandedCats.includes(subCat.id) ? 'rotate-180 text-blue-600' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                  </button>
                                )}
                              </div>

                              {subCat.children.length > 0 && mobileExpandedCats.includes(subCat.id) && (
                                <div className="pr-3 py-1 flex flex-col gap-1 border-r border-blue-300 mr-1">
                                  {subCat.children.map((third) => (
                                    <div key={third.id}>
                                      <div className="flex items-center justify-between py-0.5">
                                        <Link
                                          href={`/blog?category=${third.slug}`}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="text-[10px] font-medium text-slate-600 hover:text-blue-600"
                                        >
                                          • {third.name}
                                        </Link>
                                        {third.children.length > 0 && (
                                          <button
                                            onClick={() => toggleMobileCat(third.id)}
                                            className="p-0.5 text-slate-400 hover:text-blue-600"
                                          >
                                            <svg className={`w-2.5 h-2.5 transition-transform ${mobileExpandedCats.includes(third.id) ? 'rotate-180 text-blue-600' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                          </button>
                                        )}
                                      </div>

                                      {/* سطح چهارم موبایل */}
                                      {third.children.length > 0 && mobileExpandedCats.includes(third.id) && (
                                        <div className="pr-2 py-0.5 flex flex-col gap-0.5 border-r border-slate-300 mr-1">
                                          {third.children.map((fourth) => (
                                            <Link
                                              key={fourth.id}
                                              href={`/blog?category=${fourth.slug}`}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className="text-[9px] text-slate-400 hover:text-blue-600 py-0.5"
                                            >
                                              – {fourth.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Link
                  href="/#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  نمونه کارها
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="text-right px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  مشاوره
                </button>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  تماس با ما
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:09120000000"
                className="w-full py-2.5 text-center text-xs font-bold text-slate-700 bg-slate-50 rounded-xl flex items-center justify-center gap-2"
              >
                <span dir="ltr">۰۹۱۲ ۰۰۰ ۰۰۰۰</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-blue-600 rounded-xl shadow-md"
              >
                شروع پروژه
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مدال تعاملی ثبت درخواست */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
}