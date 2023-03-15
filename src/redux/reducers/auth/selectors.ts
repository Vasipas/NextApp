import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const getAuthState = (state: RootState) => state.auth;

export const getAuth = createSelector([getAuthState], (auth) => auth);