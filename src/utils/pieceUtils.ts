import whitePawn from '../assets/default-chess-set/white-pawn.png';
import whiteRook from '../assets/default-chess-set/white-rook.png';
import whiteKnight from '../assets/default-chess-set/white-knight.png';
import whiteBishop from '../assets/default-chess-set/white-bishop.png';
import whiteQueen from '../assets/default-chess-set/white-queen.png';
import whiteKing from '../assets/default-chess-set/white-king.png';
import blackPawn from '../assets/default-chess-set/black-pawn.png';
import blackRook from '../assets/default-chess-set/black-rook.png';
import blackKnight from '../assets/default-chess-set/black-knight.png';
import blackBishop from '../assets/default-chess-set/black-bishop.png';
import blackQueen from '../assets/default-chess-set/black-queen.png';
import blackKing from '../assets/default-chess-set/black-king.png';
// types

type square = 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8' | 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8' | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c8' | 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6' | 'd7' | 'd8' | 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6' | 'e7' | 'e8' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6' | 'g7' | 'g8' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8'

enum PieceColor {White = 'white', Black = 'black'};
const { White, Black } = PieceColor;

enum PieceType { Pawn = 'pawn', Rook = 'rook', Knight = 'knight', Bishop = 'bishop', Queen = 'queen', King = 'king' };
const { Pawn, Rook , Knight, Bishop, Queen, King } = PieceType;

enum PieceRank { One = 1, Two, Three, Four, Five, Six, Seven, Eight };
const { One, Two, Three, Four, Five, Six, Seven, Eight } = PieceRank;

enum PieceFile { A = 1, B, C, D, E, F, G, H };
const { A, B, C, D, E, F, G, H } = PieceFile;

// functions

function fileLetter(file: PieceFile): 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' 
{
    const mapping: 
        ('a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h')[] = 
        ["a", "b", "c", "d", "e", "f", "g", "h"]
    return mapping[file - 1]
}

function square(file: PieceFile, rank: PieceRank): square {
    return `${fileLetter(file)}${rank}`;
}

// classes

type pieceInfo = {
    image: string;
    counter: number;
}

let info = {
    white: {
        pawn: {image: whitePawn, counter: 0},
        rook: {image: whiteRook, counter: 0},
        knight: {image: whiteKnight, counter: 0},
        bishop: {image: whiteBishop, counter: 0},
        king: {image: whiteKing, counter: 0},
        queen: {image: whiteQueen, counter: 0},
    },
    black: {
        pawn: {image: blackPawn, counter: 0},
        rook: {image: blackRook, counter: 0},
        knight: {image: blackKnight, counter: 0},
        bishop: {image: blackBishop, counter: 0},
        king: {image: blackKing, counter: 0},
        queen: {image: blackQueen, counter: 0},
    }

}

class ChessPiece {
    file: PieceFile;
    rank: PieceRank;
    image: string;
    hasMoved: boolean;

    constructor(public color: PieceColor, public type: PieceType) {
        this.hasMoved = false;

        switch (color) {
            case White:
                this.rank = type === Pawn ? Two : One;
                break;
            case Black:
                this.rank = type === Pawn ? Seven : Eight;
        }

        this.image = info[this.color][this.type].image;

        info[this.color][this.type].counter += 1
        
        switch (type) {
            case Pawn:
                this.file = info[this.color][this.type].counter;
                break;
            case Rook:
                this.file = info[this.color][this.type].counter === 1 ? A : H;
                break;
            case Knight:
                this.file = info[this.color][this.type].counter === 1 ? B : G;
                break;
            case Bishop:
                this.file = info[this.color][this.type].counter === 1 ? C : F;
                break
            case Queen:
                this.file = D;
                break;
            case King:
                this.file = E;
                break;
        }
    }

    getLocation(): square {
        return square(this.file, this.rank);
    }

    move(file: PieceFile, rank: PieceRank): void {
        this.file = file;
        this.rank = rank;
        this.hasMoved = true;
    }

    promoteTo(type: PieceType): void {
        if (this.type !== Pawn) {
            return;
        }

        this.type = type;
        this.image = info[this.color][this.type].image;
    }

    isInCheck(): boolean {
        if (this.type !== King) {
            return false;
        }

        return false;
    }

    isInCheckMate(): boolean {
        if (this.type !== King) {
            return false;
        }

        return false;
    }

    moves(): string[] {
        switch (this.type) {
            case Pawn:
                return this.straightMoves(
                    this.color === White ? 1 : -1,
                    0,
                    this.hasMoved ? 1 : 2
                );
            case Rook:
                return [
                    ...this.straightMoves(0, 1, 8), ...this.straightMoves(0, -1, 8),
                    ...this.straightMoves(1, 0, 8), ...this.straightMoves(-1, 0, 8)
                ];
            case Knight:
                return this.knightMoves();
            case Bishop:
                return [
                    ...this.straightMoves(1, 1, 8), ...this.straightMoves(-1, 1, 8),
                    ...this.straightMoves(1, -1, 8), ...this.straightMoves(-1, -1, 8)
                ];
            case Queen:
                return [
                    ...this.straightMoves(1, 0, 8), ...this.straightMoves(-1, 0, 8),
                    ...this.straightMoves(0, 1, 8), ...this.straightMoves(0, -1, 8),
                    ...this.straightMoves(1, 1, 8), ...this.straightMoves(-1, 1, 8),
                    ...this.straightMoves(1, -1, 8), ...this.straightMoves(-1, -1, 8)
                ];
            case King:
                return [
                    ...this.straightMoves(1, 0, 1), ...this.straightMoves(-1, 0, 1),
                    ...this.straightMoves(0, 1, 1), ...this.straightMoves(0, -1, 1),
                    ...this.straightMoves(1, 1, 1), ...this.straightMoves(-1, 1, 1),
                    ...this.straightMoves(1, -1, 1), ...this.straightMoves(-1, -1, 1)
                ];
        }
    }

    private knightMoves(): string[] {
        let moves: string[] = [];

        for (let move of [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]) {
            const rank = this.rank + move[0];
            const file = this.file + move[1];

            const destination = square(this.file + move[1], this.rank + move[0])
            const destinationPiece = locations[destination]

            if ( rank >= One && rank <= Eight && file >= A && file <= H ) {
                if(!destinationPiece || destinationPiece?.color !== this.color) {
                    moves.push(destination);
                }
            }
        }

        return moves;
    }

    straightMoves(vDir: 1 | 0 | -1, hDir: 1 | 0 | -1, dist: 1 | 2 | 8) {
        let moves: string[] = [];

        for (let i = 1; i <= dist; i++) {
            let file = this.file + (i * hDir);
            let rank = this.rank + (i * vDir);

            if (file < A || file > H || rank < One || rank > Eight) {
                break;
            }

            const destination = square(file, rank);
            const destinationPiece = locations[destination]

            if (!destinationPiece) {
                moves.push(destination);
            } else if (destinationPiece.color !== this.color) {
                moves.push(destination);
                break;
            } else {
                break;
            }
        }

        return moves;
    }
}

// instances

const pieces: ChessPiece[] = [];
const locations: Record<string, ChessPiece | undefined> = {}

for (let color of [ Black, White ]) {
    for (let type of [ Pawn, Rook, Knight, Bishop, Queen, King ]){
        switch (type) {
            case Pawn:
                for (let i = 0; i < 8; i++) {
                    let piece = new ChessPiece(color, type);
                    pieces.push(piece);
                    locations[piece.getLocation()] = piece;
                }
                break;
            case Queen:
            case King:
                let piece = new ChessPiece(color, type);
                pieces.push(piece);
                locations[piece.getLocation()] = piece;
                break;
            default:
                for (let i = 0; i < 2; i++) {
                    let piece = new ChessPiece(color, type);
                    pieces.push(piece);
                    locations[piece.getLocation()] = piece;
                }
        }
    }
}


export { ChessPiece, PieceColor, PieceType, PieceRank, PieceFile, fileLetter, pieces, locations, square }