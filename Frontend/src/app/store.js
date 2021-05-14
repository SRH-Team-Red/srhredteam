import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

//reducer is something that listen to actions login or logout
//store is the layer data layer
//userlsice--here we can take the user info
//app s lice
