import { ChessPiece, PieceColor, fileLetter } from '../../utils/pieceUtils';
import './Piece.scss';

function Piece({ turn, piece, select }: {
    turn: PieceColor;
    piece: ChessPiece;
    select (piece: ChessPiece): void;
}) {

    const { rank, file, color, type, image } = piece;

    function clickHandler(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        if(turn === color) {
            event.stopPropagation();
            select(piece);
        }
    }


    return (
        <img 
            onClick={ clickHandler }
            className={
                `chess-piece 
                ${turn === color && 'chess-piece--clickable'}
                orientation--${turn === PieceColor.White ? 'up' : 'down'} location--${rank}
                location--${fileLetter(file)}`
            } 
            src={ image }
            alt={ `${color} ${type}` } 
        />
    );
}

export default Piece;