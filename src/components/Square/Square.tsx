import { PieceRank, PieceFile, fileLetter } from '../../utils/pieceUtils';
import './Square.scss';

function Square({ rank, file, selected, potentialMove, potentialCapture, unSelect, movePiece }: {
    movePiece(file: PieceFile, rank: PieceRank): void;
    unSelect(): void;
    rank: PieceRank;
    file: PieceFile;
    selected: boolean;
    potentialMove: boolean;
    potentialCapture: boolean;
}) {

    const color = selected ? "selected" : 
        potentialMove || potentialCapture ? "potential" :
        (rank + file) % 2 === 0 ? 'dark' : 'light'

    function handleClick() {
        if (potentialMove) {
            movePiece(file, rank);
        } else if (potentialCapture) {

        } else {
            unSelect();
        }
    }

    return (
        <div 
            className={`square location--${rank} location--${fileLetter(file)} square--${color}`}
            onClick={potentialMove ? () => movePiece(file, rank) : unSelect}
        >
        </div>
    );
}

export default Square;