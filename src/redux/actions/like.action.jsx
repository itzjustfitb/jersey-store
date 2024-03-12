export function addToWishListAction(payload) {
  return {
    type: "ADD_TO_WISHLIST",
    payload,
  };
}
export function removeFromWishListAction(payload) {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload,
  };
}

export function setToWishlistAction(payload) {
  return {
    type: "SET_TO_WISHLIST",

    payload,
  };
}
