import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const accessTokenLC:string = JSON.parse(localStorage.getItem('accessToken') || '{}');
const userLC:IUser = JSON.parse(localStorage.getItem('user') || '{}');

// function getCurrentUser(): IUser|null {
//   const userStr = localStorage.getItem('user');
//   try {
//     return JSON.parse(userStr);
//   } catch (ex) {
//     return null; // or do some other error handling
//   }
// }

export interface IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
}

interface IUserState {
  accessToken: string | null;
  error: null | string;
  loading: boolean;
  user: IUser | null;
}

const initialState: IUserState = {
  accessToken: accessTokenLC,
  error: null,
  loading: false,
  user: userLC,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<IUserState>) => {
      state.accessToken = action.payload.accessToken;
      state.error = null;
      state.loading = false;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.accessToken ?? '');
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    authFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    authLogout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.accessToken = null;
      state.error = null;
      state.loading = false;
      state.user = null;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  authFail,
  authLogout,
  authStart,
  loginSuccess,
  registerSuccess,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
