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

    // TODO: make this into a class, probably
    //  and generate pieces array from that class?
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
            color: White,
            type: Knight,
            file: B,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Bishop,
            file: C,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Queen,
            file: D,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: King,
            file: E,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Bishop,
            file: F,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Knight,
            file: G,
            rank: One,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: White,
            type: Rook,
            file: H,
            rank: One,
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
            color: Black,
            type: Rook,
            file: A,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Knight,
            file: B,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Bishop,
            file: C,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Queen,
            file: D,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: King,
            file: E,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Bishop,
            file: F,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Knight,
            file: G,
            rank: Eight,
            getPotentialMoves: pawnPotentialMoves,
            getLocation: location,
        },
        {
            color: Black,
            type: Rook,
            file: H,
            rank: Eight,
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