'use client';

import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // باز بودن سوال اول به صورت پیش‌فرض

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "آیا برای شروع پروژه نیاز به پرداخت کل مبلغ است؟",
      answer: "خیر، در دژاوب امکان پرداخت اقساطی (۳ مرحله‌ای) وجود دارد. ۳۰ درصد در زمان عقد قرارداد، ۴۰ درصد پس از تایید طرح اولیه و ۳۰ درصد نهایی پس از تحویل کامل پروژه و آموزش پرداخت می‌شود."
    },
    {
      question: "پکیج «ماشین فروش» دقیقاً چه تفاوتی با سایت‌های معمولی دارد؟",
      answer: "سایت‌های معمولی صرفاً یک ویترین آنلاین هستند. اما ماشین فروش دژاوب، مستقیماً به سیستم‌های ترب، باسلام و پنل‌های پیامکی متصل می‌شود تا فروش شما کاملاً اتوماتیک و بدون نیاز به دخالت دستی انجام شود."
    },
    {
      question: "آیا هاست و دامنه روی پکیج‌های طراحی سایت محاسبه شده است؟",
      answer: "بله، در پکیج‌های طلایی و VIP، هزینه دامنه ir. و یک سال هاست پرسرعت (سرور هلند) کاملاً بر عهده ماست و نیاز به پرداخت هزینه جداگانه ندارید."
    },
    {
      question: "روند پشتیبانی فنی پس از تحویل پروژه چگونه است؟",
      answer: "تمام پروژه‌های ما دارای ۶ ماه پشتیبانی فنی رایگان برای رفع هرگونه باگ احتمالی هستند. پس از آن، امکان تمدید پشتیبانی با مبالغ بسیار منصفانه وجود دارد."
    },
    {
      question: "برای پروژه‌های تولید محتوا چه پلتفرم‌هایی را پوشش می‌دهید؟",
      answer: "تمرکز اصلی ما روی اینستاگرام است، اما بر اساس نیاز شما مدیریت کانال‌های تلگرام و پلتفرم‌های داخلی (مانند ایتا و روبیکا) نیز در پکیج‌های ادمینی لحاظ می‌شود."
    }
  ];

  return (
    <section id="faq" className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* هدر بخش FAQ */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-3">
            سوالات <span className="text-blue-600">پرتکرار</span>
          </h2>
          <p className="text-slate-500 text-sm font-light">
            پاسخ به ابهامات شما برای شروع یک همکاری مطمئن
          </p>
        </div>

        {/* لیست سوالات آکاردئونی */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index ? 'border-blue-200 shadow-sm' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* بخش سوال (قابل کلیک) */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`text-sm md:text-base font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                
                {/* آیکون + و - */}
                <span className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {openIndex === index ? (
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    ) : (
                      <>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </>
                    )}
                  </svg>
                </span>
              </button>

              {/* بخش جواب (متحرک) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-1 text-sm text-slate-500 font-light leading-relaxed border-t border-slate-50 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه تماس در صورت داشتن سوال دیگر */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-3 font-light">سوال دیگری ذهن شما را درگیر کرده؟</p>
          <a href="tel:09120000000" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
            مشاوره تلفنی رایگان
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>

      </div>
    </section>
  );
}