import { useSelector } from "react-redux";
import Hero from "../Components/Home/Hero";
import Products from "../Components/Home/Products";
import QuickView from "../Components/Home/QuickView";
function Home() {
  const { quickViewList } = useSelector((state) => state);
  return (
    <main id="home">
      <Hero />
      <Products />
      <QuickView item={quickViewList} />
    </main>
  );
}

export default Home;
