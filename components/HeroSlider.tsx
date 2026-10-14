'use client';

import React, { useState, useEffect } from 'react';

interface SlideItem {
  id: number;
  image: string;
  url?: string;
  title?: string;
}

const defaultSlides: SlideItem[] = [
  { id: 1, image: "/slider/slide-1.png", url: "#" },
  { id: 2, image: "/slider/slide-2.png", url: "#" },
  { id: 3, image: "/slider/slide-3.png", url: "#" }
];

export default function HeroSlider() {
  const [slides, setSlides] = useState<SlideItem[]>(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  // واکشی داده‌های اسلایدر از وردپرس بدون گیر کردن در کَش
  useEffect(() => {
    async function fetchSliders() {
      try {
        const res = await fetch('https://api.dezhaweb.ir/wp-json/wp/v2/sliders?orderby=menu_order&order=asc', {
          cache: 'no-store',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'application/json'
          }
        });

        if (!res.ok) return;

        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const wpSlides = data
            .filter((item: any) => item.slider_image)
            .map((item: any) => ({
              id: item.id,
              image: item.slider_image,
              url: item.target_url || '#',
              title: item.title?.rendered || ''
            }));

          if (wpSlides.length > 0) {
            setSlides(wpSlides);
          }
        }
      } catch (err) {
        console.error('خطای دریافت اسلایدرها از وردپرس:', err);
      }
    }

    fetchSliders();
  }, []);

  // تغییر خودکار اسلایدها هر ۵ ثانیه
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="w-full pt-28 lg:pt-32 pb-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* کادر اصلی اسلایدر */}
        <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-md group">
          
          {slides.map((slide, index) => {
            const isCurrent = index === currentSlide;
            const content = (
              <img 
                src={slide.image} 
                alt={slide.title || `Dezhaweb Slide ${slide.id}`} 
                className="w-full h-full object-cover md:object-fill pointer-events-none"
              />
            );

            return (
              <div 
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {slide.url && slide.url !== '#' ? (
                  <a href={slide.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}

          {/* دکمه اسلاید قبلی */}
          {slides.length > 1 && (
            <button 
              onClick={prevSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              aria-label="اسلاید قبلی"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          )}
          
          {/* دکمه اسلاید بعدی */}
          {slides.length > 1 && (
            <button 
              onClick={nextSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
              aria-label="اسلاید بعدی"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
          )}

          {/* نشانگرهای نقطه‌ای */}
          {slides.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full h-1.5 ${
                    index === currentSlide 
                      ? 'w-6 bg-blue-600 shadow-md shadow-blue-600/30' 
                      : 'w-1.5 bg-slate-300/60 hover:bg-slate-400'
                  }`}
                  aria-label={`برو به اسلاید ${index + 1}`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}