import "./App.css";
import Art from "./Components/Art/Art";
import Bestsellers from "./Components/Bestsellers/Bestsellers";
import CardsSection from "./Components/CardsSection/CardsSection";
import ContentCards from "./Components/ContentCards/ContentCards";
import HeroSection from "./Components/Hero/Hero";
import furniture from "./assets/furniture.png";
import furniture2 from "./assets/furniture2.svg";
import TopFooter from "./assets/TopFooter.svg";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <main className="w-full">
        <div>
          <HeroSection />
          <CardsSection />
          <Bestsellers />
          <section className="pb-[100px]">
            <div className="container flex mx-auto max-w-7xl ">
              <div>
                <img src={furniture} alt="" />
              </div>
              <div className="bg-[#E9672B] flex flex-col items-center justify-center gap-5 text-center text-[#ffffff] py-10 max-w-110 w-full">
                <img src={furniture2} alt="" />
                <h2 className="text-[36px]">
                  Floyd Furniture Meets Feather Flexibility
                </h2>
                <button className="bg-[#ffffff] text-[#000000] py-4 px-7 rounded-full hover:bg-[#f0f0f0] cursor-pointer">
                  Explore Floyd Furniture
                </button>
              </div>
            </div>
          </section>
          <Art />
          <section className="pb-[100px] bg-[#FBF8F5] pt-[100px]">
            <div className="container flex mx-auto max-w-7xl flex-col items-center justify-center gap-5 text-center text-[#000000]">
              <img src={TopFooter} alt="" />
              <div className="max-w-[300px]">
                <h2 className="text-[36px]">
                  Feather is the stress-free way to furnish your home
                </h2>
              </div>
              <button className="bg-[#E9672B] text-[#000000] py-4 px-7 rounded-full hover:bg-[#d9571b] cursor-pointer">
                Shop Furniture
              </button>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
