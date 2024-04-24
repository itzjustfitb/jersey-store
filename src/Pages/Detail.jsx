import ProductDetail from "../Components/Detail/ProductDetail";

function Detail({ setCartListIsActive }) {
  return (
    <main id="product" onClick={() => setCartListIsActive(false)}>
      <ProductDetail />
    </main>
  );
}

export default Detail;
