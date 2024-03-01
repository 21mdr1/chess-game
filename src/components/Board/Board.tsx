import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import { useState } from 'react';
import './Board.scss';

function Board() {
    const files: ('a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h')[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks: ('1' | '2' | '3' | '4' | '5' | '6' | '7' | '8')[] = ['1', '2', '3', '4', '5', '6', '7', '8'];


    enum PieceColor { White, Black };
    enum PieceType { Pawn, Rook, Knight, Bishop, Queen, King };

    enum PieceRank { One = 1, Two, Three, Four, Five, Six, Seven, Eight };
    enum PieceFile { A = 'a', B = 'b', C = 'c', D = 'd', E = 'e', F = 'f', G = 'g', H = 'h' };

    interface iPiece {
        color: PieceColor;
        type: PieceType;
        rank: PieceRank;
        file: PieceFile;
        move(): void;
        capture?(): void;
    }

    const pieces: iPiece[] = [
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.A,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.B,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.C,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.D,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.E,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.F,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.G,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Pawn,
            rank: PieceRank.Two,
            file: PieceFile.H,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Rook,
            rank: PieceRank.One,
            file: PieceFile.A,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Knight,
            rank: PieceRank.One,
            file: PieceFile.B,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Bishop,
            rank: PieceRank.One,
            file: PieceFile.C,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Queen,
            rank: PieceRank.One,
            file: PieceFile.D,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.King,
            rank: PieceRank.One,
            file: PieceFile.E,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Bishop,
            rank: PieceRank.One,
            file: PieceFile.F,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Knight,
            rank: PieceRank.One,
            file: PieceFile.G,
            move: () => {},
        },
        {
            color: PieceColor.White,
            type: PieceType.Rook,
            rank: PieceRank.One,
            file: PieceFile.H,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.A,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.B,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.C,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.D,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.E,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.F,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.G,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Pawn,
            rank: PieceRank.Seven,
            file: PieceFile.H,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Rook,
            rank: PieceRank.Eight,
            file: PieceFile.A,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Knight,
            rank: PieceRank.Eight,
            file: PieceFile.B,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Bishop,
            rank: PieceRank.Eight,
            file: PieceFile.C,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Queen,
            rank: PieceRank.Eight,
            file: PieceFile.D,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.King,
            rank: PieceRank.Eight,
            file: PieceFile.E,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Bishop,
            rank: PieceRank.Eight,
            file: PieceFile.F,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Knight,
            rank: PieceRank.Eight,
            file: PieceFile.G,
            move: () => {},
        },
        {
            color: PieceColor.Black,
            type: PieceType.Rook,
            rank: PieceRank.Eight,
            file: PieceFile.H,
            move: () => {},
        },
    ]

    let [ selected, setSelected ] = useState("");

    function select(rank: PieceRank, file: PieceFile): void {
        setSelected( selected ? "" :  `${file}${rank}`)
    }


    return (
        <div className='board'>
            {ranks.map(rank =>
                files.map(file => 
                    <Square 
                        key={ file + rank } 
                        file={ file } 
                        rank={ rank }
                        selected={ selected === `${file}${rank}` }
                    />
                )
            )}
            {pieces.map(({ color, type, rank, file }: iPiece) =>
                <Piece 
                    key={ `${file}${rank}` } 
                    color={ color } 
                    type={ type } 
                    rank={ rank } 
                    file={ file } 
                    select={ select }
                />
            )}
        </div>
    );
}

export default Board;