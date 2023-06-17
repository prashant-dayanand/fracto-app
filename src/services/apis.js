import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_URL,
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("token");
		headers.set("Authorization", `Bearer ${token}`);
	},
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.data && result?.data?.response_code === 401) {
		window.location.replace(window.location.origin);
		localStorage.clear();
	}
	return result;
};
export const fractoApis = createApi({
	reducerPath: "fractoApis",
	baseQuery: baseQueryWithReauth,
	// refetchOnMountOrArgChange: 0.001,
	// keepUnusedDataFor: 0.000001,
	// skip: true,
	// refetchOnFocus: true,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const { useLoginMutation } = fractoApis;
