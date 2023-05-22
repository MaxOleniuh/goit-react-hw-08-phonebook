import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const backend = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
// Utility to add JWT
const setAuthHeader = token => {
  backend.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = token => {
  backend.defaults.headers.common.Authorization = '';
};
/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await backend.post('/users/signup', credentials);
      // After succesful registration, add token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await backend.post('/users/login', credentials);
      // After succesful login, add token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await backend.post('/users/logout');
    // After succesful logout, remove the token from the HTTP header
    clearAuthHeader();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
