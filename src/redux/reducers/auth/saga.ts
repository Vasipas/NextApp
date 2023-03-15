import {call, takeEvery, takeLeading, throttle} from 'redux-saga/effects'
import { isAxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { TRegisterPayload } from '@/fetchers/auth/types';
import { authApi } from "../../../fetchers/auth/index";
import { loginRequest, registrationRequest } from "./reducer";

function* loginRequestWorker () {
    try {
        yield console.log('in saga');
    }
    catch(error) {
        console.error(error)
    }
}
function* registrationWorker (action: PayloadAction<TRegisterPayload>) {
    const { payload } = action;
    try {
    yield call(authApi.postSignUpUser, payload);
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.log(error);
        }
    }
}

export function* authSaga() {
	yield takeEvery(loginRequest.type, loginRequestWorker);
    yield throttle(600, registrationRequest, registrationWorker)
}