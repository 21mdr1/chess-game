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

enum PieceColor { White, Black };
enum PieceType { Pawn, Rook, Knight, Bishop, Queen, King };

enum PieceRank { One = 1, Two, Three, Four, Five, Six, Seven, Eight };
enum PieceFile { A = 'a', B = 'b', C = 'c', D = 'd', E = 'e', F = 'f', G = 'g', H = 'h' };

interface iPiece {
    color: PieceColor;
    type: PieceType;
    rank: PieceRank;
    file: PieceFile;
    getPotentialMoves(): string[];
    getLocation(): string;
}

function Piece({ piece, select }: {
    piece: iPiece;
    select (piece: iPiece): void;
}) {

    const { rank, file, color, type } = piece;

    const pieceFile = {
        "0 0": whitePawn,
        "0 1": whiteRook,
        "0 2": whiteKnight,
        "0 3": whiteBishop,
        "0 4": whiteQueen,
        "0 5": whiteKing,
        "1 0": blackPawn,
        "1 1": blackRook,
        "1 2": blackKnight,
        "1 3": blackBishop,
        "1 4": blackQueen,
        "1 5": blackKing,
    }

    return (
        <img 
            onClick={ () => {select(piece)} }
            className={`chess-piece location--${rank} location--${file}`} 
            src={pieceFile[`${color} ${type}`]} 
            alt={`${color} ${type}`} 
        />
    );
}

export default Piece;