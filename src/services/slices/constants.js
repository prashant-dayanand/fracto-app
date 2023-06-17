import { createSlice } from "@reduxjs/toolkit";

export const getConstants = createSlice({
	name: "constants",
	initialState: {
		loginState: 0,
	},
	reducers: {
		setLoginState: (state, action) => {
			state.loginState = action.payload;
		},
	},
});

export const { setLoginState } = getConstants.actions;

export default getConstants.reducer;
