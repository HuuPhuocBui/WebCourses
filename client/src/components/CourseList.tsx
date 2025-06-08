"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8000/api/courses")
      .then((res) => res.json())
      .then(setCourses);
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">Được đề xuất cho bạn</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course: any) => (
          <div
            key={course._id}
            onClick={() => router.push(`/courses/${course._id}`)}
            className="border rounded shadow p-4 cursor-pointer hover:shadow-lg transition"
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
            <h3 className="font-semibold mt-2 line-clamp-2 text-sm">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.author}</p>
            <p className="text-yellow-500 text-sm">⭐ {course.rating} ({course.reviews})</p>
            <p className="text-sm mt-1">
              <span className="text-black font-bold">{course.price.toLocaleString()} ₫</span>
              <span className="line-through text-gray-400 ml-2">{course.oldPrice.toLocaleString()} ₫</span>
            </p>
            {course.isBestSeller && (
              <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                Bán chạy nhất
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

