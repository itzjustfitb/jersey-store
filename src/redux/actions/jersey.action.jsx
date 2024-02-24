import { fetchJerseysFromFirestoreOrAPI } from "../../jerseyService";

// actions/jerseyActions.js
export const setJerseys = (jerseys) => ({
  type: "SET_JERSEYS",
  payload: jerseys,
});

export const fetchJerseys = () => async (dispatch) => {
  try {
    const jerseys = await fetchJerseysFromFirestoreOrAPI();
    dispatch(setJerseys(jerseys));
  } catch (error) {
    console.error("Error fetching jerseys:", error);
  }
};
