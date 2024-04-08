import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { thunk } from 'redux-thunk';

export default function configureAppStore(initialState) {

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [thunk,
            reduxImmutableStateInvariant(),
            ...getDefaultMiddleware()],
        preloadedState: initialState,
        devTools: process.env.NODE_ENV !== 'production'
    });
}