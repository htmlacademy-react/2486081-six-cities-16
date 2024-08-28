import {commentsProcess} from './comments-process/comments-process';
import {favoriteProcess} from './favorite-process/favorite-process';
import {combineReducers} from '@reduxjs/toolkit';
import {offersProcess} from './offers-process/offers-process';
import {userProcess} from './user-process/user-process';
import {NameSpace} from '../conts';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
