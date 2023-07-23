import { apiSlice } from "./apiSlice";
const USERS_URL = "https://policycon-backend.azurewebsites.net/";

export const subscriberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${
            JSON.parse(localStorage.getItem("tokens") || "").access
          }`,
        },
        body: data,
      }),
    }),
    
  }),
});

export const {
  useUserLoginMutation
  
} = subscriberApiSlice;
