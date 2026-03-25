// localStorage
// Lưu dữ liệu( bắt buộc JSON.stringify nêu là object hoặc array)
localStorage.setItem("key", JSON.stringify(data));

// Lấy dữ liệu (|| [] để tránh lỗi khi chưa có dữ liệu)
const data = JSON.parse(localStorage.getItem("key")) || [];
// được dùng trong hàm render data
// Nó có tác dụng lấy dữ liệu trên localStorage

// Xóa một key cụ thể
localStorage.removeItem("key");

// Xóa toàn bộ dữ liệu
localStorage.clear();
