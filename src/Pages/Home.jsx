import { useSelector } from "react-redux";
import Hero from "../Components/Home/Hero";
import Products from "../Components/Home/Products";
import QuickView from "../Components/Home/QuickView";
function Home() {
  return (
    <main id="home">
      <Hero />
      <Products />

      <QuickView />
    </main>
  );
}

export default Home;
