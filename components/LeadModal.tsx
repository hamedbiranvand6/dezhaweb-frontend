'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function LeadModal({ isOpen, onClose, defaultService = 'طراحی سایت شرکتی' }: LeadModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [baleLink, setBaleLink] = useState('');

  // اطمینان از لود شدن در سمت کلاینت برای پورتال
  useEffect(() => {
    setMounted(true);
  }, []);

  // قفل کردن اسکرول صفحه هنگام باز بودن مودال
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://api.dezhaweb.ir/wp-json/dezhaweb/v1/submit-lead', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, phone, service, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'درخواست شما با موفقیت ثبت شد.');
        if (data.bale_username) {
          setBaleLink(`https://ble.ir/${data.bale_username}`);
        }
        setName('');
        setPhone('');
        setMessage('');
      } else {
        alert(data.message || 'خطایی در ثبت درخواست رخ داد.');
      }
    } catch (err) {
      console.error(err);
      alert('خطا در ارتباط با سرور وردپرس. لطفاً مجدداً تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-vazir">
      {/* پس‌زمینه تیره و بلور */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* کادر اصلی فرم - وسط‌چین واقعی و کاملاً ریسپانسیو */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 my-auto transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* دکمه بستن (ضربدر) */}
        <button
          onClick={onClose}
          className="absolute left-5 top-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="بستن"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* هدر فرم */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            مشاوره تخصصی و استعلام قیمت
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            شروع پروژه در <span className="text-blue-600">دژاوب</span>
          </h3>
          <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
            اطلاعات خود را وارد کنید تا کارشناسان ما جهت بررسی نیازها و ارائه پروپوزال با شما تماس بگیرند.
          </p>
        </div>

        {/* حالت موفقیت‌آمیز ثبت فرم */}
        {successMsg ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
              ✓
            </div>
            <h4 className="text-base font-bold text-slate-800 mb-2">درخواست شما با موفقیت دریافت شد!</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
              اطلاعات شما در سیستم ثبت گردید. به زودی با شما تماس خواهیم گرفت.
            </p>

            {baleLink && (
              <a
                href={baleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 mb-3"
              >
                <span>گفت‌وگوی آنلاین و سریع در پیام‌رسان بله</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            )}

            <button
              onClick={() => {
                setSuccessMsg('');
                onClose();
              }}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors pt-2"
            >
              بستن این پنجره
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* فیلد نام */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                نام و نام خانوادگی <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثلاً: حامد موسوی"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
              />
            </div>

            {/* فیلد شماره موبایل */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                شماره تماس (موبایل) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm text-right"
              />
            </div>

            {/* انتخاب نوع خدمات */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                سرویس یا حوزه مورد نظر:
              </label>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none shadow-sm cursor-pointer"
                >
                  <option value="طراحی سایت شرکتی">طراحی سایت شرکتی</option>
                  <option value="طراحی سایت فروشگاهی">طراحی سایت فروشگاهی اختصاصی</option>
                  <option value="سیستماسیون و اتوماسیون">سیستماسیون شرکتی و فروشگاهی</option>
                  <option value="تولید محتوا و برندینگ">تولید محتوا و برندشو</option>
                  <option value="ادمین سنتر">خدمات ادمین سنتر و مدیریت شبکه‌های اجتماعی</option>
                  <option value="پکیج‌های افزایش فروش">پکیج‌های جامع رشد و افزایش فروش</option>
                  <option value="مشاوره عمومی">مشاوره عمومی استراتژی آنلاین</option>
                </select>
                <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            {/* توضیحات */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                توضیحات تکمیلی یا زمینه فعالیت (اختیاری):
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="خلاصه‌ای از هدف پروژه یا آدرس سایت/پیج فعلی خود را بنویسید..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none shadow-sm"
              ></textarea>
            </div>

            {/* دکمه ارسال */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 mt-2 disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>در حال ثبت و ارسال...</span>
                </>
              ) : (
                <>
                  <span>ثبت درخواست و ارسال به کارشناس</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}