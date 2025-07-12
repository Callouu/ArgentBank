import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginRequest,
  fetchProfileRequest,
  updateProfileRequest,
  fetchTransactionsRequest,
} from "./userApi";

// Login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const token = await loginRequest({ email, password });
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Get user profile
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const profile = await fetchProfileRequest(token);
      return profile;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Action asynchrone pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ firstName, lastName }, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const updatedProfile = await updateProfileRequest(token, {
        firstName,
        lastName,
      });
      return updatedProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// Action asynchrone pour récupérer les transactions de l'utilisateur
export const fetchUserTransactions = createAsyncThunk(
  "user/fetchUserTransactions",
  async (userId, thunkAPI) => {
    try {
      const transactions = await fetchTransactionsRequest(userId);
      return transactions;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || null,
    profile: null,
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.profile = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    initializeToken: (state) => {
      const token = localStorage.getItem("token");
      state.token = token || null;
      state.isAuthenticated = !!token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchUserTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, initializeToken } = userSlice.actions;
export default userSlice.reducer;
