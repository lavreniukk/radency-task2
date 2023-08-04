import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../redux/notes/noteSlice';
import validateNote from './notes/validateNote';

export const store = configureStore({
    reducer: {
        noteReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(validateNote),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
