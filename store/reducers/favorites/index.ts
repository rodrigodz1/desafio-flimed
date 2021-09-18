import { HYDRATE } from "next-redux-wrapper";
import { SET_FAVORITES, REMOVE_FAVORITES } from "../../actions";

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.favorite };
    case SET_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
