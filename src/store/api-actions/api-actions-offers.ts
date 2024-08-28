import {createAsyncThunk} from '@reduxjs/toolkit';
import {ChosenOffer, Offers} from '../../types/data';
import {AppDispatch, State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../conts';

export const fetchOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);

    return data;
  }
);

export const fetchChosenOffer = createAsyncThunk<ChosenOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/id',
  async (id, {extra: api}) => {
    const {data} = await api.get<ChosenOffer>(`${APIRoute.Offers}/${id}`);

    return data;
  });

export const fetchOtherOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/id/nearby',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);

    return data;
  });
