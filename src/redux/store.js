import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/authSlice'
import profileReducer from './slices/profileSlice'


const persistConfing = {
    key: 'root',
    storage,
    version: 1
}

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

const persistedReducers = persistReducer(persistConfing, rootReducers)


export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)