import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import WhyUs from './components/WhyUs';
import { ContactSection, Footer } from './components/Contact';
import FloatingContact from './components/FloatingContact';

export default function App() {
  // Hiệu ứng xuất hiện nhẹ khi cuộn tới
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          observer.unobserve(e.target);
        }
      }),
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
