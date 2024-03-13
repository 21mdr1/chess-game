import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import { useState } from 'react';
import { ChessPiece, pieces as pieceArray, locations as locationsObj, fileLetter, square, PieceFile, PieceRank } from '../../utils/pieceUtils';
import './Board.scss';

function Board() {
    let [ pieces, setPieces ] = useState(pieceArray);
    let [ locations, setLocations ] = useState(locationsObj);

    let [ selected, setSelected ] = useState<ChessPiece | null>(null);
    let [ potentialMoves, setPotentialMoves ] = useState<string[]>([]);
    let [ potentialCaptures, setPotentialCaptures ] = useState<string[]>([]);

    function unSelect() {
        setSelected(null);
        setPotentialMoves([]);
        setPotentialCaptures([]);
    }

    function select(piece: ChessPiece): void {
        if(selected === null || 
            selected.getLocation() !== piece.getLocation()
        ) {
            setSelected(piece);
            setPotentialMoves(piece.moves());
            setPotentialCaptures([]); // change
        } else {
            unSelect();
        }
    }

    function movePiece(file: PieceFile, rank: PieceRank) {
        const movedPiece = selected;

        if (!movedPiece) {
            return;
        }

        locations[movedPiece.getLocation()] = undefined;
        locations[square(file, rank)] = movedPiece;

        movedPiece.move(file, rank);
        
        unSelect();
    }

    function capturePiece(square: string) {

    }


    return (
        <div className='board'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(rank =>
                [1, 2, 3, 4, 5, 6, 7, 8].map(file =>
                    <Square 
                        movePiece={ movePiece }
                        unSelect={ unSelect }
                        key={ `${square(file, rank)}` } 
                        file={ file } 
                        rank={ rank }
                        selected={ selected !== null && selected.getLocation() === `${square(file, rank)}` }
                        potentialMove={ potentialMoves.length !== 0 && potentialMoves.includes(`${square(file, rank)}`) }
                        potentialCapture={ false }
                    />
                )
            )}
            {pieces.map((piece: ChessPiece) =>
                <Piece 
                    key={ `${square(piece.file, piece.rank)}` } 
                    piece={ piece }
                    select={ select }
                />
            )}
        </div>
    );
}

export default Board;