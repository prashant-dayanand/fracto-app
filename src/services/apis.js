import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4000",
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
		connect: builder.mutation({
			query: (data) => ({
				url: "/user/user",
				method: "POST",
				body: data,
			}),
		}),
		addCategory: builder.mutation({
			query: (data) => ({
				url: "/collection/addCollection",
				method: "POST",
				body: data,
			}),
		}),

		editCollection: builder.mutation({
			query: (data) => ({
				url: "/collection/editCollection",
				method: "POST",
				body: data,
			}),
		}),

		editProfile: builder.mutation({
			query: (data) => ({
				url: "/user/editUserProfile",
				method: "PUT",
				body: data,
			}),
		}),

		addNft: builder.mutation({
			query: (data) => ({
				url: "/nft/nft",
				method: "POST",
				body: data,
			}),
		}),

		disconnect: builder.mutation({
			query: (data) => ({
				url: "/user/disconnect",
				method: "POST",
				body: data,
			}),
		}),

		saleNft: builder.mutation({
			query: (data) => ({
				url: "/nft/sale-nft",
				method: "POST",
				body: data,
			}),
		}),

		listCategory: builder.query({
			query: () => ({
				url: "/collection/allCollections",
				method: "GET",
			}),
		}),

		nftList: builder.query({
			query: () => ({
				url: "nft/listNft",
				method: "GET",
			}),
		}),

		userList: builder.query({
			query: () => ({
				url: "/user/listAllUsers",
				method: "GET",
			}),
		}),

		getProfile: builder.query({
			query: (data) => ({
				url: `/user/getUserProfile?id=${data}`,
				method: "GET",
			}),
		}),

		nftById: builder.query({
			query: (data) => ({
				url: `/nft/nft-data?id=${data}`,
				method: "GET",
			}),
		}),

		collectionById: builder.query({
			query: (data) => ({
				url: `/collection/collection?id=${data}`,
				method: "GET",
			}),
		}),

		marketplace: builder.query({
			query: (data) => ({
				url: `nft/onSale`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useConnectMutation,
	useAddCategoryMutation,
	useListCategoryQuery,
	useUserListQuery,
	useAddNftMutation,
	useNftListQuery,
	useEditProfileMutation,
	useGetProfileQuery,
	useDisconnectMutation,
	useCollectionByIdQuery,
	useEditCollectionMutation,
	useNftByIdQuery,
	useSaleNftMutation,
	useMarketplaceQuery,
} = fractoApis;
