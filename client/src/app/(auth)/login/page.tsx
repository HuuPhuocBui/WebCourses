'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import SocialLoginOptions from '@/components/SocialLoginOptions';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Đăng nhập với email: ${email}, mật khẩu: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Đăng nhập để tiếp tục hành trình học tập của bạn
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-2 w-full max-w-md bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
      >
        <FaEnvelope />
        Đăng nhập
      </button>

      <SocialLoginOptions />

      <div className="text-sm text-gray-600 bg-gray-100 w-full max-w-md text-center py-4 rounded-md">
        Bạn không có tài khoản?{' '}
        <Link href="/register" className="text-purple-600 font-semibold hover:underline">
          Đăng ký
        </Link>
      </div>
    </div>
  );
}

