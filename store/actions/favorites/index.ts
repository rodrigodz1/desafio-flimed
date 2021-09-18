import { SET_FAVORITES, REMOVE_FAVORITES } from "../";

export const favoriteUpdate = (favorite: string) => ({
  type: SET_FAVORITES,
  payload: favorite,
});

export const favoriteReset = () => {
  return {
    type: REMOVE_FAVORITES,
  };
};
