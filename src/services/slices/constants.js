import { createSlice } from "@reduxjs/toolkit";

export const getConstants = createSlice({
	name: "constants",
	initialState: {
		loginState: 0,
		walletInfo: {},
		profileData: {},
	},
	reducers: {
		setLoginState: (state, action) => {
			state.loginState = action.payload;
		},
		setWalletInfo: (state, action) => {
			state.walletInfo = action.payload;
		},
		setProfileData: (state, action) => {
			state.profileData = action.payload;
		},
	},
});

export const { setLoginState, setWalletInfo, setProfileData } =
	getConstants.actions;

export default getConstants.reducer;
