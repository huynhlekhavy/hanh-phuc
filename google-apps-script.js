/**
 * Google Apps Script để xử lý form RSVP Wedding
 * Hướng dẫn sử dụng:
 * 1. Truy cập https://script.google.com/
 * 2. Tạo project mới
 * 3. Xóa code mặc định và paste code này vào
 * 4. Lưu và deploy as web app
 * 5. Copy URL và thay thế trong main.js
 */

function doGet(e) {
  try {
    // Lấy dữ liệu từ form
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var events = e.parameter.events || '';
    var guest = e.parameter.guest || '';
    var notes = e.parameter.notes || '';
    
    // Kiểm tra dữ liệu bắt buộc
    if (!name || !email || !events || !guest) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Vui lòng điền đầy đủ thông tin bắt buộc'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Lưu vào Google Sheets (tùy chọn)
    saveToSheet(name, email, events, guest, notes);
    
    // Gửi email thông báo (tùy chọn)
    sendEmailNotification(name, email, events, guest, notes);
    
    // Trả về kết quả thành công
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Cảm ơn bạn đã xác nhận tham dự!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Xử lý lỗi
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Có lỗi xảy ra: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  // Xử lý POST request tương tự GET
  return doGet(e);
}

function saveToSheet(name, email, events, guest, notes) {
  try {
    // Tạo hoặc mở Google Sheet
    var sheetId = 'YOUR_SHEET_ID_HERE'; // Thay bằng ID của Google Sheet
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Thêm header nếu sheet trống
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Thời gian', 'Tên', 'Email', 'Sự kiện', 'Số khách', 'Lời nhắn']
      ]);
    }
    
    // Thêm dữ liệu mới
    var timestamp = new Date();
    sheet.appendRow([timestamp, name, email, events, guest, notes]);
    
  } catch (error) {
    console.log('Lỗi khi lưu vào Sheet: ' + error.toString());
  }
}

function sendEmailNotification(name, email, events, guest, notes) {
  try {
    var subject = 'Xác nhận tham dự cưới - ' + name;
    var body = `
      <h2>Xác nhận tham dự cưới</h2>
      <p><strong>Tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Sự kiện:</strong> ${events}</p>
      <p><strong>Số khách:</strong> ${guest}</p>
      <p><strong>Lời nhắn:</strong> ${notes}</p>
      <p><strong>Thời gian:</strong> ${new Date()}</p>
    `;
    
    // Gửi email đến địa chỉ của bạn
    var yourEmail = 'your-email@gmail.com'; // Thay bằng email của bạn
    MailApp.sendEmail({
      to: yourEmail,
      subject: subject,
      htmlBody: body
    });
    
  } catch (error) {
    console.log('Lỗi khi gửi email: ' + error.toString());
  }
}

// Hàm test để kiểm tra script
function testScript() {
  var testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      events: 'Tiệc nhà trai',
      guest: '2',
      notes: 'Test message'
    }
  };
  
  var result = doGet(testData);
  console.log(result.getContent());
}
