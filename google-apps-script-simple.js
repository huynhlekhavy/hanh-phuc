/**
 * Google Apps Script đơn giản để xử lý form RSVP Wedding
 * Phiên bản này không cần quyền cao, ít bị Google cảnh báo
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
    
    // Log dữ liệu (có thể xem trong Execution transcript)
    console.log('RSVP Data received:', {
      name: name,
      email: email,
      events: events,
      guest: guest,
      notes: notes,
      timestamp: new Date()
    });
    
    // Trả về kết quả thành công
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Cảm ơn bạn đã xác nhận tham dự!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Xử lý lỗi
    console.log('Error:', error.toString());
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
