export function addToCartAction(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function removeFromCartAction(payload) {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
}

export function emptyTheCartAction(payload) {
  return {
    type: "EMPTY_THE_CART",

    payload,
  };
}

export function setToCartAction(payload) {
  return {
    type: "SET_TO_CART",
    payload,
  };
}

export function removeFromListAction(payload) {
  return {
    type: "REMOVE_FROM_LIST",
    payload,
  };
}
