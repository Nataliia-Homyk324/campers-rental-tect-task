import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCampers,
  fetchCamperById,
} from './operations.js';

const initialState = {
  campers: [],
  isLoading: false,
  error: null,
  hasMore: false,
  isLoadingCamper: false,
  errorCamper: null,
  selectedCamper: {},
  page: 1,
  total: 0,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (state.page === 1) {
          
          state.campers = action.payload.items;
          // state.campers = [];
        } else {
          
          state.campers = [...state.campers, ...action.payload.items];
        }

        state.total = action.payload.total;
        state.page += 1; 
        state.hasMore = state.campers.length < state.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.campers = [];
        state.hasMore = false;
      })
      .addCase(fetchCamperById.pending, state => {
        state.isLoadingCamper = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoadingCamper = false;
        state.errorCamper = null;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoadingCamper = false;
        state.errorCamper = action.payload;
        state.selectedCamper = {};
      });
  },
});



export default catalogSlice.reducer;