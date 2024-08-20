import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {CurrentOffer, Offers} from '../types/offers-types';
import {isloadOffers, requireAuthorization, setError, uploadAnComments, uploadAnOffer, uploadAnOffers, uploadAnOtherPlaces, uploadAnUserData} from './action';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../conts';
import { AuthData, UserData } from '../types/auth-data';
import { deleteToken, saveToken } from '../services/token';
import { store } from '.';
import { Comments } from '../types/comments-types';

export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isloadOffers(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(isloadOffers(false));
    dispatch(uploadAnOffers(data));
  }
);

export const getCurrentOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/id',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<CurrentOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(uploadAnOffer(data));
  });

export const getComment = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/id',
  async (id,{dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    dispatch(uploadAnComments(data));
  });

export const getOtherPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/id/nearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(uploadAnOtherPlaces(data));
  });

export const getAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'authorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(uploadAnUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  });

export const loginAuthData = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getAuthorizationStatus());
  });

export const logoutAuthData = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Login);
      deleteToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    });

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);
