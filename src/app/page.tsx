import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from "@/assets/car 2 1.png"
import About from "@/components/About";
import Choose from "@/components/Choose";
import RentalDeals from "@/components/RentalDeals";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Choose></Choose>
      <RentalDeals></RentalDeals>
      <About></About>
      <Testimonials></Testimonials>
      <Download></Download>
      <Footer></Footer>
    </main>
  );
}
