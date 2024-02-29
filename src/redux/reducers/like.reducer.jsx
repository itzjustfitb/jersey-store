export function likeReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}
