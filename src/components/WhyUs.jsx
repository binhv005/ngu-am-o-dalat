import React from 'react';
import { BedDouble, Globe2, PhoneCall } from 'lucide-react';

const ITEMS = [
  { Icon: BedDouble, img: '/images/phong-2.jpg', alt: 'Phòng nghỉ có cửa sổ và ghế thư giãn', title: 'Lưu trú tại Đà Lạt', text: 'Dịch vụ cho thuê phòng phục vụ khách du lịch.' },
  { Icon: Globe2, img: '/images/choi-ban-go.jpg', alt: 'Chòi gỗ ngoài trời với đèn dây', title: 'Dành cho nhiều hành trình', text: 'Hướng đến khách trong nước và quốc tế.' },
  { Icon: PhoneCall, img: '/images/khong-gian-chung.jpg', alt: 'Khu bếp và bàn ăn chung', title: 'Liên hệ trực tiếp', text: 'Trao đổi nhu cầu lưu trú và thông tin phòng trước chuyến đi.' },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Lý do lựa chọn</span>
          <h2 className="section-title">Bắt đầu hành trình từ một nơi thật dễ chịu</h2>
        </div>
        <div className="why-grid">
          {ITEMS.map(({ Icon, img, alt, title, text }, i) => (
            <div key={title} className={`why-item reveal delay-${i}`}>
              <div className="why-photo"><img src={img} alt={alt} loading="lazy" /></div>
              <div className="why-body">
                <Icon className="why-icon" size={30} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
