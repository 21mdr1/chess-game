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

function Square({ rank, file, selected }: {
    rank: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    file: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
    selected: boolean;
}) {

    const color = selected ? "selected" : 
        (Number(rank) + mapping[file]) % 2 == 0 ? 'dark' : 'light'


    return (
        <div className={`square location--${rank} location--${file} square--${color}`}>
        </div>
    );
}

export default Square;