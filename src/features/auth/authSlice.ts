import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import { PROPS_AUTHEN, PROPS_PROFILE, PROPS_NICKNAME } from '../types';

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    openSignIn: true,
    openSignUp: false,
    openProfile: false,
    isLoadingAuth: false,
    myprofile: {
      id: 0,
      nickName: '',
      userProfile: 0,
      created_on: '',
      img: '',
    },
    profiles: [
      {
        id: 0,
        nickName: '',
        userProfile: 0,
        created_on: '',
        img: '',
      },
    ],
  },
  reducers: {
    fetchCredStart(state) {
      state.isLoadingAuth = true;
    },
    fetchCredEnd(state) {
      state.isLoadingAuth = false;
    },
    setOpenSignIn(state) {
      state.openSignIn = true;
    },
    resetOpenSignIn(state) {
      state.openSignIn = false;
    },
    setOpenSignUp(state) {
      state.openSignUp = true;
    },
    resetOpenSignUp(state) {
      state.openSignUp = false;
    },
    setOpenProfile(state) {
      state.openProfile = true;
    },
    resetOpenProfile(state) {
      state.openProfile = false;
    },
    editNickName(state, action) {
      state.myprofile.nickName = action.payload;
    },
  },
});

export const {
  fetchCredStart,
  fetchCredEnd,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenProfile,
  resetOpenProfile,
  editNickName,
} = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
