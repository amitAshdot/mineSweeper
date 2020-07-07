import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    cellClicked,
    cellRightClick,
    checkCell,
    reduceMineLeft,
    increaseMineLeft,
    finish,
} from '../../store/board/actions';
const MineButton = (props) => {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();
    const checkBtn = () => {
        if (!props.cell.open) {
            if (props.mark === 1) {
                return <i className="fa fa-flag" aria-hidden="true"></i>
            }
            else if (props.mark === 2)
                return <i className="fa fa-question" aria-hidden="true"></i>
            else
                return null

        }
        else {
            if (props.cell.value >= 15)
                return <i className="fa fa-bomb" aria-hidden="true"></i>;
            else if (props.cell.value === 0) {
                return null
            }
            else
                return props.cell.value
        }

    }

    const value = checkBtn()
    const style = {
        color: props.cell.value >= 15 && props.cell.open ? 'black' : props.cell.value === 1 && props.cell.open ? '#047933' : props.cell.value === 2 && props.cell.open ? '#0c0398' : props.cell.value === 3 && props.cell.open ? 'red' : !props.cell.open && props.cell.mark === 1 ? '#e50808' : !props.cell.open && props.cell.mark === 2 ? '#dbce23' : 'black',
        backgroundColor: props.cell.mine && props.cell.open ? 'red' : null
    }

    const [state, setstate] = useState({ longpress: 250, start: 0 })
    const onMouseDown = (e) => { // when user start ontouch/click
        e.preventDefault();

        e = e || window.event;
        let tempStart = new Date().getTime();
        setstate({ ...state, start: tempStart })
    }

    const onMouseLeave = (e) => {//if user move the mouse/touch
        e.preventDefault();

        e = e || window.event;
        setstate({ ...state, start: 0 })
    }
    const onMouseUp = (e) => { // when click/touch is over
        e.preventDefault();
        e = e || window.event;
        if (new Date().getTime() >= (state.start + state.longpress)) { // when click/touch is LONG
            if (board.amountOfMines > 0 || e.target.className === 'fa fa-flag')//mines left or the cell is a flag
                dispatch(cellRightClick(props.cell.id));
            if (props.cell.mark === 1)
                dispatch(reduceMineLeft());
            else if (props.cell.mark === 2) {
                dispatch(increaseMineLeft());
            }
        } else {// when click/touch is over && SHORT)
            switch (window.event.which) {
                case 0: // touch mobile
                    dispatch(cellClicked(props.cell.id));
                    dispatch(checkCell(props.cell.id, props.board.board));
                    // if (board.amountOfMines === 0)
                    dispatch(finish(board.board, board.size, board.amountOfMines));

                    break;

                case 1: // left click
                    dispatch(cellClicked(props.cell.id));
                    dispatch(checkCell(props.cell.id, props.board.board));
                    // if (board.amountOfMines === 0)
                    dispatch(finish(board.board, board.size, board.amountOfMines));

                    break;

                case 3: // right click
                    if (board.amountOfMines > 0 || e.target.className === 'fa fa-flag')//mines left or the cell is a flag
                        dispatch(cellRightClick(props.cell.id));
                    if (props.cell.mark === 1 && board.amountOfMines > 0)
                        dispatch(reduceMineLeft());
                    else if (props.cell.mark === 2) {
                        dispatch(increaseMineLeft());
                    }
                    break;
                default:
                    return -1
            }
        }

    }

    return (
        <button
            onTouchStart={onMouseDown} onTouchEnd={onMouseUp}
            onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onMouseUp={onMouseUp}
            disabled={props.cell.open}
            style={style}
            className={props.cell.mark === 1 ? "btn flag" : props.cell.mark === 2 ? 'btn question' : 'btn regular'}>
            {value}
        </button>
    )
}

export default MineButton
