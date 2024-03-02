import { ChessPiece } from '../../utils/pieceUtils';
import './Piece.scss';

function Piece({ piece, select }: {
    piece: ChessPiece;
    select (piece: ChessPiece): void;
}) {

    const { rank, file, color, type, image } = piece;

    return (
        <img 
            onClick={ event => { event.stopPropagation(); select(piece)} }
            className={`chess-piece location--${rank} location--${file}`} 
            src={image} 
            alt={`${color} ${type}`} 
        />
    );
}

export default Piece;