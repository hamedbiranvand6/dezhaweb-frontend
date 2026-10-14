'use client';

import React, { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="w-full pt-12 pb-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* هاله‌های گرافیکی پس‌زمینه */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر بخش پکیج‌ها با انیمیشن Fade-up */}
        <div className="text-center mb-12 flex flex-col items-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            تعرفه‌های طراحی و <span className="text-blue-600">توسعه سایت</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl font-light leading-relaxed">
            پکیج‌های ما طوری طراحی شده‌اند که با کمترین ریسک، بالاترین بازگشت سرمایه را برای کسب‌وکار شما به همراه داشته باشند.
          </p>
          
          {/* دکمه سوییچ پرداخت */}
          <div className="mt-8 flex items-center gap-2 md:gap-4 bg-slate-50 p-1.5 rounded-full border border-slate-200 shadow-sm">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${!isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              پرداخت اقساطی (۳ مرحله)
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 md:gap-2 ${isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              پرداخت نقدی
              <span className={`text-[9px] md:text-[10px] px-2 py-0.5 rounded-full ${isAnnual ? 'bg-white/20 text-white' : 'bg-green-100 text-green-600'}`}>۱۰٪ تخفیف</span>
            </button>
          </div>
        </div>

        {/* شبکه‌ی کارت‌های قیمت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12 relative z-10">
          
          {/* پکیج ۱: پایه - بدون تاخیر */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="0"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">حضور دیجیتال</h3>
            <p className="text-sm text-slate-500 mb-6 font-light">مناسب کسب‌وکارهای نوپا و سنتی</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-slate-900">{isAnnual ? '۱۶.۲' : '۱۸'}</span>
              <span className="text-slate-500 text-sm font-medium mr-1">میلیون تومان</span>
            </div>
            <button className="w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors mb-8">
              انتخاب پکیج پایه
            </button>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                طراحی سایت فروشگاهی (ووکامرس)
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                قالب استاندارد و ریسپانسیو موبایل
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                اتصال به درگاه پرداخت بانکی
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                دریافت اینماد و نمادهای اعتماد
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400 mt-0.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                اتصال به ترب، دیجی‌کالا و باسلام
              </li>
            </ul>
          </div>

          {/* پکیج ۲: طلایی - با ۱۵۰ میلی‌ثانیه تاخیر */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="150"
            className="bg-slate-900 rounded-3xl p-8 border border-blue-600 shadow-2xl shadow-blue-900/20 transform md:-translate-y-4 relative overflow-hidden"
          >
            <div className="absolute top-6 left-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-r-lg uppercase tracking-widest">پیشنهاد دژاوب</div>
            
            <h3 className="text-xl font-bold text-white mb-2">ماشین فروش ۳۶۰</h3>
            <p className="text-sm text-slate-400 mb-6 font-light">پیشنهاد ویژه برای تحول فروش آنلاین</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">{isAnnual ? '۳۴.۲' : '۳۸'}</span>
              <span className="text-slate-400 text-sm font-medium mr-1">میلیون تومان</span>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 mb-8 hover:-translate-y-0.5">
              شروع ساخت ماشین فروش
            </button>
            <ul className="space-y-4 text-sm text-slate-200 font-medium">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                طراحی UI اختصاصی و سایت فروشگاهی
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="text-white font-bold border-b border-blue-500/50 pb-0.5">اتصال اتوماتیک به ترب، دیجی‌کالا و اسنپ</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                اتصال به پنل پیامکی هوشمند سفارشات
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                سئوی پایه و بهینه‌سازی ۵۰ محصول
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                آموزش کاربری کامل و پشتیبانی فنی
              </li>
            </ul>
          </div>

          {/* پکیج ۳: VIP - با ۳۰۰ میلی‌ثانیه تاخیر */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/40 to-transparent -z-10 rounded-bl-full"></div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
              امپراتوری آنلاین <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded uppercase font-bold tracking-wider">VIP</span>
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-light">مناسب برندها و سیستم‌های سفارشی</p>
            <div className="mb-8">
              <span className="text-slate-500 text-sm font-medium ml-1">شروع از</span>
              <span className="text-4xl font-black text-slate-900">{isAnnual ? '۱۰۸' : '۱۲۰'}</span>
              <span className="text-slate-500 text-sm font-medium mr-1">میلیون</span>
            </div>
            <button className="w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-amber-500 hover:text-amber-600 transition-colors mb-8">
              رزرو جلسه VIP
            </button>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                کدنویسی اختصاصی با Next.js & Tailwind
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                اتصال به سیستم‌های حسابداری و انبارداری
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                طراحی کامل هویت بصری و UI اختصاصی
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                توسعه اپلیکیشن موبایل PWA
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-amber-500 mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ۳ ماه سئوی تضمینی و پشتیبانی ۲۴ ساعته
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}