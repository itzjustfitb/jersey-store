import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducers/cart.reducer";
import jerseyReducer from "../reducers/jersey.reducer";
import { quickViewReducer } from "../reducers/quickView.action";

const reducers = combineReducers({
  cartList: cartReducer,
  jerseyList: jerseyReducer,
  quickViewList: quickViewReducer,
});

export const globalStore = createStore(reducers);
