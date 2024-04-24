import Hero from "../Components/Home/Hero";
import Products from "../Components/Home/Products";
function Home({ setCartListIsActive }) {
  return (
    <main id="home" onClick={() => setCartListIsActive(false)}>
      <Hero />
      <Products />
    </main>
  );
}

export default Home;
