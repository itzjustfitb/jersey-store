export function quickViewOpenAction(payload) {
  return {
    type: "QUICK_VIEW_OPEN",
    payload,
  };
}

export function quickViewCloseAction(payload) {
  return {
    type: "QUICK_VIEW_CLOSE",
    payload,
  };
}
