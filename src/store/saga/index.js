import { all } from "redux-saga/effects";

import helloSaga from "./hello";
import watchSaga from "./watchAddNumber";
import modifyUserName from "./modifyUserName";

function* mySaga() {
    yield all([helloSaga(), watchSaga(), modifyUserName()]);
}

export default mySaga;
