import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoritedPhrases: [],
  },
  reducers: {
    clickedOnFavorite: (state, action) => {
      //console.log('i got here somehow');
      //console.log(action.payload.personName);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favoritedPhrases = action.payload.favoritedPhrases;
    },
  },
});

export const { clickedOnFavorite } = favoriteSlice.actions;

export const selectPaymentDetails = (state) => state.favorite;

export default favoriteSlice.reducer;
