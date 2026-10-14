'use client';

import React from 'react';

export default function AdminPackages() {
  return (
    <section id="admin-packages" className="w-full py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-100/20 blur-[100px]"></div>
        <div className="absolute bottom-[20%] -right-[5%] w-[35%] h-[35%] rounded-full bg-indigo-100/20 blur-[90px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* هدر با انیمیشن */}
        <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            مدیریت شبکه‌های اجتماعی و <span className="text-indigo-600">تولید محتوا</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl font-light leading-relaxed">
            تیم محتوای دژاوب، صدای برند شما در شبکه‌های اجتماعی خواهد بود. ما دیده شدن شما را تضمین می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
          {/* کارت پایه */}
          <div data-aos="fade-up" data-aos-delay="0" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <div className="flex-1">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">ادمین پایه</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">مناسب برای زنده نگه‌داشتن پیج</p>
              <div className="mb-6 border-b border-slate-100 pb-6">
                <span className="text-4xl font-black text-slate-900">۶.۵</span>
                <span className="text-slate-500 text-sm font-medium mx-1">میلیون</span>
                <span className="text-slate-400 text-xs font-light">/ ماهانه</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 font-medium mb-8">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>۱۵ پست تصویری در ماه</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>۲۰ استوری استاندارد در ماه</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>پاسخگویی دایرکت (ساعات کاری)</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>پشتیبانی یک پیام‌رسان داخلی</li>
              </ul>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold transition-colors mt-auto">سفارش پکیج پایه</button>
          </div>

          {/* کارت رشد (پرفروش‌ترین) */}
          <div data-aos="fade-up" data-aos-delay="150" className="bg-white rounded-3xl p-8 border-2 border-indigo-500 shadow-xl shadow-indigo-100 transform md:-translate-y-2 relative flex flex-col h-full overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">پرطرفدارترین</div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">رشد سریع (Growth)</h3>
              <p className="text-sm text-slate-500 mb-6 font-light">تمرکز روی جذب فالوور و افزایش فروش</p>
              <div className="mb-6 border-b border-indigo-100 pb-6">
                <span className="text-4xl font-black text-indigo-600">۱۴.۸</span>
                <span className="text-slate-500 text-sm font-medium mx-1">میلیون</span>
                <span className="text-slate-400 text-xs font-light">/ ماهانه</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-700 font-bold mb-8">
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>۱۰ ریلز اختصاصی (سناریو + ادیت)</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>۲۰ پست گرافیکی + کاور اختصاصی</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>استوری‌های تعاملی روزانه</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>پاسخگویی دایرکت (تا ۱۲ شب)</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>مدیریت همزمان تلگرام و روبیکا</li>
              </ul>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-600/30 mt-auto hover:-translate-y-0.5">شروع پروسه رشد</button>
          </div>

          {/* کارت VIP */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent -z-10 rounded-bl-full"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">تیم اختصاصی (VIP)</h3>
              <p className="text-sm text-slate-400 mb-6 font-light">یک آژانس کامل در خدمت برند شما</p>
              <div className="mb-6 border-b border-slate-800 pb-6">
                <span className="text-slate-400 text-sm font-medium ml-1">شروع از</span>
                <span className="text-4xl font-black text-white">۳۵</span>
                <span className="text-slate-400 text-sm font-medium mx-1">میلیون</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300 font-medium mb-8">
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>حضور فیلم‌بردار در محل (۲ روز در ماه)</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>۱۵ ریلز سینمایی + سناریونویسی برند</li>
                <li className="flex items-start gap-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>تولید محتوای بلاگ سئوشده سایت</li>
              </ul>
            </div>
            <button className="w-full py-3.5 rounded-xl border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-bold transition-colors mt-auto">هماهنگی جلسه مشاوره</button>
          </div>
        </div>
      </div>
    </section>
  );
}