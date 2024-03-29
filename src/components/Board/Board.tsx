import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import { useState } from 'react';
import { ChessPiece, locations as locationsObj, square, PieceFile, PieceRank, PieceColor } from '../../utils/pieceUtils';
import './Board.scss';

function Board() {
    // TODO FEATURES:
    //  have selection handler be on square not on piece
    //  make it so you can click on piece to capture (instead of square)
    //  castling
    //  en passante
    //  king is in check and checkmate -- not able to just capture king :')
    //      on that note: restrict moves when in check
    //  restrict where king can move because of other pieces
    //  show last move
    //  drag and drop of pieces (drag to move piece or to show possible moves??)
    //  show files and ranks
    //  record moves?

    let [ locations, _setLocations ] = useState(locationsObj);

    let [ selected, setSelected ] = useState<ChessPiece | null>(null);
    let [ potentialMoves, setPotentialMoves ] = useState<string[]>([]);
    let [ turn, setTurn ] = useState<PieceColor>(PieceColor.White)

    function unSelect() {
        setSelected(null);
        setPotentialMoves([]);
    }

    function select(piece: ChessPiece): void {
        if(selected === null || 
            selected.getLocation() !== piece.getLocation()
        ) {
            setSelected(piece);
            setPotentialMoves(piece.moves());
        } else {
            unSelect();
        }
    }

    function movePiece(file: PieceFile, rank: PieceRank) {
        const movedPiece = selected;

        if (!movedPiece) {
            return;
        }

        delete locations[movedPiece.getLocation()];
        locations[square(file, rank)] = movedPiece;

        movedPiece.move(file, rank);
        
        unSelect();
        setTurn(turn === PieceColor.White ? PieceColor.Black : PieceColor.White);
    }

    return (
        <div className={`board orientation--${turn === PieceColor.White ? 'up' : 'down'}`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(rank =>
                [1, 2, 3, 4, 5, 6, 7, 8].map(file =>
                    <Square 
                        key={ `${square(file, rank)}` } 
                        movePiece={ movePiece }
                        unSelect={ unSelect }
                        file={ file } 
                        rank={ rank }
                        selected={ selected !== null && selected.getLocation() === `${square(file, rank)}` }
                        potentialMove={ potentialMoves.length !== 0 && potentialMoves.includes(`${square(file, rank)}`) }
                        turn={ turn }
                    />
                )
            )}
            {Object.values(locations).map((piece: ChessPiece) =>
                <Piece 
                    key={ `${square(piece.file, piece.rank)}` } 
                    turn={ turn }
                    piece={ piece }
                    select={ select }
                />
            )}
        </div>
    );
}

export default Board;