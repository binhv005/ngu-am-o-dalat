import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE, NAV_LINKS } from '../siteInfo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label={SITE.name}>
          <img src="/images/logo.jpg" alt="Logo Ngủ Ấm Ở Đà Lạt" width="46" height="46" />
          <span>{SITE.name}</span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Mở menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav className="nav-links" aria-label="Điều hướng chính">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#lien-he" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Liên hệ đặt phòng</a>
        </nav>
      </div>
    </header>
  );
}
