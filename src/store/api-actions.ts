import {createAsyncThunk} from '@reduxjs/toolkit';
import { store } from '.';
import { TIMEOUT_SHOW_ERROR } from '../conts';
import { setError } from './action';


export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);
