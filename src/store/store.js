import { configureStore } from "@reduxjs/toolkit";
import marketItemSlice from "./features/marketItem/marketItemSlice";
import userSlice from "./features/users/usersSlice";
import userActionSlice from "./features/userAction/userActionSlice";

export const store = configureStore({
	reducer: {
		marketItem: marketItemSlice.reducer,
		user: userSlice.reducer,
		userAction: userActionSlice.reducer
	}
});
