'use client';

import React from 'react';

export default function Testimonials() {
  // دیتای نظرات (۳ عدد برای حفظ تقارن و سادگی)
  const testimonials = [
    {
      id: 1,
      name: "دکتر مهدوی",
      role: "مدیر کلینیک زیبایی",
      text: "پکیج طلایی دژاوب دقیقاً همون چیزی بود که نیاز داشتیم. سیستم پیامکی باعث شد پیگیری مراجعین اتوماتیک بشه و فروش ما ۳ برابر رشد کنه.",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
    },
    {
      id: 2,
      name: "رضا محمدی",
      role: "صاحب فروشگاه پوشاک",
      text: "یه سایت وردپرسی کند داشتم. تیم دژاوب سایت رو از نو روی سرور قوی بالا آوردن. الان هم سرعت لود فوق‌العادست هم اتصال به ترب عالی کار می‌کنه.",
      avatar: "https://i.pravatar.cc/150?img=15",
      rating: 5,
    },
    {
      id: 3,
      name: "سارا احمدی",
      role: "مدیر فروشگاه ارگانیک",
      text: "پکیج ادمینی برای پیج اینستاگراممون معجزه کرد. طراحی کاورها بی‌نظیره و برخورد ادمین‌ها در دایرکت به شدت حرفه‌ای است.",
      avatar: "https://i.pravatar.cc/150?img=32",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* هدر ساده و مینیمال */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
            تجربه همکاری با دژاوب
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-light">
            نظرات و بازخوردهای مشتریانی که برای تحول دیجیتال به ما اعتماد کردند.
          </p>
        </div>

        {/* گرید منظم و هم‌اندازه (۳ ستونه) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* ستاره‌های بسیار ریز و ظریف */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill={i < item.rating ? "#FBBF24" : "none"} 
                    stroke={i < item.rating ? "#FBBF24" : "#CBD5E1"} 
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              
              {/* متن نظر با سایز استاندارد */}
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-8 flex-1">
                "{item.text}"
              </p>

              {/* پروفایل مشتری (جمع‌وجور در پایین کارت) */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}