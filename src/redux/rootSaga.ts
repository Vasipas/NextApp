import { spawn } from "@redux-saga/core/effects";
// eslint-disable-next-line import/no-cycle
import { authSaga } from "./reducers/auth/saga";

export default function* rootSaga() {
	yield spawn(authSaga);
}