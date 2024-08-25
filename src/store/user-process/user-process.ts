import {fetchAuthorizationStatus, loginAuthData, logoutAuthData} from '../api-actions/api-actions-user';
import {AuthorizationStatus, NameSpace} from '../../conts';
import {createSlice} from '@reduxjs/toolkit';
import {UserData} from '../../types/api-actions';


type initialStateUser = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialState: initialStateUser = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthorizationStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchAuthorizationStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAuthData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAuthData.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAuthData.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });

  },
  selectors: {
    authorizationStatus: (state) => state.authorizationStatus,
    user: (state) => state.user
  }
});
