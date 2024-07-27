import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className=" h-full w-full">
      <Header />
      <Banner />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </main>
  );
}
