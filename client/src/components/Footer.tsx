// components/Footer.tsx

import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cột 1: Logo và mô tả */}
        <div>
          <h2 className="text-lg font-semibold">YourCompany</h2>
          <p className="text-sm mt-2 text-muted-foreground">
            Sáng tạo và phát triển giải pháp số hiện đại.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-base font-medium mb-2">Liên kết</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:underline">Về chúng tôi</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Dịch vụ</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">Chính sách bảo mật</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Liên hệ</Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div>
          <h3 className="text-base font-medium mb-2">Kết nối</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5 hover:text-primary" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-primary" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} YourCompany. Mọi quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;