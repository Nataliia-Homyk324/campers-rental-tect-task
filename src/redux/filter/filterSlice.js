
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  radio: false,
  van: false,
  fullyIntegrated: false,
  alcove: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    toggleAC: (state) => {
      state.AC = !state.AC;
    },
    toggleTransmission: (state) => {
      state.transmission = !state.transmission;
    },
    toggleKitchen: (state) => {
      state.kitchen = !state.kitchen;
    },
    toggleTV: (state) => {
      state.TV = !state.TV;
    },
    toggleBathroom: (state) => {
      state.bathroom = !state.bathroom;
    },
    toggleRadio: (state) => {
      state.radio = !state.radio;
    },
    toggleAlcove: (state) => {
      state.alcove = !state.alcove;
    },
    toggleVan: (state) => {
      state.van = !state.van;
    },
    toggleFullyIntegrated: (state) => {
      state.fullyIntegrated = !state.fullyIntegrated;
    },
    resetFilters: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setLocation,
  setForm,
  toggleAC,
  toggleTransmission,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  toggleRadio,
  toggleAlcove,
  toggleVan,
  toggleFullyIntegrated,
  resetFilters
} = filterSlice.actions;

export default filterSlice.reducer;