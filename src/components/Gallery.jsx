import React, { useState } from 'react';
import { X } from 'lucide-react';

const PHOTOS = [
  { cls: 'g1', src: '/images/phong-1.jpg', alt: 'Phòng nghỉ với giường gỗ, chăn ấm và ốp tường gỗ', caption: 'Không gian phòng nghỉ', pos: 'center 62%' },
  { cls: 'g2', src: '/images/phong-2.jpg', alt: 'Phòng nghỉ có cửa sổ, rèm và ghế thư giãn', caption: 'Góc thư giãn', pos: 'center 55%' },
  { cls: 'g3', src: '/images/khong-gian-chung.jpg', alt: 'Khu bếp và bàn ăn chung', caption: 'Không gian sinh hoạt chung', pos: 'center' },
  { cls: 'g4', src: '/images/san-vuon-toan-canh.jpg', alt: 'Sân vườn nhìn từ trên cao lúc hoàng hôn', caption: 'Sân vườn', pos: 'center 55%' },
  { cls: 'g5', src: '/images/san-vuon-lua.jpg', alt: 'Ghế gỗ và bếp lửa trong sân vườn', caption: 'Không gian bên ngoài', pos: '35% center' },
  { cls: 'g6', src: '/images/choi-ban-go.jpg', alt: 'Chòi gỗ có bàn dài và đèn dây', caption: 'Chòi nghỉ ngoài trời', pos: 'center' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="khong-gian" className="section gallery-section">
      <div className="container">
        <div className="gallery-head reveal">
          <span className="eyebrow">Không gian lưu trú</span>
          <h2 className="section-title">Không gian dành cho những ngày thật chậm</h2>
          <p className="lead">
            Mỗi chuyến đi đều cần một nơi để nghỉ ngơi. Khám phá những góc nhỏ và không gian lưu trú tại Ngủ Ấm Ở Đà Lạt.
          </p>
        </div>
        <div className="gallery-grid">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={`g-item ${p.cls} reveal`} onClick={() => setActive(p)}>
              <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos }} />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery-note">Liên hệ trực tiếp để được tư vấn thông tin phòng, giá và tình trạng phòng trống.</p>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Đóng"><X size={30} /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
