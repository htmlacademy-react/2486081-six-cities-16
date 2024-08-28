import {fetchChosenOffer, fetchOffers, fetchOtherOffers} from '../api-actions/api-actions-offers';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortingType} from '../../conts';
import {ChosenOffer, Offers} from '../../types/data';
import {addFavorite} from '../api-actions/api-actions-favorite';

type initialStateOffers = {
  city: string;
  filter: string;
  offers: Offers;
  chosenOffer: ChosenOffer | null;
  otherOffers: Offers;
  isOffersLoading: boolean;
  isError: boolean;
};

const initialState: initialStateOffers = {
  city: 'Paris',
  filter: 'Popular',
  offers: [],
  chosenOffer: null,
  otherOffers: [],
  isOffersLoading: false,
  isError: false
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.isError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
        state.isError = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
        state.isError = true;
      })

      .addCase(fetchChosenOffer.fulfilled, (state, action) => {
        state.isError = false;
        state.chosenOffer = action.payload;
      })
      .addCase(fetchChosenOffer.rejected, (state) => {
        state.isError = true;
        state.chosenOffer = null;
      })
      .addCase(fetchOtherOffers.fulfilled, (state, action) => {
        state.otherOffers = action.payload;
      })
      .addCase(fetchOtherOffers.rejected, (state) => {
        state.otherOffers = [];
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        const offer = state.offers.find((off) => off.id === action.payload.id);
        if (state.chosenOffer) {
          state.chosenOffer.isFavorite = action.payload.isFavorite;
        }
        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
  },
  selectors: {
    city: (state) => state.city,
    filter: (state) => state.filter,
    offers: (state) => state.offers,
    chosenOffer: (state) => state.chosenOffer,
    otherOffers: (state) => state.otherOffers,
    isOffersLoading:(state) => state.isOffersLoading,
    isError: (state) => state.isError
  },
});

export const {setCity, setFilter} = offersProcess.actions;

export const sortedOffers = createSelector(
  [offersProcess.selectors.city, offersProcess.selectors.offers, offersProcess.selectors.filter],
  (city, offers, filter) =>
    offers.filter((offer) => offer.city.name === city).toSorted((offerA, offerB) => {
      switch (filter) {
        case SortingType.Popular:
          return 1;
        case SortingType.PriceLowToHigh:
          return offerA.price - offerB.price;
        case SortingType.PriceHighToLow:
          return offerB.price - offerA.price;
        case SortingType.TopRatedFirst:
          return offerB.rating - offerA.rating;
        default:
          return 1;
      }
    })
);

