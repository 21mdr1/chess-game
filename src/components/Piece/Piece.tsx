import whitePawn from '../../assets/default-chess-set/white-pawn.png';
import whiteRook from '../../assets/default-chess-set/white-rook.png';
import whiteKnight from '../../assets/default-chess-set/white-knight.png';
import whiteBishop from '../../assets/default-chess-set/white-bishop.png';
import whiteQueen from '../../assets/default-chess-set/white-queen.png';
import whiteKing from '../../assets/default-chess-set/white-king.png';
import blackPawn from '../../assets/default-chess-set/black-pawn.png';
import blackRook from '../../assets/default-chess-set/black-rook.png';
import blackKnight from '../../assets/default-chess-set/black-knight.png';
import blackBishop from '../../assets/default-chess-set/black-bishop.png';
import blackQueen from '../../assets/default-chess-set/black-queen.png';
import blackKing from '../../assets/default-chess-set/black-king.png';
import './Piece.scss';

function Piece({ type, color }: {
    type?: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
    color?: "white" | "black";
}) {

    const piece = {
        "white pawn": whitePawn,
        "white rook": whiteRook,
        "white knight": whiteKnight,
        "white bishop": whiteBishop,
        "white queen": whiteQueen,
        "white king": whiteKing,
        "black pawn": blackPawn,
        "black rook": blackRook,
        "black knight": blackKnight,
        "black bishop": blackBishop,
        "black queen": blackQueen,
        "black king": blackKing,
    }

    return (
        <>
        { type && color && (
            <img className="chess-piece" src={piece[`${color} ${type}`]} alt={`${color} ${type}`} />
        )}
        </>
    );
}

export default Piece;