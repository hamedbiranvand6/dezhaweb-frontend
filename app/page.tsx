import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Pricing from '../components/Pricing';
import AdminPackages from '../components/AdminPackages';
import ConsultingPackages from '../components/ConsultingPackages';
import ClientsMarquee from '../components/ClientsMarquee'; // انتقال یافت به اینجا
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-vazir relative">
      {/* هدر و اسلایدر اصلی */}
      <Header />
      <HeroSlider />
      
      {/* پکیج‌های خدمات دژاوب */}
      <Pricing />
      <AdminPackages />
      <ConsultingPackages />
      
      {/* نوار متحرک مشتریان - انتقال یافته برای جلب اعتماد پس از دیدن قیمت‌ها */}
      <ClientsMarquee />
      
      {/* نمونه‌کارها و نظرات */}
      <Portfolio />
      <Testimonials />
      
      {/* سوالات متداول و وبلاگ */}
      <FAQ />
      <Blog />
      
      {/* فوتر و دکمه شناور تماس */}
      <Footer />
      <FloatingContact />
    </main>
  );
}