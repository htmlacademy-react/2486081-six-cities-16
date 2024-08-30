import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {deleteToken, saveToken} from '../../services/token';
import {APIRoute, NameSpace} from '../../conts';
import {AuthData, UserData} from '../../types/api-actions';

export const fetchAuthorizationStatus = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/getAuthorizationStatus`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);

    return data;
  });

export const loginAuthData = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/postUserData`,
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);

    return data;
  });

export const logoutAuthData = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    `${NameSpace.User}/deleteUserData`,
    async (_arg, {extra: api}) => {
      await api.delete(APIRoute.Login);
      deleteToken();
    });
