import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducers/cart.reducer";
import jerseyReducer from "../reducers/jersey.reducer";

const reducers = combineReducers({
  cartList: cartReducer,
  jerseyList: jerseyReducer,
});

export const globalStore = createStore(reducers);
