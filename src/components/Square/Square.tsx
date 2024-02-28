import './Square.scss';

function Square({ rank, file }: {
    rank: '1'| '2'| '3'| '4'| '5'| '6'| '7'| '8';
    file: 'a'| 'b'| 'c'| 'd'| 'e'| 'f'| 'g'| 'h';
}) {
    return (
        <div className={`square square--${rank} square--${file}`}>
            {file + rank}
        </div>
    );
}

export default Square;