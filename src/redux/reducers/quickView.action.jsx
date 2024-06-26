export function quickViewReducer(state = [], action) {
  switch (action.type) {
    case "QUICK_VIEW_OPEN":
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }

    case "QUICK_VIEW_CLOSE":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
