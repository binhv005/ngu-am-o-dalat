import React from 'react';

export default function About() {
  return (
    <section id="ve-chung-toi" className="section">
      <div className="container about-grid">
        <div className="about-photo reveal">
          <img src="/images/phong-1.jpg" alt="Phòng nghỉ với giường gỗ, chăn ấm và ốp tường gỗ" loading="lazy" />
        </div>
        <div className="about-text reveal delay-1">
          <span className="eyebrow">Về chúng tôi</span>
          <h2 className="section-title">Một chốn dừng chân giữa thành phố ngàn hoa</h2>
          <p>
            Ngủ Ấm Ở Đà Lạt mang đến dịch vụ cho thuê phòng và lưu trú dành cho khách du lịch trong nước
            và quốc tế. Chúng tôi hướng đến một không gian nghỉ ngơi dễ chịu, nơi bạn có thể tạm gác nhịp
            sống bận rộn và dành thời gian tận hưởng chuyến đi của mình.
          </p>
          <a href="#lien-he" className="btn btn-outline">Liên hệ với chúng tôi</a>
        </div>
      </div>
    </section>
  );
}
