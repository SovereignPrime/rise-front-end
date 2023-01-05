import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../../styles/assets/img/jessie.png";

const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [
			{
				Id: 1,
				perName: "Eric Smith",
				perPic: img1,
				Intro: "I like everything about vehicle"
			},
			{
				Id: 2,
				perName: "Sam Smith",
				perPic: img1,
				Intro: "I like everything about vehicle"
			},
			{
				Id: 3,
				perName: "Sam2 Smith",
				perPic: img1,
				Intro: "I like everything about vehicle"
			},
			{
				Id: 4,
				perName: "Sam3 Smith",
				perPic: img1,
				Intro: "I like everything about vehicle"
			},
			{
				Id: 5,
				perName: "Sam4 Smith",
				perPic: img1,
				Intro: "I like everything about vehicle"
			}
		]
	},
	reducers: {}
});

export const {} = userSlice.actions;

export default userSlice;
