import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { quickViewCloseAction } from "../../redux/actions/quickView.action";

function QuickView({ item }) {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (item.length === 1) {
      setView(true);
      document.body.style.overflowY = "hidden";
    } else {
      setView(false);
      document.body.style.overflow = "auto";
    }
  }, [item.length]);

  const clickToContainer = (e) => {
    console.log("Sala");
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => dispatch(quickViewCloseAction(item[0]))}
      className={`quick__view ${view ? "quick__view-show" : ""}`}
    >
      <div className="quick__view-container">
        <div onClick={clickToContainer} className="quick__view-content">
          <i
            onClick={() => dispatch(quickViewCloseAction(item[0]))}
            className="ri-close-line"
          ></i>
          <div className="quick__view-left">
            <img src={item[0]?.thumbnail} alt={item[0]?.title} />
            <div className="quick__view-actions">
              <div className="quick__view-icon">
                <div className="tooltip">Bəyən</div>
                <i className="ri-heart-line"></i>
              </div>
              <div className="quick__view-icon">
                <div className="tooltip">Müqayisə et</div>
                <i className="ri-loop-left-line"></i>
              </div>
            </div>
          </div>
          <div className="quick__view-right">
            <div className="quick__view-right-container">
              <h1>{item[0]?.title}</h1>
              <p>
                {item[0]?.price} <span>AZN</span>
              </p>
              <p>Sifarişlər 4-6 gün ərzində təhvil verilir.</p>
              <div className="quick__view-basket">
                <div className="quick__view-counter">
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>
                <button className="quick__view-add">SƏBƏTƏ AT</button>
              </div>
              <div className="quick__view-description">
                <p>
                  Yeni buraxılmış <span>{item[0]?.title}</span> ilə Blaugrana
                  ehtirasınızı ortaya qoymağa hazır olun. Yalnız JerseyStore.az
                  saytında mövcud olan məşhur Blaugrana formasını geyinərək
                  kluba sarsılmaz dəstəyinizi göstərin.
                </p>
                <p>
                  Title: <span>{item[0]?.title}</span>
                </p>
                <p>
                  Rating:
                  <span>
                    <span>{item[0]?.rating}</span>
                    <i className="ri-star-fill"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
