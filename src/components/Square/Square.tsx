import Piece from '../Piece/Piece';
import './Square.scss';

const mapping = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8
}

function Square({ rank, file }: {
    rank: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    file: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
}) {

    let color: "white" | "black" | undefined, type: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king" | undefined;

    switch (rank) {
        case '1': 
            color = "white";
            break;
        case '2':
            color = "white";
            type = "pawn";
            break;
        case '7':
            color = "black";
            type = "pawn";
            break;
        case '8':
            color = "black";
            break;
    }

    switch (file) {
        case 'a':
        case 'h':
            if (rank === '1' || rank === '8') {
                type = "rook";
            }
            break;
        case 'b':
        case 'g':
            if (rank === '1' || rank === '8') {
                type = "knight";
            }
            break;
        case 'c':
        case 'f':
            if (rank === '1' || rank === '8') {
                type = "bishop";
            }
            break;
        case 'd':
            if (rank === '1' || rank === '8') {
                type = "queen";
            }
            break;
        case 'e':
            if (rank === '1' || rank === '8') {
                type = "king";
            }
            break;
    }

    return (
        <div className={`square square--${rank} square--${file} square--${(Number(rank) + mapping[file]) % 2 == 0? 'dark' : 'light'}`}>
            <Piece type={ type } color={ color } />
        </div>
    );
}

export default Square;