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
    console.log(view);
  }, [item.length]);

  return (
    <div
      onClick={() => dispatch(quickViewCloseAction(item[0]))}
      className={`quick__view ${view ? "quick__view-show" : ""}`}
    >
      <div className="quick__view-container">
        <i
          onClick={() => dispatch(quickViewCloseAction(item[0]))}
          className="ri-close-line"
        ></i>
        <img src={item[0]?.thumbnail} alt={item[0]?.title} />
      </div>
    </div>
  );
}

export default QuickView;
