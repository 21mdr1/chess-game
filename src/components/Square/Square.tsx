import { PieceRank, PieceFile, PieceColor, fileLetter, ChessPiece } from '../../utils/pieceUtils';
import './Square.scss';

function Square({ rank, file, selected, potentialMove, unSelect, movePiece, turn }: {
    movePiece(file: PieceFile, rank: PieceRank): void;
    unSelect(): void;
    rank: PieceRank;
    file: PieceFile;
    potentialMove: boolean;
    selected: boolean;
    turn: PieceColor;
}) {

    const color = selected ? "selected" : 
        potentialMove ? "potential" :
        (rank + file) % 2 === 0 ? 'dark' : 'light'

    function handleClick() {
        // if nothing selected and this is your turn: select
        // if this is a potential move: move
        // else: unselect

        if (potentialMove) {
            movePiece(file, rank);
        } else {
            unSelect();
        }
    }

    return (
        <div 
            className={
                `square 
                location--${rank} 
                location--${fileLetter(file)} 
                square--${color}`
            }
            onClick={ handleClick }
        >
        </div>
    );
}

export default Square;