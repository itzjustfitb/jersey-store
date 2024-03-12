export function addToCompareListAction(payload) {
  return {
    type: "ADD_TO_COMPARE_LIST",
    payload,
  };
}
export function removeFromCompareListAction(payload) {
  return {
    type: "REMOVE_FROM_COMPARE_LIST",
    payload,
  };
}

export function setToComparelistAction(payload) {
  return {
    type: "SET_TO_COMPARE_LIST",

    payload,
  };
}
