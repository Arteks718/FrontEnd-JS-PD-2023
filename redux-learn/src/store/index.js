import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducers/CounterReducers";


const store = configureStore({
  reducer: {
    counterReducer,
  },
})

export default store;