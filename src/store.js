import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { fractoApis } from "./services/apis";
import getConstants from "./services/slices/constants";

const reducers = combineReducers({
	[fractoApis.reducerPath]: fractoApis.reducer,
	constants: getConstants,
});

const rootReducer = (state, action) => {
	if (action.type === "logout/logout") {
		state = undefined;
	}
	return reducers(state, action);
};

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey: "my-super-secret-keyForMeta@Prop@$S",
			onError: function (error) {
				console.warn(error);
			},
		}),
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(fractoApis.middleware),
});

export default store;
