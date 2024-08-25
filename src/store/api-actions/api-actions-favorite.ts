import {createAsyncThunk} from '@reduxjs/toolkit';
import {ChosenOffer, Offers} from '../../types/data';
import {AppDispatch, State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../conts';
import {FavoriteData} from '../../types/api-actions';

export const fetchFavorite = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);

    return data;
  });

export const addFavorite = createAsyncThunk<ChosenOffer, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/offerId/status',
  async({id, status}, {extra: api}) => {
    const {data} = await api.post<ChosenOffer>(`${APIRoute.Favorite}/${id}/${status}`);


    return data;
  });
