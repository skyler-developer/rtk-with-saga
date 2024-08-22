import { put, takeEvery, delay } from "redux-saga/effects";

import { incrementByAmount } from "../reducer/counterSlice";

function* workSaga_addNumber(action) {
    console.log("action", action);
    yield delay(2000);
    yield put(incrementByAmount(action.payload));
}

function* watchSaga() {
    yield takeEvery(incrementByAmount(1).type, workSaga_addNumber);
}

export default watchSaga;
