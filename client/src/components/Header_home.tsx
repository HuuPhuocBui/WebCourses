'use client';

import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600">
        <span className="text-black">u</span>
        <span className="text-purple-600">demy</span>
      </div>

      {/* Search bar */}
      <div className="flex-1 mx-6">
        <div className="relative w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Tìm kiếm nội dung bất kỳ"
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-4 py-2 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-50"
        >
          Đăng nhập
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Đăng ký
        </Link>
      </div>
    </header>
  );
}