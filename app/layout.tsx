import type { Metadata } from 'next';
import './globals.css';
import AosInit from '../components/AosInit';
import SmoothScroll from '../components/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google'; // این خط اضافه شد

export const metadata: Metadata = {
  metadataBase: new URL('https://dezhaweb.ir'),
  title: 'دژاوب (Dezhaweb) | آژانس طراحی سایت و توسعه کسب‌وکار',
  description: 'آژانس خلاق دژاوب؛ ارائه‌دهنده خدمات تخصصی طراحی سایت (ووکامرس و Next.js)، مدیریت شبکه‌های اجتماعی، سئو و سیستم‌سازی فروش.',
  keywords: ['طراحی سایت', 'دیجیتال مارکتینگ', 'دژاوب', 'Dezhaweb', 'مدیریت اینستاگرام', 'طراحی سایت فروشگاهی'],
  authors: [{ name: 'حامد' }],
  openGraph: {
    title: 'دژاوب | موتور محرک کسب‌وکار شما در دنیای دیجیتال',
    description: 'ما در دژاوب به جای سایت‌های معمولی، ماشین فروش می‌سازیم. طراحی سایت اختصاصی، مدیریت پیج و استراتژی‌های افزایش فروش.',
    url: 'https://dezhaweb.ir',
    siteName: 'آژانس دیجیتال مارکتینگ دژاوب',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دژاوب | آژانس تخصصی طراحی سایت و دیجیتال مارکتینگ',
    description: 'مسیر توسعه برند شما از اینجا آغاز می‌شود. همراه با جدیدترین تکنولوژی‌های وب.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SmoothScroll>
          <AosInit />
          {children}
        </SmoothScroll>
        
        {/* کد گوگل آنالیتیکس */}
        {/* جای G-XXXXXXX باید آیدی واقعی گوگل آنالیتیکس خودت رو بعداً قرار بدی */}
        <GoogleAnalytics gaId="G-XXXXXXX" />
      </body>
    </html>
  );
}