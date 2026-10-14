# PROMPT CHỈNH SỬA LANDING PAGE CÓ SẴN – NGỦ ẤM Ở ĐÀ LẠT

## 1. VAI TRÒ VÀ MỤC TIÊU

Bạn là Senior UI/UX Designer và Frontend Developer chuyên thiết kế website du lịch, homestay và dịch vụ lưu trú cao cấp.

Tôi đã có sẵn một landing page được thiết kế và triển khai trước đó. Hãy trực tiếp kiểm tra code hiện tại và **chuyển đổi toàn bộ giao diện, nội dung, hình ảnh, màu sắc và thông điệp thương hiệu thành website giới thiệu dịch vụ lưu trú “Ngủ Ấm Ở Đà Lạt”**.

Đây là yêu cầu chỉnh sửa dự án hiện có, không phải tạo dự án mới.

Mục tiêu:
- Giới thiệu dịch vụ cho thuê phòng và lưu trú tại Đà Lạt.
- Tạo cảm giác ấm áp, bình yên, gần gũi với thiên nhiên và đặc trưng khí hậu Đà Lạt.
- Thu hút khách du lịch trong nước và quốc tế.
- Tăng khả năng khách hàng liên hệ trực tiếp để hỏi phòng, giá và tình trạng phòng trống.
- Mang lại trải nghiệm hình ảnh đẹp, hiện đại, chuyên nghiệp và tối ưu trên cả điện thoại lẫn máy tính.

## 2. THÔNG TIN THƯƠNG HIỆU

Tên thương hiệu: **Ngủ Ấm Ở Đà Lạt**

Lĩnh vực: Du lịch / Lưu trú / Cho thuê phòng.

Khu vực hoạt động: Đà Lạt, Lâm Đồng, Việt Nam.

Đối tượng khách hàng:
- Khách du lịch trong nước đến Đà Lạt nghỉ dưỡng.
- Khách du lịch quốc tế.
- Các cặp đôi, nhóm bạn và gia đình.
- Khách muốn tìm nơi lưu trú để thư giãn, khám phá thành phố và tận hưởng không khí se lạnh.

Thông tin liên hệ:
- Người liên hệ: Phạm Hồ Quỳnh Trang.
- Số điện thoại: 0911942968.
- Facebook: https://www.facebook.com/profile.php?id=61559001633103
- Google Maps: https://www.google.com/maps/search/+l,+%C4%90%C3%A0+L%E1%BA%A1t,+Vietnam,+66106/@11.928106,108.3977835,17070m/data=!3m2!1e3!4b1

Thư mục ảnh và tài liệu tham khảo do chủ sở hữu cung cấp:
https://drive.google.com/drive/folders/17VTTdCJvSjI3dbHLsafRw2Rrh8PxYsrh

Lưu ý: Hãy sử dụng thông tin chính xác ở trên. Không tự tạo địa chỉ chi tiết, bảng giá, số lượng phòng, tiện nghi, đánh giá khách hàng hoặc chính sách dịch vụ khi chưa có dữ liệu xác thực.

## 3. NGUYÊN TẮC CHỈNH SỬA DỰ ÁN HIỆN TẠI

Trước khi chỉnh sửa:

1. Đọc cấu trúc thư mục, xác định framework, thư viện giao diện, routing, các component và hệ thống style hiện tại.
2. Xác định tất cả section của landing page, nội dung chữ, hình ảnh, background, icon, màu sắc và animation.
3. Xác định những chức năng đang hoạt động tốt để giữ nguyên.
4. Lập kế hoạch thay đổi nội dung và hình ảnh tương ứng với từng section.

Sau đó, tiến hành chỉnh sửa trực tiếp trên code hiện có.

Yêu cầu bắt buộc:
- Không khởi tạo dự án mới.
- Không thay đổi framework hoặc thư viện nếu không thực sự cần thiết.
- Không xóa các chức năng đang hoạt động tốt.
- Không thay đổi cấu trúc routing, logic nghiệp vụ hoặc cấu hình triển khai nếu không cần thiết.
- Không chỉ thay đổi tiêu đề hoặc màu sắc ở một vài vị trí; phải đồng bộ toàn bộ giao diện theo thương hiệu mới.
- Loại bỏ nội dung, hình ảnh, logo, thông tin và dấu hiệu nhận diện của thương hiệu cũ.
- Giữ lại bố cục hoặc component hiện có nếu phù hợp, nhưng được phép tái cấu trúc section khi cần thiết để phù hợp với dịch vụ lưu trú.
- Tái sử dụng code và tài nguyên hiện có khi hợp lý.
- Không tạo thêm những component trùng lặp hoặc CSS chồng chéo.

## 4. ĐỊNH HƯỚNG THIẾT KẾ VÀ BẢNG MÀU

Thiết kế theo phong cách:

**Warm Boutique Homestay – Cozy, Natural, Romantic, Premium.**

Website cần truyền tải cảm giác như một nơi trú ẩn ấm áp giữa thành phố Đà Lạt se lạnh. Thiết kế có tính thẩm mỹ cao, giàu cảm xúc, tự nhiên và tạo cảm giác đáng tin cậy.

### Bảng màu chủ đạo

- Nâu đất ấm: `#8B5E3C`
- Cam gạch: `#B96545`
- Be nhạt: `#F5EFE6`
- Kem ấm: `#E9DDCC`
- Xanh lá thông: `#34483B`
- Nâu đậm cho chữ: `#3D3028`
- Trắng ấm: `#FFFCF7`

Quy tắc sử dụng:
- Background tổng thể ưu tiên màu be nhạt và trắng ấm.
- Nâu đất và cam gạch dùng cho nút CTA, chi tiết thương hiệu, đường viền hoặc điểm nhấn.
- Xanh lá thông sử dụng có chọn lọc cho section thiên nhiên, footer, nhãn thông tin và các chi tiết bổ trợ.
- Chữ chính dùng nâu đậm để dễ đọc.
- Không sử dụng quá nhiều màu bão hòa hoặc các gradient neon.
- Không dùng nền đen toàn trang hoặc phong cách công nghệ lạnh lẽo.
- Giữ độ tương phản tốt và đảm bảo khả năng đọc trên màn hình điện thoại.

### Typography

Ưu tiên font có hỗ trợ tiếng Việt tốt:
- Tiêu đề: Be Vietnam Pro, Playfair Display hoặc font serif thanh lịch tương đương.
- Nội dung: Be Vietnam Pro hoặc Inter.
- Có thể sử dụng font serif cho tiêu đề lớn kết hợp sans-serif cho nội dung để tạo cảm giác boutique và nghỉ dưỡng.

Phân cấp rõ ràng giữa tiêu đề chính, tiêu đề section, mô tả, thông tin liên hệ và nút CTA.

## 5. THAY ĐỔI HÌNH ẢNH TOÀN WEBSITE

Hình ảnh là yếu tố quan trọng nhất để thể hiện thương hiệu lưu trú. Hãy kiểm tra và thay thế các ảnh cũ bằng hình ảnh phù hợp với Ngủ Ấm Ở Đà Lạt.

### Phong cách hình ảnh

Ưu tiên hình ảnh chân thực, ánh sáng tự nhiên, màu sắc ấm áp, có chiều sâu và cảm giác như ảnh chụp chuyên nghiệp cho một boutique homestay.

Các chủ đề hình ảnh cần tìm:
- Phòng ngủ ấm cúng với chăn ga mềm mại, ánh đèn vàng và nội thất gỗ.
- Không gian phòng nghỉ sạch sẽ, gọn gàng và thư giãn.
- Cửa sổ nhìn ra cây xanh, sương mù hoặc khung cảnh Đà Lạt nếu ảnh thực tế phù hợp.
- Những góc phòng có rèm vải, ánh sáng tự nhiên, tông be và nâu.
- Ban công hoặc không gian nghỉ ngơi gần gũi thiên nhiên, nếu cơ sở thực tế có.
- Các chi tiết tạo cảm giác ấm áp như đèn ngủ, sách, tách trà hoặc chất liệu len.

### Quy tắc thay ảnh

1. Ưu tiên sử dụng ảnh thật trong thư mục Google Drive do chủ sở hữu cung cấp.
2. Kiểm tra tài nguyên hiện có trong dự án trước khi tải hoặc thêm ảnh mới.
3. Nếu có thể truy cập thư mục Drive, hãy xem ảnh và phân loại theo nội dung: ảnh phòng, ảnh không gian, ảnh chi tiết và ảnh ngoại cảnh.
4. Nếu không truy cập được Drive, không được giả vờ rằng đã xem ảnh. Hãy dùng ảnh phù hợp có nguồn truy cập được hoặc tạo danh sách vị trí cần thay bằng ảnh thực tế.
5. Không sử dụng ảnh xe hơi, văn phòng, sản phẩm công nghệ, nhà hàng hoặc các hình ảnh còn sót lại từ thương hiệu cũ.
6. Không dùng ảnh stock có watermark hoặc ảnh sai bối cảnh.
7. Không tạo hình ảnh giả mạo và trình bày như ảnh thật của cơ sở.
8. Nếu chưa có ảnh thực tế, có thể dùng ảnh tham khảo về không gian lưu trú, nhưng cần thay bằng ảnh của cơ sở trước khi công bố website.

### Quy chuẩn hiển thị ảnh

- Ảnh hero có tỷ lệ phù hợp với layout, đủ độ phân giải và điểm nhấn rõ ràng.
- Các ảnh phòng cần được crop hợp lý, không cắt mất những chi tiết quan trọng.
- Sử dụng `object-fit: cover` khi phù hợp.
- Có lazy loading cho ảnh bên dưới màn hình đầu tiên.
- Tránh kéo giãn ảnh, ảnh vỡ hoặc tải ảnh không tồn tại.
- Không để ảnh nền làm giảm độ tương phản của chữ.
- Nếu sử dụng overlay, ưu tiên lớp phủ nâu hoặc đen nhẹ, tự nhiên.
- Kiểm tra responsive để hình ảnh không bị crop xấu trên điện thoại.

## 6. NỘI DUNG VÀ CẤU TRÚC LANDING PAGE

Dựa trên cấu trúc website hiện tại, hãy chuyển nội dung thành các section sau. Nếu cấu trúc cũ có section tương đương, hãy tái sử dụng thay vì tạo bản sao.

### SECTION 01 – HEADER

Logo hoặc tên thương hiệu:

**Ngủ Ấm Ở Đà Lạt**

Menu gợi ý:
- Trang chủ
- Không gian lưu trú
- Trải nghiệm
- Về chúng tôi
- Liên hệ

Nút CTA chính: **Liên hệ đặt phòng**

Yêu cầu:
- Header gọn gàng, tinh tế.
- Nền trắng ấm hoặc be nhạt.
- Có thể sử dụng header trong suốt trên hero nếu phù hợp với thiết kế hiện tại.
- Menu mobile hoạt động đầy đủ.
- CTA liên kết đến số điện thoại hoặc khu vực liên hệ.
- Không tự thêm hệ thống đặt phòng trực tuyến nếu dự án chưa có backend hỗ trợ.

### SECTION 02 – HERO BANNER

Đây là section quan trọng nhất, cần được thiết kế lại để thể hiện đúng thương hiệu.

Nhãn nhỏ:
**CHẠM VÀO BÌNH YÊN GIỮA ĐÀ LẠT**

Tiêu đề H1:
**Ngủ Ấm Ở Đà Lạt**

Tiêu đề bổ trợ:
**Một góc nhỏ để nghỉ ngơi, một chút bình yên để tận hưởng Đà Lạt.**

Mô tả:
“Giữa tiết trời se lạnh của Đà Lạt, hãy tìm cho mình một nơi lưu trú ấm cúng để nghỉ ngơi, thư giãn và tận hưởng những khoảnh khắc đáng nhớ bên người thân, bạn bè.”

CTA chính: **Liên hệ hỏi phòng**

CTA phụ: **Khám phá không gian**

Hình ảnh:
- Sử dụng ảnh phòng ngủ hoặc không gian lưu trú đẹp nhất có thể xác minh từ tài liệu của chủ sở hữu.
- Ưu tiên ảnh rộng, có chiều sâu, ánh sáng vàng nhẹ và chất liệu gỗ.
- Không che khuất chủ thể chính bằng quá nhiều chữ.
- Tạo điểm nhấn thị giác rõ ràng ngay trong màn hình đầu tiên.

Lưu ý: Không sử dụng lời quảng cáo như “giá rẻ nhất”, “view đẹp nhất Đà Lạt” hoặc “đầy đủ mọi tiện nghi” khi chưa có dữ liệu xác thực.

### SECTION 03 – GIỚI THIỆU

Tiêu đề:
**Một chốn dừng chân giữa thành phố ngàn hoa**

Nội dung:
“Ngủ Ấm Ở Đà Lạt mang đến dịch vụ cho thuê phòng và lưu trú dành cho khách du lịch trong nước và quốc tế. Chúng tôi hướng đến một không gian nghỉ ngơi dễ chịu, nơi bạn có thể tạm gác nhịp sống bận rộn và dành thời gian tận hưởng chuyến đi của mình.”

Bố cục:
- Một bên là ảnh không gian lưu trú.
- Một bên là nội dung giới thiệu.
- Có thể thêm các chi tiết trang trí tinh tế như đường nét organic, khung ảnh hoặc họa tiết thực vật.
- Tránh sử dụng quá nhiều card giống nhau.

### SECTION 04 – KHÔNG GIAN LƯU TRÚ

Tiêu đề:
**Không gian dành cho những ngày thật chậm**

Mô tả:
“Mỗi chuyến đi đều cần một nơi để nghỉ ngơi. Khám phá những góc nhỏ và không gian lưu trú tại Ngủ Ấm Ở Đà Lạt.”

Trình bày ảnh theo dạng gallery bất đối xứng hoặc bố cục editorial, thay vì chỉ xếp các card đồng nhất.

Phân loại nội dung ảnh theo những gì thực tế có:
- Không gian phòng nghỉ.
- Góc thư giãn.
- Chi tiết nội thất.
- Không gian bên ngoài.

Chỉ hiển thị những hạng mục có ảnh phù hợp. Không tự đặt tên loại phòng, diện tích, sức chứa, giá hoặc tiện nghi nếu chưa được cung cấp.

Nếu chưa có đủ ảnh thật, hãy xây dựng gallery có khả năng bổ sung ảnh sau này và không tạo ra các phòng nghỉ không tồn tại.

### SECTION 05 – TRẢI NGHIỆM ĐÀ LẠT

Tiêu đề:
**Đà Lạt dịu dàng theo cách riêng của bạn**

Nội dung:
“Đón một buổi sáng se lạnh, thong thả khám phá những con đường rợp bóng cây và tận hưởng nhịp sống nhẹ nhàng của thành phố. Hãy để chuyến đi Đà Lạt trở thành khoảng thời gian dành riêng cho bản thân.”

Hình ảnh đề xuất:
- Rừng thông và con đường phủ sương.
- Những góc phố Đà Lạt.
- Ánh nắng xuyên qua tán cây.
- Không gian thiên nhiên yên bình.

Không được khẳng định các địa điểm du lịch cụ thể nằm gần nơi lưu trú khi chưa xác minh vị trí chính xác.

### SECTION 06 – LÝ DO LỰA CHỌN

Tiêu đề:
**Bắt đầu hành trình từ một nơi thật dễ chịu**

Có thể trình bày ba nội dung:
- **Lưu trú tại Đà Lạt:** Dịch vụ cho thuê phòng phục vụ khách du lịch.
- **Dành cho nhiều hành trình:** Hướng đến khách trong nước và quốc tế.
- **Liên hệ trực tiếp:** Trao đổi nhu cầu lưu trú và thông tin phòng trước chuyến đi.

Dùng icon đơn giản hoặc minh họa tinh tế. Không đưa ra cam kết về chất lượng, tiêu chuẩn vệ sinh, tiện nghi, dịch vụ 24/7 hoặc đánh giá khách hàng nếu chưa có căn cứ thực tế.

### SECTION 07 – THÔNG TIN LIÊN HỆ

Tiêu đề:
**Bạn đang lên kế hoạch đến Đà Lạt?**

Mô tả:
“Liên hệ với Ngủ Ấm Ở Đà Lạt để trao đổi về nhu cầu lưu trú và hỏi thông tin phòng phù hợp với chuyến đi của bạn.”

Thông tin:
- Người liên hệ: Phạm Hồ Quỳnh Trang.
- Điện thoại: 0911942968.
- Facebook: trang chính thức được cung cấp.
- Google Maps: liên kết bản đồ được cung cấp.

CTA:
- **Gọi ngay:** `tel:0911942968`
- **Facebook:** mở trang Facebook đã cung cấp.
- **Xem bản đồ:** mở liên kết Google Maps đã cung cấp.

Nếu có form liên hệ, chỉ sử dụng khi form hiện tại hoạt động đúng. Các trường gợi ý: họ tên, số điện thoại, ngày nhận phòng dự kiến, ngày trả phòng dự kiến và lời nhắn. Không hiển thị trạng thái gửi thành công nếu dữ liệu chưa thực sự được gửi đi.

### SECTION 08 – FOOTER

Hiển thị:
- Ngủ Ấm Ở Đà Lạt.
- Giới thiệu ngắn về dịch vụ lưu trú.
- Số điện thoại.
- Liên kết Facebook.
- Liên kết Google Maps.
- Điều hướng nội bộ cần thiết.

Phong cách footer:
- Có thể sử dụng nền xanh lá thông hoặc nâu đậm.
- Chữ màu trắng ấm hoặc be nhạt.
- Giữ bố cục đơn giản, thanh lịch và dễ đọc.

## 7. ANIMATION VÀ TƯƠNG TÁC

Giữ lại những animation hiện có đang hoạt động tốt và điều chỉnh để phù hợp với phong cách nghỉ dưỡng.

Ưu tiên:
- Fade-in nhẹ khi nội dung xuất hiện.
- Slide-up khoảng cách ngắn.
- Parallax rất nhẹ ở ảnh hero nếu phù hợp.
- Hiệu ứng hover tinh tế cho nút và ảnh.
- Chuyển cảnh mượt, không gây cảm giác nặng nề.
- Animation cuộn trang chỉ khi thực sự cần thiết.

Tránh:
- Hiệu ứng giật, rung hoặc chuyển động quá mạnh.
- Animation liên tục gây mất tập trung.
- Lạm dụng blur, glassmorphism, neon hoặc hiệu ứng 3D.
- Video nền nặng ảnh hưởng đến tốc độ tải.
- Animation khiến nội dung biến mất hoặc không thể tương tác.

Tôn trọng `prefers-reduced-motion` để hỗ trợ người dùng muốn giảm chuyển động.

## 8. RESPONSIVE VÀ TRẢI NGHIỆM NGƯỜI DÙNG

Kiểm tra và điều chỉnh trên:
- Desktop: từ 1440px trở lên.
- Laptop: khoảng 1024–1366px.
- Tablet: khoảng 768px.
- Mobile: khoảng 360–430px.

Yêu cầu:
- Không xuất hiện thanh cuộn ngang ngoài ý muốn.
- Tiêu đề không bị cắt hoặc chồng lấn.
- Nút CTA dễ bấm trên điện thoại.
- Ảnh được crop đúng trên mọi kích thước màn hình.
- Menu mobile hoạt động chính xác.
- Số điện thoại có thể nhấn để gọi.
- Các liên kết ngoài mở đúng địa chỉ.
- Khoảng cách giữa các section hợp lý.
- Đảm bảo contrast và kích thước chữ dễ đọc.

## 9. SEO VÀ CHẤT LƯỢNG NỘI DUNG

Cập nhật:
- Page title: `Ngủ Ấm Ở Đà Lạt | Dịch vụ lưu trú tại Đà Lạt`
- Meta description: `Ngủ Ấm Ở Đà Lạt – dịch vụ cho thuê phòng và lưu trú dành cho khách du lịch trong nước và quốc tế. Liên hệ để hỏi thông tin phòng cho chuyến đi của bạn.`
- Một H1 chính cho toàn trang.
- Các section sử dụng H2, tiêu đề con sử dụng H3 phù hợp.
- Alt text mô tả chính xác nội dung ảnh.
- Favicon và logo theo nhận diện mới nếu tài nguyên cho phép.
- Open Graph title, description và image nếu dự án hiện tại có hỗ trợ.

Không nhồi nhét từ khóa hoặc tạo nội dung không có thật nhằm phục vụ SEO.

## 10. HIỆU NĂNG VÀ KIỂM TRA CODE

Sau khi chỉnh sửa:
1. Kiểm tra các import, đường dẫn ảnh và tài nguyên.
2. Kiểm tra console để phát hiện lỗi JavaScript.
3. Chạy lệnh build phù hợp với dự án.
4. Kiểm tra các liên kết, CTA, menu và form.
5. Kiểm tra giao diện trên mobile và desktop.
6. Kiểm tra animation có thực sự hoạt động.
7. Đảm bảo không còn nội dung hoặc hình ảnh của thương hiệu cũ.
8. Không xóa file cấu hình, biến môi trường hoặc chức năng backend đang được sử dụng.
9. Tối ưu ảnh, lazy loading và kích thước tài nguyên khi cần.
10. Không tự ý thay đổi quy trình deploy hoặc cấu hình hosting.

## 11. TIÊU CHÍ HOÀN THÀNH

Chỉ xem là hoàn thành khi:
- Toàn bộ website đã chuyển đổi nhất quán sang thương hiệu Ngủ Ấm Ở Đà Lạt.
- Nội dung phù hợp với dịch vụ lưu trú tại Đà Lạt.
- Màu nâu đất, cam gạch, be nhạt và xanh lá thông được sử dụng nhất quán.
- Hình ảnh cũ không còn xuất hiện ở các vị trí giao diện.
- Các ảnh mới phù hợp với ngữ cảnh và không bị lỗi.
- Những section không phù hợp với ngành hàng cũ đã được chuyển đổi.
- Các chức năng cũ cần thiết vẫn hoạt động.
- Responsive tốt trên điện thoại và máy tính.
- Không phát sinh lỗi build hoặc lỗi runtime mới do chỉnh sửa.
- Không có thông tin kinh doanh, đánh giá, tiện nghi hoặc giá phòng tự bịa.

## 12. CÁCH TRIỂN KHAI

Hãy thực hiện trực tiếp theo trình tự:

Bước 1: Kiểm tra dự án và lập danh sách các file cần chỉnh sửa.

Bước 2: Xác định mapping giữa các section hiện tại và section mới.

Bước 3: Cập nhật nội dung, màu sắc, typography, hình ảnh và nhận diện thương hiệu.

Bước 4: Điều chỉnh bố cục, CTA, responsive và animation.

Bước 5: Kiểm tra toàn bộ website, chạy build và sửa lỗi phát sinh.

Bước 6: Tổng kết những file đã thay đổi, hình ảnh đã thay thế, chức năng đã kiểm tra và những tài nguyên còn thiếu.

Không chỉ trả về hướng dẫn hoặc ví dụ minh họa. Hãy trực tiếp chỉnh sửa code trong workspace hiện tại và hoàn thành các thay đổi có thể thực hiện được.

Nếu thiếu ảnh thực tế hoặc thông tin kinh doanh, hãy đánh dấu rõ những phần cần chủ sở hữu bổ sung, không tự bịa dữ liệu.

**KẾT QUẢ MONG MUỐN:** Một landing page hoàn chỉnh, đồng bộ nhận diện thương hiệu Ngủ Ấm Ở Đà Lạt, có phong cách boutique homestay ấm áp, hình ảnh đẹp, nội dung giàu cảm xúc, CTA liên hệ rõ ràng và giữ được chất lượng kỹ thuật của dự án gốc.