'use client';

import React from 'react';

export default function ConsultingPackages() {
  return (
    <section id="consulting-packages" className="w-full py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[15%] -right-[10%] w-[45%] h-[45%] rounded-full bg-amber-50/60 blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-rose-50/50 blur-[90px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر با انیمیشن Fade-up */}
        <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            مشاوره فروش و <span className="text-amber-600">توسعه برند</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl font-light leading-relaxed">
            گاهی مشکل از سایت یا اینستاگرام نیست؛ مشکل از استراتژی است. ما در دژاوب، هویت برند شما را بازسازی کرده و مسیرهای جدید خلق ثروت را به شما نشان می‌دهیم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">
          
          {/* پکیج ۱ - بدون تاخیر */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="0"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-8"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">کالبدشکافی و عارضه‌یابی</h3>
              <p className="text-sm text-slate-500 mb-4 font-light">جلسه متمرکز برای کشف موانع فروش</p>
              <div className="mb-6">
                <span className="text-3xl font-black text-slate-900">۳.۵</span>
                <span className="text-slate-500 text-sm font-medium mx-1">میلیون تومان</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 font-medium mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✔</span> آنالیز کامل رقبا و جایگاه فعلی شما
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✔</span> بررسی قیف فروش و نرخ ریزش مشتری
                </li>
              </ul>
              <button className="mt-auto w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold transition-colors">
                رزرو وقت مشاوره
              </button>
            </div>
          </div>

          {/* پکیج ۲ - تاخیر ۱۵۰ */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="150"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-8"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">بازسازی هویت برند</h3>
              <p className="text-sm text-slate-500 mb-4 font-light">خلق شخصیتی لوکس و متمایز</p>
              <div className="mb-6">
                <span className="text-slate-500 text-sm font-medium ml-1">شروع از</span>
                <span className="text-3xl font-black text-slate-900">۲۲</span>
                <span className="text-slate-500 text-sm font-medium mx-1">میلیون تومان</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 font-medium mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">✔</span> طراحی لوگوی حرفه‌ای و پالت رنگی
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">✔</span> تدوین لحن برند و شعار تبلیغاتی
                </li>
              </ul>
              <button className="mt-auto w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold transition-colors">
                درخواست بریف برندینگ
              </button>
            </div>
          </div>

          {/* پکیج ۳ - تاخیر ۳۰۰ */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 lg:p-12 border border-amber-500/30 shadow-2xl shadow-amber-900/10 relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex-1 z-10 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold tracking-widest mb-4 border border-amber-500/30">
                عقد قرارداد بلندمدت
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">مدیریت توسعه کسب‌وکار (CMO As A Service)</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-6 lg:mb-0">
                صفر تا صد مدیریت تیم فروش، نظارت بر تبلیغات، بودجه‌بندی کمپین‌ها و سیستم‌سازی سازمان شما بر عهده ما خواهد بود.
              </p>
            </div>
            
            <div className="w-full lg:w-1/3 z-10 flex flex-col gap-4">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm text-center">
                <span className="block text-sm text-amber-400 font-medium mb-1">قرارداد ماهیانه +</span>
                <span className="block text-xl font-bold text-white">پورسانت درصدی از افزایش فروش</span>
              </div>
              <button className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-black transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5">
                تنظیم جلسه حضوری مدیران
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}