import { combineReducers } from "redux";
import favoritesReducer from "./favorites";

export default combineReducers({
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof favoritesReducer>;
