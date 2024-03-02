import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import { useState } from 'react';
import { ChessPiece, pieces as pieceArray, getNumber, getLetter } from '../../utils/pieceUtils';
import './Board.scss';

function Board() {
    const files: ('a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h')[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks: ('1' | '2' | '3' | '4' | '5' | '6' | '7' | '8')[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

    let [ pieces, setPieces ] = useState(pieceArray);

    let [ selected, setSelected ] = useState<ChessPiece | null>(null);
    let [ potentialMoves, setPotentialMoves ] = useState<string[]>([]);

    function unSelect() {
        setSelected(null);
        setPotentialMoves([]);
    }

    function select(piece: ChessPiece): void {
        if(selected === null) {
            setSelected(piece);
            setPotentialMoves(piece.getPotentialMoves());
        } else if (selected.getLocation() === piece.getLocation()) {
            setSelected(null);
            setPotentialMoves([]);
        } else {
            setSelected(piece);
            setPotentialMoves(piece.getPotentialMoves());
        }
    }

    function movePiece(square: string) {
        const movedPiece = selected;

        if (!movedPiece) {
            return;
        }

        movedPiece.file = getLetter(getNumber(square[0]));
        movedPiece.rank = Number(square[1]);
        
        const otherPieces = pieces.filter(otherPiece => otherPiece.getLocation() !== square);

        setPieces([...otherPieces, movedPiece]);
        unSelect();
    }


    return (
        <div className='board'>
            {ranks.map(rank =>
                files.map(file => 
                    <Square 
                        movePiece={ movePiece }
                        unSelect={ unSelect }
                        key={ file + rank } 
                        file={ file } 
                        rank={ rank }
                        selected={ selected !== null && selected.getLocation() === `${file}${rank}` }
                        potentialMove={ potentialMoves.length !== 0 && potentialMoves.includes(`${file}${rank}`) }
                    />
                )
            )}
            {pieces.map((piece: ChessPiece) =>
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