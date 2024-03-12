import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishListAction } from "../redux/actions/like.action";
import { toast } from "react-toastify";
import Breadcrumbs from "../Components/Breadcrumbs";
import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";

function WishList() {
  const wishList = useSelector((state) => state.wishList);
  let dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = wishList.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPosts]);

  function removeItem(e, element) {
    e.preventDefault();
    dispatch(removeFromWishListAction(element));
    const filteredWishlist = wishList.filter(
      (product) => product.id !== element.id
    );
    localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
    toast.warning("Bəyəndiklərimdən silindi");
  }
  return (
    <main id="wishlist">
      <div className="wishlist__container">
        {wishList.length ? (
          <div className="wishlist__fill">
            <Breadcrumbs />
            <div className="wishlist__header">
              <h1>BƏYƏNDİKLƏRİNİZİN SİYAHISI</h1>
            </div>
            <div className="wishlist__bottom">
              {wishList.length
                ? currentPosts.map((item) => {
                    return (
                      <div key={item.id} className="wishlist__product">
                        <button
                          onClick={(e) => removeItem(e, item)}
                          className="delete-btn"
                        >
                          <div className="svg-wrapper">
                            <i className="ri-delete-bin-line"></i>
                          </div>
                          <span>Sil</span>
                        </button>

                        <Link
                          to={`/products/${item.id}`}
                          className="product__content"
                        >
                          <img
                            src={item.thumbnail}
                            alt={`${item.title} image`}
                          />
                          <div className="product__desc">
                            <h3>
                              {item.title} – <span>(komandalar üçün)</span>
                            </h3>
                            <p>
                              {item.price}
                              <span> AZN</span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                : ""}
            </div>
            <Pagination
              totalPosts={wishList.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div className="wishlist__empty">
            <i className="ri-heart-line"></i>
            <p>YENİ MƏHSUL BƏYƏNİN.</p>
            <Link to="/">MAĞAZAYA QAYIT</Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default WishList;
