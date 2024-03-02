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

enum PieceColor { White = 'white', Black = 'black' };
enum PieceType { Pawn = 'pawn', Rook = 'rook', Knight = 'knight', Bishop = 'bishop', Queen = 'queen', King = 'king' };

enum PieceRank { One = 1, Two, Three, Four, Five, Six, Seven, Eight };
enum PieceFile { A = 'a', B = 'b', C = 'c', D = 'd', E = 'e', F = 'f', G = 'g', H = 'h' };


function getNumber(letter: string): number {
    switch (letter) {
        case 'a':
            return 1;
        case 'b':
            return 2;
        case 'c':
            return 3;
        case 'd':
            return 4;
        case 'e':
            return 5;
        case 'f':
            return 6;
        case 'g':
            return 7;
        case 'h':
            return 8;
        default:
            return 0;
    }
}

function getLetter(number: number): PieceFile {
    switch (number) {
        case 1:
            return PieceFile.A
        case 2:
            return PieceFile.B
        case 3:
            return PieceFile.C
        case 4:
            return PieceFile.D
        case 5:
            return PieceFile.E
        case 6:
            return PieceFile.F
        case 7:
            return PieceFile.G
        case 8:
            return PieceFile.H
        default:
            return PieceFile.A;
    }
}

class ChessPiece {
    color: PieceColor;
    type: PieceType;
    image: string;

    constructor(public file: PieceFile, public rank: PieceRank) {
        if (rank === PieceRank.Two) {
            this.color = PieceColor.White;
            this.type = PieceType.Pawn;
            this.image = whitePawn;
            return;
        } else if (rank === PieceRank.Seven) {
            this.color = PieceColor.Black;
            this.type = PieceType.Pawn;
            this.image = blackPawn;
            return;
        } else if (rank === PieceRank.One) {
            this.color = PieceColor.White;

            if (file === PieceFile.A || file === PieceFile.H) {
                this.type = PieceType.Rook;
                this.image = whiteRook;
            } else if (file === PieceFile.B || file === PieceFile.G) {
                this.type = PieceType.Knight;
                this.image = whiteKnight;
            } else if (file === PieceFile.C || file === PieceFile.F) {
                this.type = PieceType.Bishop;
                this.image = whiteBishop;
            } else if (file === PieceFile.D) {
                this.type = PieceType.Queen;
                this.image = whiteQueen;
            } else if (file === PieceFile.E) {
                this.type = PieceType.King;
                this.image = whiteKing;
            } else {
                this.type = PieceType.Pawn;
                this.image = whitePawn;
            }
        } else if (rank === PieceRank.Eight) {
            this.color = PieceColor.Black;

            if (file === PieceFile.A || file === PieceFile.H) {
                this.type = PieceType.Rook;
                this.image = blackRook;
            } else if (file === PieceFile.B || file === PieceFile.G) {
                this.type = PieceType.Knight;
                this.image = blackKnight;
            } else if (file === PieceFile.C || file === PieceFile.F) {
                this.type = PieceType.Bishop;
                this.image = blackBishop;
            } else if (file === PieceFile.D) {
                this.type = PieceType.Queen;
                this.image = blackQueen;
            } else if (file === PieceFile.E) {
                this.type = PieceType.King;
                this.image = blackKing;
            } else {
                this.type = PieceType.Pawn;
                this.image = whitePawn;
            }
        } else {
            this.color = PieceColor.White;
            this.type = PieceType.Pawn;
            this.image = whitePawn;
        }
    }

    getLocation(): string {
        return `${this.file}${this.rank}`
    }

    getPotentialMoves(): string[] {

        if (this.type === PieceType.Pawn) {
            if (this.color === PieceColor.White) {
                return this.checkVerticalDirection('up', 'pawn');
            } else {
                return this.checkVerticalDirection('down', 'pawn');
            }
        }

        else if (this.type === PieceType.Rook) {
            return [
                ...this.checkVerticalDirection('up', 'far'),
                ...this.checkVerticalDirection('down', 'far'),
                ...this.checkHorizontalDirection('right', 'far'),
                ...this.checkHorizontalDirection('left', 'far')
            ];
        }

        else if (this.type === PieceType.Knight) {
            return [
                `${getLetter(getNumber(this.file) + 2)}${this.rank + 1}`,
                `${getLetter(getNumber(this.file) + 2)}${this.rank - 1}`,
                `${getLetter(getNumber(this.file) + 1)}${this.rank + 2}`,
                `${getLetter(getNumber(this.file) + 1)}${this.rank - 2}`,
                `${getLetter(getNumber(this.file) - 2)}${this.rank + 1}`,
                `${getLetter(getNumber(this.file) - 2)}${this.rank - 1}`,
                `${getLetter(getNumber(this.file) - 1)}${this.rank + 2}`,
                `${getLetter(getNumber(this.file) - 1)}${this.rank - 2}`,
            ];
        }

        else if (this.type === PieceType.Bishop) {
            return [
                ...this.checkDiagonalDirection('up right', 'far'),
                ...this.checkDiagonalDirection('up left', 'far'),
                ...this.checkDiagonalDirection('down right', 'far'),
                ...this.checkDiagonalDirection('down left', 'far')
            ]
        }

        else if (this.type === PieceType.Queen) {
            return [
                ...this.checkVerticalDirection('up', 'far'),
                ...this.checkVerticalDirection('down', 'far'),
                ...this.checkHorizontalDirection('right', 'far'),
                ...this.checkHorizontalDirection('left', 'far'),
                ...this.checkDiagonalDirection('up right', 'far'),
                ...this.checkDiagonalDirection('up left', 'far'),
                ...this.checkDiagonalDirection('down right', 'far'),
                ...this.checkDiagonalDirection('down left', 'far')
            ]
        }

        else if (this.type === PieceType.King) {
            return [
                ...this.checkVerticalDirection('up', 'short'),
                ...this.checkVerticalDirection('down', 'short'),
                ...this.checkHorizontalDirection('right', 'short'),
                ...this.checkHorizontalDirection('left', 'short'),
                ...this.checkDiagonalDirection('up right', 'short'),
                ...this.checkDiagonalDirection('up left', 'short'),
                ...this.checkDiagonalDirection('down right', 'short'),
                ...this.checkDiagonalDirection('down left', 'short')
            ]
        }

        return [];
    }

    private checkVerticalDirection (direction: 'up' | 'down', distance: 'short' | 'far' | 'pawn'): string[] {

        function rankIsValid(currentRank: PieceRank): boolean {
            return direction.includes('up') ? 
                currentRank <= PieceRank.Eight : 
                currentRank >= PieceRank.One;
        }

        function multiplier(): 1 | -1 {
            return direction.includes('up') ? 1 : -1;
        }

        let possibilities: string[] = [];
        let currentRank = this.rank + multiplier();
        let counter = 0;

        while (rankIsValid(currentRank)) {
            possibilities.push(`${this.file}${currentRank}`);
            counter += 1;

            if (distance === 'short' && counter === 1 ||
                distance === 'pawn' && counter === 1 && 
                    ((this.color === PieceColor.White && this.rank !== PieceRank.Two) || 
                    (this.color === PieceColor.Black && this.rank !== PieceRank.Seven)) ||
                distance === 'pawn' && counter === 2
            ) {
                return possibilities;
            }

            currentRank += multiplier();
        }

        return possibilities;
    }

    private checkHorizontalDirection (direction: 'right' | 'left', distance: 'short' | 'far'): string[] {
        function fileIsValid(currentFile: number): boolean {
            return direction ==='right' ?
                currentFile <= getNumber(PieceFile.H) :
                currentFile >= getNumber(PieceFile.A);
        }

        function multiplier(): 1 | -1 {
            return direction === 'right' ? 1 : -1;
        }

        if (distance === 'far') {
            let possibilities: string[] = [];
            let currentFile = getNumber(this.file) + multiplier();

            while (fileIsValid(currentFile)) {
                possibilities.push(`${getLetter(currentFile)}${this.rank}`);
                currentFile += multiplier();
            }

            return possibilities;
        } 

        return [`${getLetter(getNumber(this.file) + multiplier())}${this.rank}`];
    }

    private checkDiagonalDirection (direction: 'up right' | 'up left' | 'down right' | 'down left', distance: 'short' | 'far'): string[] {
        function rankIsValid(currentRank: PieceRank): boolean {
            return direction.includes('up') ? 
                currentRank <= PieceRank.Eight : 
                currentRank >= PieceRank.One;
        }

        function fileIsValid(currentFile: number): boolean {
            return direction.includes('right') ?
                currentFile <= getNumber(PieceFile.H) :
                currentFile >= getNumber(PieceFile.A);
        }

        function multiplier(type: 'rank' | 'file'): 1 | -1 {
            return type === 'rank' ?
                (direction.includes('up') ? 1 : -1) :
                (direction.includes('right') ? 1 : -1);
        }

        if (distance === 'far') {
            let possibilities: string[] = [];
            let currentFile = getNumber(this.file) + multiplier("file");
            let currentRank = this.rank + multiplier("rank");

            while (rankIsValid(currentRank) && fileIsValid(currentFile)) {
                possibilities.push(`${getLetter(currentFile)}${currentRank}`);
                    currentFile += multiplier("file");
                    currentRank += multiplier("rank");
            }

            return possibilities;
        }

        return [`${getLetter(getNumber(this.file) + multiplier("file"))}${this.rank + multiplier("rank")}`];
    }
}

let pieces: ChessPiece[] = [];

for (let file of [PieceFile.A, PieceFile.B, PieceFile.C, PieceFile.D, PieceFile.E, PieceFile.F, PieceFile.G, PieceFile.H]) {
    for(let rank of [PieceRank.One, PieceRank.Two, PieceRank.Seven, PieceRank.Eight]) {
        pieces.push(new ChessPiece(file, rank));
    }
}

export { ChessPiece, PieceColor, PieceType, PieceFile, PieceRank, getNumber, getLetter, pieces };