import { put } from "redux-saga/effects";

import { changeName } from "../reducer/userSlice";

function* modifyUserName() {
    yield put(changeName("sagaName"));
}

export default modifyUserName;
