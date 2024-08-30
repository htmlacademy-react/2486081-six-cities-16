import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, NameSpace} from '../../conts';
import {AppDispatch, State} from '../../types/state';
import {AxiosInstance} from 'axios';
import {Comment, Comments} from '../../types/data';
import {CommentData} from '../../types/api-actions';


export const fetchComments = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/getComments`,
  async (id, {extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);

    return data;
  });

export const sendComments = createAsyncThunk<Comment, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/addComment`,
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${id}`, {comment, rating});

    return data;
  });
