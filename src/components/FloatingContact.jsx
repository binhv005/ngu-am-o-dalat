import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { SITE } from '../siteInfo';

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="floating">
      <button className={`fab fab-top${showTop ? ' show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Lên đầu trang">
        <ArrowUp size={22} />
      </button>
      <a href={SITE.tel} className="fab fab-call" aria-label={`Gọi ${SITE.phone}`}><Phone size={22} /></a>
    </div>
  );
}
