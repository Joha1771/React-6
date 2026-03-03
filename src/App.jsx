import "./App.css";
import CardsSection from "./Components/CardsSection/CardsSection";
import ContentCards from "./Components/ContentCards/ContentCards";
import HeroSection from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <main>
        <div className="w-full">
          <HeroSection />
          <CardsSection />
        </div>
      </main>
    </>
  );
}

export default App;
