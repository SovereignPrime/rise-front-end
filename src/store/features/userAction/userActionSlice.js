import { createSlice } from "@reduxjs/toolkit";

const userActionSlice = createSlice({
	name: "userAction",
	initialState: {
		userActions: [
			{
				userId: 1,
				perName: "Sam Eric",
				actionType: "verification"
			},
			{
				userId: 2,
				perName: "Sam2 Eric",
				actionType: "verification"
			}
		]
	},
	reducers: {}
});

export const {} = userActionSlice.actions;

export default userActionSlice;
