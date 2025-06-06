'use client';

import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

export default function SocialLoginOptions() {
  return (
    <>
      <div className="flex items-center my-6 w-full max-w-md">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="px-2 text-gray-500 text-sm">Các tuỳ chọn khác</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      <div className="flex space-x-4 mb-6">
        <button className="border p-3 rounded-md hover:shadow-md transition">
          <FaGoogle className="text-xl text-[#DB4437]" />
        </button>
        <button className="border p-3 rounded-md hover:shadow-md transition">
          <FaFacebook className="text-xl text-[#1877F2]" />
        </button>
        <button className="border p-3 rounded-md hover:shadow-md transition">
          <FaApple className="text-xl text-black" />
        </button>
      </div>
    </>
  );
}
