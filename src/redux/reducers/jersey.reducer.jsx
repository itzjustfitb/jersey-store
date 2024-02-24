// reducers/jerseyReducer.js
const initialState = {
  jerseysList: [],
};

const jerseyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JERSEYS":
      return {
        ...state,
        jerseysList: action.payload,
      };
    default:
      return state;
  }
};

export default jerseyReducer;
