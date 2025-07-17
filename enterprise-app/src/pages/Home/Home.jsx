import Cards from "./components/Cards";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="animate-fade-in mb-8 md:mb-12 lg:mb-16 xl:mb-20">
      <Carousel />

      <Cards />
    </div>
  );
}