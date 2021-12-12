import { configureStore } from '@reduxjs/toolkit';
import { makeReducer, modelReducer, vehicleReducer } from 'features';

export const store = configureStore({
    reducer: {
        makes: makeReducer,
        models: modelReducer,
        vehicles: vehicleReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;