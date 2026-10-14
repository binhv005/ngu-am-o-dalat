import React from 'react';

export default function Experience() {
  return (
    <section id="trai-nghiem" className="section experience">
      <div className="container exp-grid">
        <div className="reveal">
          <span className="eyebrow">Trải nghiệm Đà Lạt</span>
          <h2 className="section-title">Đà Lạt dịu dàng theo cách riêng của bạn</h2>
          <p className="lead">
            Đón một buổi sáng se lạnh, thong thả khám phá những con đường rợp bóng cây và tận hưởng nhịp sống
            nhẹ nhàng của thành phố. Hãy để chuyến đi Đà Lạt trở thành khoảng thời gian dành riêng cho bản thân.
          </p>
        </div>
        <div className="exp-photo reveal delay-1">
          <img src="/images/san-vuon-toan-canh.jpg" alt="Sân vườn xanh mát với hoa và ánh nắng chiều" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
