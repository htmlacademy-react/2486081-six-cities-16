import {createAsyncThunk} from '@reduxjs/toolkit';
import {ChosenOffer, Offers} from '../../types/data';
import {AppDispatch, State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, NameSpace} from '../../conts';

export const fetchOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/getOffers`,
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
  `${NameSpace.Offers}/getChosenOffer`,
  async (id, {extra: api}) => {
    const {data} = await api.get<ChosenOffer>(`${APIRoute.Offers}/${id}`);

    return data;
  });

export const fetchOtherOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/getOtherOffers`,
  async (id, {extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);

    return data;
  });
