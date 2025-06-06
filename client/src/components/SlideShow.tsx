'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    title: 'Thành Quả của Học Viên',
    description:
      'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    buttonText: 'XEM THÀNH QUẢ',
    image: '/slide-student.png',
  },
  {
    title: 'Cùng nhau phát triển',
    description:
      'Khám phá cộng đồng và những sản phẩm thực tế được tạo ra bởi học viên từ khắp nơi.',
    buttonText: 'KHÁM PHÁ',
    image: '/slide-community.png',
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];

  return (
    <div className="flex items-center justify-center py-10 relative bg-white">
      {/* Nút prev */}
      <button
        onClick={prevSlide}
        className="absolute left-[calc(50%-640px+12px)] top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Nội dung slide */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-indigo-500 to-blue-400 rounded-2xl text-white px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text bên trái */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
          <p className="mb-6 text-lg">{slide.description}</p>
          <button className="px-6 py-2 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            {slide.buttonText}
          </button>
        </div>

        {/* Hình bên phải */}
        {/* <div className="md:w-1/2">
          <img
            src={slide.image}
            alt="slide image"
            className="w-full max-h-[300px] object-contain"
          />
        </div> */}
      </div>

      {/* Nút next */}
      <button
        onClick={nextSlide}
        className="absolute right-[calc(50%-640px+12px)] top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}






