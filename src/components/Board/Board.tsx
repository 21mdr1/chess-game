import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import { useState } from 'react';
import './Board.scss';

function Board() {
    const files: ('a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h')[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks: ('1' | '2' | '3' | '4' | '5' | '6' | '7' | '8')[] = ['1', '2', '3', '4', '5', '6', '7', '8'];


    enum PieceColor { White, Black };
    const { White, Black } = PieceColor;
    enum PieceType { Pawn, Rook, Knight, Bishop, Queen, King };
    const { Pawn, Rook, Knight, Bishop, Queen, King } = PieceType;

    enum PieceRank { One = 1, Two, Three, Four, Five, Six, Seven, Eight };
    const { One, Two, Three, Four, Five, Six, Seven, Eight } = PieceRank;
    enum PieceFile { A = 'a', B = 'b', C = 'c', D = 'd', E = 'e', F = 'f', G = 'g', H = 'h' };
    const { A, B, C, D, E, F, G, H } = PieceFile;

    function pawnPotentialMoves(this: iPiece): string[] {
        let possibilities: string[] = [];

        // TODO: check if squares are occupied

        if (this.color === White) {
            possibilities.push(`${this.file}${this.rank + 1}`);

            if (this.rank === Two) {
                possibilities.push(`${this.file}${this.rank + 2}`);
            }

        } else if (this.color === Black) {
            possibilities.push(`${this.file}${this.rank - 1}`);

            if (this.rank === Seven) {
                possibilities.push(`${this.file}${this.rank - 2}`);
            }
        }

        return possibilities;
    }

    function location(this: iPiece): string {
        return `${this.file}${this.rank}`
    }

    interface iPiece {
        color: PieceColor;
        type: PieceType;
        rank: PieceRank;
        file: PieceFile;
        getPotentialMoves(): string[];
        getLocation(): string;
    }

    const pieces: iPiece[] = [
        {
            color: White,
            type: Pawn,
            file: A,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: B,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: C,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: D,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: E,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: F,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: G,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Pawn,
            file: H,
            rank: Two,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Rook,
            file: A,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Knight,
            rank: PieceRank.One,
            file: PieceFile.B,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Bishop,
            rank: PieceRank.One,
            file: PieceFile.C,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Queen,
            rank: PieceRank.One,
            file: PieceFile.D,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.King,
            rank: PieceRank.One,
            file: PieceFile.E,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Bishop,
            rank: PieceRank.One,
            file: PieceFile.F,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Knight,
            rank: PieceRank.One,
            file: PieceFile.G,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.White,
            type: PieceType.Rook,
            rank: PieceRank.One,
            file: PieceFile.H,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: A, 
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: B,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: C,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: D,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: E,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: F,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: G,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Pawn,
            file: H,
            rank: Seven,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Rook,
            rank: PieceRank.Eight,
            file: PieceFile.A,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Knight,
            rank: PieceRank.Eight,
            file: PieceFile.B,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Bishop,
            rank: PieceRank.Eight,
            file: PieceFile.C,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Queen,
            rank: PieceRank.Eight,
            file: PieceFile.D,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.King,
            rank: PieceRank.Eight,
            file: PieceFile.E,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Bishop,
            rank: PieceRank.Eight,
            file: PieceFile.F,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Knight,
            rank: PieceRank.Eight,
            file: PieceFile.G,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: PieceColor.Black,
            type: PieceType.Rook,
            rank: PieceRank.Eight,
            file: PieceFile.H,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
    ]

    let [ selected, setSelected ] = useState<iPiece | null>(null);
    let [ potentialMoves, setPotentialMoves ] = useState<string[]>([]);

    function select(piece: iPiece): void {
        setSelected( selected ? null :  piece);
        setPotentialMoves( selected ? [] : piece.getPotentialMoves() );
    }


    return (
        <div className='board'>
            {ranks.map(rank =>
                files.map(file => 
                    <Square 
                        key={ file + rank } 
                        file={ file } 
                        rank={ rank }
                        selected={ selected !== null && selected.getLocation() === `${file}${rank}` }
                        potentialMove={ potentialMoves.length !== 0 && potentialMoves.includes(`${file}${rank}`) }
                    />
                )
            )}
            {pieces.map((piece: iPiece) =>
                <Piece 
                    key={ `${piece.file}${piece.rank}` } 
                    piece={ piece }
                    select={ select }
                />
            )}
        </div>
    );
}

export default Board;