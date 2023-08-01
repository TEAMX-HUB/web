import { apiSlice } from "./apiSlice";
const USERS_URL = "https://compax-backend-api.onrender.com";

export const compaxApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBuildings: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/${data.type}/`,
        method: "GET",
      }),
    }),
    searchData: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/search/${data.type}/?name=${data.search}`,
        method: "GET",
      }),
    }),
    getAllSchedule: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/?name=${data.search}`,
        method: "GET",
      }),
    }),
    getUserSchedule: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/i/schedule/day/?year_group=${encodeURIComponent(
          data.year_group
        )}&department=${encodeURIComponent(data.department)}`,

        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/i/new/`,
        body: data,
        method: "POST",
      }),
    }),
    getRatings: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/api/v1/i/new/`,
        body: data,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetBuildingsMutation,
  useSearchDataMutation,
  useGetAllScheduleMutation,
  useGetUserScheduleMutation,
  useCreateUserMutation,
  useGetRatingsMutation,
} = compaxApiSlice;
