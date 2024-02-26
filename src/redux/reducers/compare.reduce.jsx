export function compareReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_COMPARE_LIST":
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_FROM_COMPARE_LIST":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
