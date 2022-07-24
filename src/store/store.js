import { configureStore } from "@reduxjs/toolkit";
import marketItemSlice from "./features/marketItem/marketItemSlice";

export const store = configureStore({
	reducer: { marketItem: marketItemSlice.reducer }
});
