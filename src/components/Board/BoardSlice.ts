import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../utils/store';
import { PieceColor } from '../../utils/pieceUtils';

interface BoardSlice {
    turn: PieceColor;
}

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        turn: PieceColor.White,
    } as BoardSlice,
    reducers: {
        changeTurn: (state) => {
            state.turn = state.turn === PieceColor.White ? PieceColor.Black : PieceColor.White;
        }
    }
})

export const { changeTurn } = boardSlice.actions;
export const turn = (state: RootState) => state.board.turn;
export default boardSlice.reducer;