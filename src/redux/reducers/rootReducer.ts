import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth/reducer';

const createRootReducer = () =>
	combineReducers({ auth });

export default createRootReducer;