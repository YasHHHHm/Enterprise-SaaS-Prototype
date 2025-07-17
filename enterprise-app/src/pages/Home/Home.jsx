import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Social from "./components/Social";

export default function Home() {
  return (
    <div className="animate-fade-in mb-8 md:mb-12 lg:mb-16 xl:mb-20">
      <Carousel />

      <Cards />

      <Social />
    </div>
  );
}