import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
export default store;
