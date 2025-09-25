import { configureStore } from '@reduxjs/toolkit';
import { countryApi } from '../Services/countryApi';
import carouselReducer from "../Slice/carouselSlice";
import countryReducer from "../Slice/countrySlice";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    carousel: carouselReducer,
    country:countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});