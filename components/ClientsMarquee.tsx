'use client';

import React from 'react';

export default function ClientsMarquee() {
  const clients = [
    { id: 1, name: "برند اول", icon: "🌐" },
    { id: 2, name: "کلینیک زیبایی", icon: "✨" },
    { id: 3, name: "فروشگاه آنلاین", icon: "🛍️" },
    { id: 4, name: "شرکت صنعتی", icon: "🏗️" },
    { id: 5, name: "آژانس املاک", icon: "🏢" },
    { id: 6, name: "مجموعه آموزشی", icon: "🎓" },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full py-8 md:py-10 bg-white border-b border-slate-100 overflow-hidden">

      {/* استایل انیمیشن اسکرول */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* متن راهنما - با طراحی جدید، بزرگتر و متصل به نوار */}
        <div className="shrink-0 flex items-center lg:border-l lg:border-slate-200 lg:pl-10">
          <h3 className="text-slate-800 font-bold text-sm md:text-base flex items-center gap-3">
            {/* نقطه آبی چشمک‌زن (پالس) برای جلب توجه */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            مورد اعتماد برندهای پیشرو
          </h3>
        </div>

        {/* کادر اصلی نوار متحرک */}
        <div className="relative w-full flex overflow-hidden group" dir="ltr">
          
          {/* هاله‌های محوشونده در دو طرف */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* نوار حاوی لوگوها */}
          <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-36 md:w-48 mx-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                {/* وقتی عکس لوگوهات رو ساختی این تگ رو جایگزین div پایین کن:
                    <img src={client.image} alt={client.name} className="h-10 object-contain" /> */}
                <div className="flex items-center gap-2 text-lg md:text-xl font-black text-slate-700">
                  <span>{client.icon}</span>
                  <span>{client.name}</span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}