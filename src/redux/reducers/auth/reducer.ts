import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
  accessToken: null,
    email: null,
    username: null
}


const auth = createSlice({
	name: '@@auth',
	initialState,
	reducers: {
		loginRequest: (state) => {},
    registrationRequest: (state, action) => {}
    },
  })


 export default auth.reducer;
 export const {loginRequest, registrationRequest} = auth.actions;