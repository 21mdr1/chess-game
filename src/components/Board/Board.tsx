import Square from '../Square/Square';
import './Board.scss';

function Board() {
    const files: ('a'| 'b'| 'c'| 'd'| 'e'| 'f'| 'g'| 'h')[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks: ('1'| '2'| '3'| '4'| '5'| '6'| '7'| '8')[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

    return (
        <div className='board'>
            {ranks.map(rank => {
                return files.map(file => {
                    return <Square file={file} rank={rank} />
                });
            })}
        </div>
    );
}

export default Board;