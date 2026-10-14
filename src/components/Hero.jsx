import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { SITE } from '../siteInfo';

export default function Hero() {
  const bgRef = useRef(null);

  // Parallax rất nhẹ, tắt khi người dùng chọn giảm chuyển động
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      if (bgRef.current && window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px) scale(1.05)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img ref={bgRef} src="/images/san-vuon-lua.jpg" alt="Sân vườn có bếp lửa và ghế nghỉ lúc chạng vạng" />
      </div>
      <div className="container hero-content">
        <span className="eyebrow">Chạm vào bình yên giữa Đà Lạt</span>
        <h1>Ngủ Ấm Ở Đà Lạt</h1>
        <p className="hero-sub">Một góc nhỏ để nghỉ ngơi, một chút bình yên để tận hưởng Đà Lạt.</p>

        <div className="hero-actions">
          <a href={SITE.tel} className="btn btn-primary"><Phone size={18} /> Liên hệ hỏi phòng</a>
          <a href="#khong-gian" className="btn btn-ghost">Khám phá không gian</a>
        </div>
      </div>
    </section>
  );
}
