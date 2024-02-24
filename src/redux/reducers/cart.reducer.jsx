export function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += 1;
      } else {
        state.push(action.payload);
      }
      return [...state];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item !== action.payload);
    case "EMPTY_THE_CART":
      state = [];
      return state;
    default:
      return state;
  }
}
