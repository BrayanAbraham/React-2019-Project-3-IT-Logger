import {
  SET_LOADING,
  GET_TECHS,
  TECHS_ERROR,
  ADD_TECHS,
  DELETE_TECH
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        loading: false,
        techs: action.payload
      };
    case ADD_TECHS:
      return {
        ...state,
        loading: false,
        techs: [...state.techs, action.payload]
      };
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
