import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from '../slice/cartSlice';
import userReducer from '../slice/userSlice';

const rootReducer = combineReducers({user:userReducer,cart:cartReducer})

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
