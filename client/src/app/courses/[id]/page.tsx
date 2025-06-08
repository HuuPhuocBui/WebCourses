// src/app/courses/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header_home";
import Footer from "@/components/Footer";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/courses/${id}`)
      .then((res) => res.json())
      .then(setCourse);
  }, [id]);

  if (!course) return <div className="p-4">Loading...</div>;

  return (
    <>
      <Header />
      <div className="w-full px-6 py-8 pl-36 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#0f0f0f] text-white">
        <div className="md:col-span-2 ">
          <p className="text-sm text-gray-500 mb-1">
            CNTT & Phần mềm {">"} Amazon AWS
          </p>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 text-gray-600 text-lg">{course.description}</p>
          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            ⭐ {course.rating} ({course.reviews} đánh giá) • 9.443 học viên
          </div>
          <p className="mt-2 text-sm text-gray-700">
            Được tạo bởi <span className="font-medium">{course.author}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Cập nhật gần nhất: 12/2024 • Ngôn ngữ: Vietnamese
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="md:col-span-2 ">
          {/* Nội dung học (giả lập) */}
          <div className="mt-8 border border-gray-300 p-2 rounded">
            <h2 className="text-xl font-semibold mb-2">Nội dung bài học</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
              <li>Hiểu về các dịch vụ cốt lõi của AWS</li>
              <li>Hiểu về kiến trúc toàn cầu và mô hình trách nhiệm chia sẻ</li>
              <li>Quản lý chi phí & bảo mật</li>
              <li>Bài học thực tế và cấu hình trên AWS</li>
            </ul>
          </div>

          {/* Các chủ đề liên quan */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              Khám phá các chủ đề liên quan
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded">Amazon AWS</span>
              <span className="bg-gray-100 px-3 py-1 rounded">
                CNTT & Phần mềm
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded">Cloud</span>
            </div>
          </div>
        </div>

        {/* Right - Purchase Box */}
        <div className="shadow-lg border rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-900">
              {course.price.toLocaleString()} đ
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded">
                Thêm vào giỏ hàng
              </button>
              <button className="border border-purple-600 text-purple-600 font-semibold py-2 rounded hover:bg-purple-50">
                Mua ngay
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Đảm bảo hoàn tiền trong 30 ngày
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <p>✔ 5,5 giờ video theo yêu cầu</p>
              <p>✔ Truy cập trên thiết bị di động và TV</p>
              <p>✔ Quyền truy cập đầy đủ suốt đời</p>
              <p>✔ Giấy chứng nhận hoàn thành</p>
            </div>

            <div className="text-xs text-blue-600 underline mt-3 ">
              <p>Chia sẻ • Tặng khóa học này</p>
              <p className="mt-1">Áp dụng coupon</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
