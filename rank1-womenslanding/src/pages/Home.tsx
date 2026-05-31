import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import WhyShop from "../components/WhyShop";
import FeaturedCollections from "../components/FeaturedCollections";
import ValueForMoney from "../components/ValueForMoney";
import PlayComfort from "../components/PlayComfort";
import Testimonials from "../components/Testimonials";
import StoreSection from "../components/StoreSection";
import Footer from "../components/Footer";

import bg from "../assets/herobackground/hero1.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen">

      {/* Shared Navbar + Hero Background */}
      <div className="relative overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src={bg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-white/15 z-10" />

        <div className="relative z-20">
          <Navbar />
          <Hero />
        </div>

      </div>

      <CategorySection />
      <WhyShop />
      <FeaturedCollections />
      <ValueForMoney />
      {/* <PlayComfort /> */}
      <Testimonials />
      <StoreSection />
      <Footer />
    </div>
  );
}