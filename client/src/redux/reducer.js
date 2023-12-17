import {combineReducers} from '@reduxjs/toolkit';
import postSlice from './postSlice';
import themeSlice from './theme';
import userSlice from './userSlice';

const rootReducer =combineReducers({
    user:userSlice,
    theme:themeSlice,
    posts:postSlice
})

export {rootReducer};