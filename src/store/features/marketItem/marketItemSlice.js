import { createSlice } from "@reduxjs/toolkit";

const marketItemSlice = createSlice({
	name: "marketItem",
	initialState: {
		marketItems: [
			{
				userName: "user 1",
				itemName: "curry1",
				nirvana: "140",
				explanation: "test1",
				thumbUp: 0,
				thumbDown: 1
			},
			{
				userName: "user 2",
				itemName: "Bread2",
				nirvana: "32",
				explanation: "test2",
				thumbUp: 1,
				thumbDown: 1
			},
			{
				userName: "user 3",
				itemName: "tea",
				nirvana: "22",
				explanation: "test3",
				thumbUp: 30,
				thumbDown: 1
			},
			{
				userName: "user 4",
				itemName: "sandwich4",
				nirvana: "140",
				explanation: "test1",
				thumbUp: 10,
				thumbDown: 1
			},
			{
				userName: "user 5",
				itemName: "snack5",
				nirvana: "32",
				explanation: "test2",
				thumbUp: 10,
				thumbDown: 1
			},
			{
				userName: "user 6",
				itemName: "milk6",
				nirvana: "22",
				explanation: "test3",
				thumbUp: 10,
				thumbDown: 1
			}
		]
	},
	reducers: {}
});

export const { increment, decrement } = marketItemSlice.actions;

export default marketItemSlice;
