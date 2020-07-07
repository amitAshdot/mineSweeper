import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
    resetSettings,
} from '../../store/game/actions';
import {
    buildBoard,
} from '../../store/board/actions';
const Failed = () => {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();

    const restartAll = () => {
        dispatch(buildBoard(board.size, board.lvl));
        dispatch(resetSettings())
    }
    return (
        <div className="failed">
            <h2>YOU SUCK... AND DEAD!</h2>
            <h3>game over! start over?</h3>
            <Button size="medium" variant="contained" color="primary" className="startOverBtn" onClick={restartAll}>
                Play Again
            </Button>
        </div>
    )
}

export default Failed
