// Import các thư viện cần thiết từ React
import React from 'react';

// Định nghĩa kiểu cho các thuộc tính (props) của component Header
interface HeaderProps {
  title: string; // Tiêu đề của trang
  subtitle?: string; // Phụ đề, có thể có hoặc không
}

// Component Header hiển thị tiêu đề và phụ đề
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <header>
    <h1>{title}</h1> {/* Hiển thị tiêu đề */}
    {subtitle && <h2>{subtitle}</h2>} {/* Nếu có phụ đề, hiển thị phụ đề */}
  </header>
);

// Định nghĩa kiểu cho các thuộc tính của component Content
interface ContentProps {
  paragraphs: string[]; // Mảng các đoạn văn bản
}

// Component Content hiển thị các đoạn văn bản
const Content: React.FC<ContentProps> = ({ paragraphs }) => (
  <main>
    {paragraphs.map((para, index) => (
      <p key={index}>{para}</p> // Hiển thị từng đoạn văn bản
    ))}
  </main>
);

// Định nghĩa kiểu cho các thuộc tính của component Footer
interface FooterProps {
  year: number; // Năm hiện tại
  company: string; // Tên công ty hoặc cá nhân
}

// Component Footer hiển thị thông tin bản quyền
const Footer: React.FC<FooterProps> = ({ year, company }) => (
  <footer>
    <p>
      &copy; {year} {company}. All rights reserved.
    </p> {/* Hiển thị thông tin bản quyền */}
  </footer>
);

// Component App là component chính của ứng dụng
const App: React.FC = () => {
  // Dữ liệu mẫu cho trang chủ
  const title = 'Chào mừng đến với Trang Chủ!';
  const subtitle = 'Đây là trang chủ của chúng tôi.';
  const paragraphs = [
    'Đoạn văn bản thứ nhất giới thiệu về nội dung trang.',
    'Đoạn văn bản thứ hai cung cấp thêm thông tin chi tiết.',
    'Đoạn văn bản thứ ba kết luận và mời gọi hành động.',
  ];
  const year = new Date().getFullYear(); // Lấy năm hiện tại
  const company = 'Công ty ABC';

  // Trả về giao diện người dùng của trang chủ
  return (
    <div>
      <Header title={title} subtitle={subtitle} /> {/* Gọi component Header */}
      <Content paragraphs={paragraphs} /> {/* Gọi component Content */}
      <Footer year={year} company={company} /> {/* Gọi component Footer */}
    </div>
  );
};

export default App; // Xuất component App để sử dụng trong các tệp khác

// TEST THỬ TS