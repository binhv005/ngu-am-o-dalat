import React, { useState } from 'react';
import { Phone, User, ExternalLink, MapPin, Send } from 'lucide-react';
import { SITE, NAV_LINKS } from '../siteInfo';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', checkIn: '', checkOut: '', note: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Không có backend: mở ứng dụng nhắn tin trên thiết bị với nội dung đã soạn sẵn, người dùng bấm gửi.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Xin chào, tôi muốn hỏi phòng tại Ngủ Ấm Ở Đà Lạt.',
      `Họ tên: ${form.name}`,
      `Số điện thoại: ${form.phone}`,
      form.checkIn && `Ngày nhận phòng dự kiến: ${form.checkIn}`,
      form.checkOut && `Ngày trả phòng dự kiến: ${form.checkOut}`,
      form.note && `Lời nhắn: ${form.note}`,
    ].filter(Boolean);
    window.location.href = `sms:${SITE.phone}?body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <section id="lien-he" className="contact">
      <div className="container">
        <div className="contact-split reveal">
          <div className="contact-photo">
            <img src="/images/phong-1.jpg" alt="Phòng nghỉ ấm cúng với giường gỗ và chăn mềm" loading="lazy" />
          </div>
          <div className="contact-panel">
            <span className="eyebrow">Liên hệ</span>
            <h2 className="section-title">Bạn đang lên kế hoạch đến Đà Lạt?</h2>
            <p className="contact-lead">
              Liên hệ với Ngủ Ấm Ở Đà Lạt để trao đổi về nhu cầu lưu trú và hỏi thông tin phòng phù hợp với chuyến đi của bạn.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Họ và tên <b>*</b>
                <input required value={form.name} onChange={set('name')} placeholder="Ví dụ: Nguyễn Văn A" />
              </label>
              <label>Số điện thoại <b>*</b>
                <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="Ví dụ: 0912 345 678" />
              </label>
              <label>Ngày nhận phòng dự kiến
                <input type="date" value={form.checkIn} onChange={set('checkIn')} />
              </label>
              <label>Ngày trả phòng dự kiến
                <input type="date" value={form.checkOut} min={form.checkIn} onChange={set('checkOut')} />
              </label>
              <label className="full">Lời nhắn
                <textarea rows="3" value={form.note} onChange={set('note')} placeholder="Số khách, nhu cầu lưu trú hoặc câu hỏi của bạn..." />
              </label>
              <button type="submit" className="btn btn-primary full"><Send size={18} /> Gửi tin nhắn hỏi phòng</button>
              <p className="form-hint full">Nút này mở ứng dụng nhắn tin trên thiết bị của bạn với nội dung đã soạn sẵn tới {SITE.phone}.</p>
            </form>
            <div className="contact-info">
              <p><User size={16} /> {SITE.contactPerson}</p>
              <div className="contact-actions">
                <a href={SITE.tel} className="btn btn-light"><Phone size={18} /> Gọi ngay</a>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-light"><ExternalLink size={18} /> Facebook</a>
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn btn-light"><MapPin size={18} /> Xem bản đồ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{SITE.name}</h3>
            <p>Dịch vụ cho thuê phòng và lưu trú dành cho khách du lịch trong nước và quốc tế tại Đà Lạt.</p>
          </div>
          <div>
            <h4>Liên hệ</h4>
            <ul>
              <li><a href={SITE.tel}>{SITE.phone}</a></li>
              <li><a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={SITE.maps} target="_blank" rel="noopener noreferrer">Google Maps</a></li>
            </ul>
          </div>
          <div>
            <h4>Điều hướng</h4>
            <ul>
              {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {SITE.name}. Đà Lạt, Lâm Đồng, Việt Nam.</div>
      </div>
    </footer>
  );
}
