'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ایمپورت کردن استایل‌های انیمیشن

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدت زمان انیمیشن (۰.۸ ثانیه - بسیار نرم)
      once: true, // انیمیشن فقط یک‌بار موقع پایین رفتن اجرا بشه (نه موقع بالا اومدن)
      offset: 100, // المان ۱۰۰ پیکسل قبل از اینکه بیاد تو صفحه شروع به انیمیشن کنه
      easing: 'ease-out-cubic', // افکت حرکتی نرم و پریمیوم
    });
  }, []);

  return null; // این کامپوننت ظاهر نداره، فقط انیمیشن رو فعال می‌کنه
}