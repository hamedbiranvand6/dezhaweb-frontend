import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 relative mt-24">
      
      {/* باکس دعوت به اقدام (Pre-footer CTA) - شناور روی مرز فوتر */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-[90%] max-w-5xl bg-gradient-to-l from-blue-600 to-blue-500 rounded-2xl p-8 shadow-xl shadow-blue-600/20 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        <div>
          <h3 className="text-2xl font-black text-white mb-2">آماده تحول دیجیتال کسب‌وکارتان هستید؟</h3>
          <p className="text-blue-100 text-sm font-light">همین حالا با ما تماس بگیرید تا مسیر رشد شما را طراحی کنیم.</p>
        </div>
        <button className="bg-white text-blue-600 hover:bg-slate-50 font-bold px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap">
          درخواست مشاوره رایگان
        </button>
      </div>

      {/* محتوای اصلی فوتر */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ستون اول: معرفی برند */}
          <div className="flex flex-col">
            <a href="#" className="text-3xl font-black text-slate-800 tracking-tighter mb-4">
              دژاوب<span className="text-blue-600">.</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              آژانس خلاق دژاوب، همراه شما در مسیر مهندسی رشد دیجیتال. ما با ترکیب هنر طراحی وب و علم بازاریابی داده‌محور، برند شما را به بالاترین سطح فروش آنلاین می‌رسانیم.
            </p>
            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.68-3 .99-1.12-1.27-2.7-1.2-3.18-1.2-2.3 0-4.16 1.86-4.16 4.16 0 .32.04.64.11.95-3.46-.17-6.53-1.83-8.58-4.35a4.16 4.16 0 0 0-.56 2.09c0 1.44.73 2.72 1.85 3.46a4.12 4.12 0 0 1-1.88-.52v.05c0 2.01 1.43 3.69 3.33 4.07-.35.09-.72.14-1.1.14-.27 0-.53-.03-.79-.08.53 1.65 2.06 2.85 3.88 2.88-1.42 1.11-3.21 1.77-5.16 1.77-.33 0-.66-.02-.99-.06 1.84 1.18 4.02 1.87 6.36 1.87 7.63 0 11.8-6.32 11.8-11.8 0-.18 0-.36-.01-.54 1.06-.77 1.98-1.72 2.71-2.81z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* ستون دوم: خدمات ما */}
          <div className="flex flex-col">
            <h4 className="text-slate-800 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              دپارتمان‌های دژاوب
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">طراحی سایت فروشگاهی (ووکامرس)</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">توسعه پلتفرم‌های اختصاصی (Next.js)</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">سئو و بهینه‌سازی موتورهای جستجو</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">تولید محتوا و ادمینی شبکه‌های اجتماعی</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">هوشمندسازی و اتوماسیون سازمانی</a></li>
            </ul>
          </div>

          {/* ستون سوم: لینک‌های سریع */}
          <div className="flex flex-col">
            <h4 className="text-slate-800 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              دسترسی سریع
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">درباره دژاوب</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">تعرفه‌ها و پکیج‌ها</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">نمونه کارها</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">درخواست مشاوره</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">قوانین و مقررات</a></li>
            </ul>
          </div>

          {/* ستون چهارم: تماس و نمادها */}
          <div className="flex flex-col">
            <h4 className="text-slate-800 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              ارتباط با ما
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-500 mb-6">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>تهران، [آدرس دقیق آژانس دژاوب]</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span dir="ltr">۰۹۱۲ ۰۰۰ ۰۰۰۰</span>
              </li>
            </ul>
            
            {/* جایگاه نماد الکترونیک (اینماد) */}
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-xs text-slate-400 font-bold">نماد اعتماد</div>
              <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-xs text-slate-400 font-bold">ساماندهی</div>
            </div>
          </div>

        </div>
      </div>

      {/* نوار کپی‌رایت پایین */}
      <div className="w-full bg-slate-50 border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به <span className="font-bold text-slate-700">آژانس دیجیتال دژاوب</span> می‌باشد. © ۲۰۲۶
          </p>
          <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
            Designed & Developed with Next.js
          </div>
        </div>
      </div>

    </footer>
  );
}