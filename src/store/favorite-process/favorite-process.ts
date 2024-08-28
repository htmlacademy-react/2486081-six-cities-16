import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addFavorite, fetchFavorite} from '../api-actions/api-actions-favorite';
import {Offer, Offers} from '../../types/data';
import {NameSpace} from '../../conts';

type initialStateFavorite = {
  favorite: Offers;
};

const initialState: initialStateFavorite = {
  favorite: [],
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorite.fulfilled,(state, action: PayloadAction<Offers>) => {
        state.favorite = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action: PayloadAction<Offer>) => {
        if (action.payload.isFavorite) {
          state.favorite.push(action.payload);
        } else {
          state.favorite = state.favorite.filter((item) => item.id !== action.payload.id);
        }
      });
  },
  selectors: {
    favorite: (state) => state.favorite
  }
});

