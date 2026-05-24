import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/instructors"
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcommingWebiners from "@/components/UpcommingWebiners";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center text White">ABC Music Academy</h1> */}
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <MusicSchoolTestimonialCards/>
      <UpcommingWebiners/>
      <Instructors/>
      <Footer/>
    </main>
    
  );
}
