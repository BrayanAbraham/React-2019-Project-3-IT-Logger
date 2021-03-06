import {
  SET_LOADING,
  GET_TECHS,
  TECHS_ERROR,
  ADD_TECHS,
  DELETE_TECH
} from "./types";

//Get Techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Add Techs
export const addTechs = tech => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Get Techs from server
export const deleteTechs = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, { method: "DELETE" });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
