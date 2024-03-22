import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../components/Board/BoardSlice';

export const store = configureStore({
    reducer: {
        board: boardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Features:
// pieces: they change position and type sometimes
// board: holds turn
// squares: they have type: nothing, potential move, and last move