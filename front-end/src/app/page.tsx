import BestSellers from "@/components/home/BestSellers";
import HandPicked from "@/components/home/HandPicked";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/commonComponents/Navbar";
import NewArrival from "@/components/home/NewArrival";
import NewsLetter from "@/components/home/NewsLetter";
import ProductCatalog from "@/components/home/ProductCatalog";
import Footer from "@/components/commonComponents/Footer";
import BookCategories from "@/components/home/BookCategories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BookCategories />
      <NewsLetter />
      <NewArrival />
      <BestSellers />
      <HandPicked />
      <ProductCatalog />
      <Footer />
    </div>
  );
}
