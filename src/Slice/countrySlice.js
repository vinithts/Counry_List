import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    allCountries: [],
    asiaCountries: [],
    europeCountries: [],
  },
  reducers: {
    setCountries: (state, action) => {
      const countries = action.payload || [];
      state.allCountries = countries;
      state.asiaCountries = countries.filter(
        (country) => country.region === "Asia"
      );
      state.europeCountries = countries.filter(
        (country) => country.region === "Europe"
      );
    },
  },
});

export const { setCountries } =
  countrySlice.actions;

export default countrySlice.reducer;
