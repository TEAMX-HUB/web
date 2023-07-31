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
        url: `${USERS_URL}/api/v1/building/?name=${data.search}`,
        method: "GET",
      }),
    }),
    getAllSchedule: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/building/?name=${data.search}`,
        method: "GET",
      }),
    }),
    getUserSchedule: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/api/v1/building/?name${data.search}`,
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
} = compaxApiSlice;
