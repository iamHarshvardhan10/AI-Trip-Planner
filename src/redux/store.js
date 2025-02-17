import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/authSlice'



const persistConfing = {
    key: 'root',
    storage,
    version: 1
}

const rootReducers = combineReducers({
    auth: authReducer
})

const persistedReducers = persistReducer(persistConfing, rootReducers)


export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)