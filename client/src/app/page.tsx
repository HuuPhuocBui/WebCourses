import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import Header from '@/components/Header_home';
import Slideshow from '@/components/SlideShow';
import Footer from "@/components/Footer";
import CourseList from "@/components/CourseList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <Slideshow />
        <CourseList />
      </main>
      <Footer />
    </>
  );
}
