'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import SocialLoginOptions from '@/components/SocialLoginOptions';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
        }

        alert('Đăng ký thành công!');
        window.location.href = '/login';
      } else {
        alert(data.message || 'Đăng ký thất bại!');
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra khi đăng ký.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Tạo tài khoản để bắt đầu học tập
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
        onClick={handleRegister}
        className="flex items-center justify-center gap-2 w-full max-w-md bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
      >
        <FaEnvelope />
        Đăng ký
      </button>

      <SocialLoginOptions />

      <div className="text-sm text-gray-600 mt-6 bg-gray-100 w-full max-w-md text-center py-4 rounded-md">
        Bạn đã có tài khoản?{' '}
        <Link href="/login" className="text-purple-600 font-semibold hover:underline">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}
