# 🚀 Hướng dẫn Deploy Google Apps Script - Chi tiết

## Bước 1: Tạo Google Apps Script

1. **Truy cập** https://script.google.com/
2. **Đăng nhập** bằng tài khoản Google (huynhlekhavy@gmail.com)
3. **Nhấn "New Project"**
4. **Xóa code mặc định** và paste code đã chuẩn bị
5. **Lưu project** với tên "Wedding RSVP Handler"

## Bước 2: Cấu hình Google Sheet

✅ **Đã có sẵn:** Google Sheet ID: `1MqUITe4OHT1bpxZYxx1ZBhBp_4Vhf-LaDMCfCYS5vWk`

**Kiểm tra quyền truy cập:**
1. Mở Google Sheet: https://docs.google.com/spreadsheets/d/1MqUITe4OHT1bpxZYxx1ZBhBp_4Vhf-LaDMCfCYS5vWk
2. Đảm bảo bạn có quyền chỉnh sửa
3. Nếu cần, chia sẻ sheet với tài khoản Google Apps Script

## Bước 3: Deploy Web App

1. **Trong Google Apps Script**, nhấn **"Deploy"** → **"New deployment"**
2. **Chọn type:** "Web app"
3. **Execute as:** "Me (huynhlekhavy@gmail.com)"
4. **Who has access:** "Anyone"
5. **Nhấn "Deploy"**
6. **Copy URL** được tạo ra

## Bước 4: Cập nhật Website

1. **Mở file** `js/main.js`
2. **Tìm dòng 121:** `var realUrl = "YOUR_NEW_GOOGLE_APPS_SCRIPT_URL_HERE";`
3. **Thay thế** `YOUR_NEW_GOOGLE_APPS_SCRIPT_URL_HERE` bằng URL mới từ bước 3
4. **Lưu file**

## Bước 5: Test Form

1. **Mở website** và scroll xuống phần "Bạn tham gia cùng tụi mình chứ?"
2. **Điền form** với thông tin test
3. **Nhấn "Gửi thông tin"**
4. **Kiểm tra:**
   - Thông báo thành công hiển thị
   - Dữ liệu xuất hiện trong Google Sheet
   - Email thông báo gửi đến huynhlekhavy@gmail.com

## Bước 6: Debug nếu có lỗi

**Mở Developer Tools (F12) → Console để xem:**
- `Form data:` - dữ liệu form được gửi
- `Success response:` - phản hồi từ server
- `Error details:` - chi tiết lỗi nếu có

## Các lỗi thường gặp:

### 1. "Google hasn't verified this app"
- **Giải pháp:** Nhấn "Advanced" → "Go to [Tên app] (unsafe)" → "Allow"

### 2. "Script function not found"
- **Giải pháp:** Kiểm tra tên function `doGet` và `doPost` có đúng không

### 3. "Permission denied"
- **Giải pháp:** Kiểm tra quyền truy cập Google Sheet

### 4. "CORS error"
- **Giải pháp:** Đảm bảo deploy với quyền "Anyone"

## Kết quả mong đợi:

✅ **Form gửi thành công** → Hiển thị "Cảm ơn bạn vì đã tham gia cùng tụi mình!"
✅ **Dữ liệu lưu vào Google Sheet** → Có thể xem tại link sheet
✅ **Email thông báo** → Gửi đến huynhlekhavy@gmail.com
✅ **Console log** → Hiển thị thông tin debug

## Lưu ý quan trọng:

- **URL mới** sẽ có dạng: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
- **Không chia sẻ URL** này với người khác để tránh spam
- **Backup code** trước khi deploy
- **Test kỹ** trước khi đưa vào sử dụng thực tế
