import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      
      {/* بک‌گراند گرافیکی ملایم (شرکتی و روشن) */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/40 blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-200/50 blur-[80px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* بخش متنی (راست) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-right">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 tracking-widest">توسعه کسب‌وکار آنلاین</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] mb-6">
            خلق ماشین فروش <br />
            با استراتژی‌های <span className="text-blue-600">دژاوب</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-light">
            ما فقط سایت نمی‌سازیم؛ ما زیرساخت دیجیتالی خلق می‌کنیم که برند شما را قدرتمندتر و فروش شما را چند برابر می‌کند. ترکیبی از مهندسی وب و بازاریابی هدفمند.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5 flex items-center gap-2">
              درخواست مشاوره
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            
            <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-2">
              مشاهده پکیج‌ها
            </button>
          </div>
          
          {/* نشانه‌های اعتماد (Trust Indicators) */}
          <div className="mt-10 flex items-center gap-6 border-t border-slate-200 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-slate-900">+۱۵۰</span>
              <span className="text-xs text-slate-500 font-medium">پروژه موفق</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-slate-900">۹۸٪</span>
              <span className="text-xs text-slate-500 font-medium">رضایت مشتریان</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-slate-900">۲۴/۷</span>
              <span className="text-xs text-slate-500 font-medium">پشتیبانی فنی</span>
            </div>
          </div>
          
        </div>

        {/* بخش تصویری/گرافیکی (چپ) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          {/* یک کارت شیشه‌ای انتزاعی به جای عکس ساده */}
          <div className="relative w-full max-w-md bg-white p-6 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 z-10 hover:-translate-y-2 transition-transform duration-500">
            
            {/* هدر گرافیک کارت */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md tracking-widest">PERFORMANCE</div>
            </div>

            {/* المان‌های داشبورد ساختگی */}
            <div className="space-y-4">
              <div className="flex items-end gap-3 h-32 border-b border-dashed border-slate-200 pb-2">
                <div className="w-full bg-blue-100 rounded-t-lg h-[40%]"></div>
                <div className="w-full bg-blue-200 rounded-t-lg h-[60%]"></div>
                <div className="w-full bg-blue-300 rounded-t-lg h-[45%]"></div>
                <div className="w-full bg-blue-600 rounded-t-lg h-[90%] relative shadow-lg shadow-blue-600/30">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded font-bold">۸۵٪+</div>
                </div>
                <div className="w-full bg-blue-400 rounded-t-lg h-[75%]"></div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <div className="w-1/3 h-2 bg-slate-100 rounded-full"></div>
                <div className="w-1/4 h-2 bg-slate-200 rounded-full"></div>
              </div>
            </div>
            
            {/* نشانگر شناور */}
            <div className="absolute -left-6 -bottom-6 bg-white p-4 rounded-xl shadow-xl shadow-slate-200/60 border border-slate-50 flex items-center gap-4 animate-[bounce_3s_infinite]">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-medium">وضعیت پروژه</p>
                <p className="text-sm font-bold text-slate-800">تکمیل شده</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}