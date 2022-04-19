import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import EmployeeReducer from "./reducers/EmployeeSlice";
import rootSaga from "./saga/RootSaga";


const rootReducer = combineReducers({
    EmployeeReducer
})

const sagaMiddleware = createSagaMiddleware();


export const setupStore = ():any => {    
    const store =  configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    })
    sagaMiddleware.run(rootSaga)
    return store
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]