import {fetchComments, sendComments} from '../api-actions/api-actions-comments';
import {createSlice} from '@reduxjs/toolkit';
import {CommentStatus, NameSpace} from '../../conts';
import {Comments} from '../../types/data';

type initialStateComments = {
  comments: Comments;
  status: CommentStatus ;
};

const initialState: initialStateComments = {
  comments: [],
  status: CommentStatus.Loading,
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(sendComments.pending, (state) =>{
        state.status = CommentStatus.Loading;
      })
      .addCase(sendComments.fulfilled, (state, action) => {
        state.status = CommentStatus.Loaded;
        state.comments.push(action.payload);
      })
      .addCase(sendComments.rejected, (state) =>{
        state.status = CommentStatus.FailToLoad;
      });
  },
  selectors: {
    comments: (state) => state.comments,
    status: (state) => state.status
  }
});
