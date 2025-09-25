# Hướng dẫn triển khai Google Apps Script cho Form RSVP

## ⚠️ XỬ LÝ CẢNH BÁO BẢO MẬT GOOGLE

Nếu gặp cảnh báo "Google hasn't verified this app":
1. **Nhấn "Advanced"** trên trang cảnh báo
2. **Nhấn "Go to [Tên app] (unsafe)"**
3. **Chọn "Allow"** để cho phép script chạy

## Bước 1: Tạo Google Apps Script

1. Truy cập https://script.google.com/
2. Đăng nhập bằng tài khoản Google của bạn
3. Nhấn "New Project"
4. Xóa code mặc định và copy toàn bộ nội dung từ file `google-apps-script-simple.js` (phiên bản đơn giản, ít bị cảnh báo)
5. Lưu project với tên "Wedding RSVP Handler"

## Bước 2: Tạo Google Sheet (Tùy chọn)

1. Truy cập https://sheets.google.com/
2. Tạo sheet mới với tên "Wedding RSVP Data"
3. Copy ID của sheet từ URL (phần sau /d/ và trước /edit)
4. Thay thế `YOUR_SHEET_ID_HERE` trong code bằng ID thực tế

## Bước 3: Cấu hình Email (Tùy chọn)

1. Trong file script, thay thế `your-email@gmail.com` bằng email thực tế của bạn
2. Lưu lại script

## Bước 4: Deploy Web App

1. Trong Google Apps Script, nhấn "Deploy" > "New deployment"
2. Chọn type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Nhấn "Deploy"
6. Copy URL được tạo ra (sẽ có dạng: https://script.google.com/macros/s/...)

## Bước 5: Cập nhật Website

1. Mở file `js/main.js`
2. Tìm dòng 118 có URL cũ
3. Thay thế URL cũ bằng URL mới từ bước 4
4. Lưu file

## Bước 6: Test

1. Mở website và thử gửi form
2. Kiểm tra Google Sheet (nếu đã cấu hình)
3. Kiểm tra email (nếu đã cấu hình)

## Lưu ý quan trọng

- URL mới sẽ có dạng: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
- Đảm bảo script được deploy với quyền "Anyone" để website có thể truy cập
- Nếu có lỗi, kiểm tra console trong Google Apps Script để debug

## 🔄 PHƯƠNG ÁN THAY THẾ: SỬ DỤNG GOOGLE FORMS

Nếu vẫn gặp vấn đề với Google Apps Script, bạn có thể sử dụng Google Forms:

1. **Tạo Google Form** tại https://forms.google.com/
2. **Thiết kế form** với các câu hỏi tương tự
3. **Lấy link embed** và thay thế form hiện tại
4. **Xem file `google-forms-solution.html`** để biết cách implement

**Ưu điểm Google Forms:**
- ✅ Không cần xác minh app
- ✅ Tự động lưu dữ liệu vào Google Sheets
- ✅ Giao diện đẹp và responsive
- ✅ Dễ quản lý và xem kết quả
