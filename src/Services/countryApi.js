import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://restcountries.com/v2/` }),
  endpoints: (builder) => ({
    getCountryDetails: builder.query({
      query: () => `all?fields=name,region,flag`,
    }),
  }),
});

export const { useGetCountryDetailsQuery } = countryApi;
