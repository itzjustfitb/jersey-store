import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducers/cart.reducer";
import { quickViewReducer } from "../reducers/quickView.action";
import { likeReducer } from "../reducers/like.reducer";
import { compareReducer } from "../reducers/compare.reduce";

const reducers = combineReducers({
  cartList: cartReducer,
  wishList: likeReducer,
  quickViewList: quickViewReducer,
  compareList: compareReducer,
});

export const globalStore = createStore(reducers);
