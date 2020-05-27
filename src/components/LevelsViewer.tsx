import * as React from "react";
import { LevelPreview } from "./LevelPreview";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    levels: {
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gridAutoRows: 'minmax(100px, 1fr)',
    },
    levelPreview: {
        border: '1px solid black',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'grid',
        '&:hover': {
            border: '1px solid yellow',
            cursor: 'pointer',
            backgroundColor: 'grey',
            color: 'white',
        }
    },
    noSelection: {
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MsUserSelect: 'none',
    }
});

/**
 * Makes intervals.
 * start - b1; a2 - b2; ...; a_n - b_n; a_n+1 - maxValue; maxValue+1 - end;
 * Exmaple 1, 20, 2, 7:
 *      1 - 2; 3 - 4; 5 - 6; 7 - 7; 8 - 20.
 * @param start 
 * @param end 
 * @param interval 
 * @param maxValue 
 */
function* getIntervals(start: number, end: number, interval: number, maxValue: number) {
    if (start > end && interval > 0) {
        return;
    }
    if (interval <= 0) {
        return;
    }
    if (maxValue > end) {
        maxValue = end;
    }
    let from = start;
    let to;
    for (; ;) { // from <= end
        to = from + interval - 1;
        if (to > maxValue) {
            yield { from, to: maxValue };
            if (maxValue < end) {
                yield { from: maxValue + 1, to: end };
            }
            break;
        }
        yield { from, to };
        if (to == maxValue) {
            if (to < end) {
                yield { from: to + 1, to: end };
            }
            break;
        }
        from = to + 1;
    }
}

export interface LevelsViewerProps {
    onSelectLevel?: (level: number) => void;
}

export const LevelsViewer: React.FunctionComponent<LevelsViewerProps> = (props) => {
    const classes = useStyles();
    const MAX_LEVEL = 11111;
    const [state, setState] = React.useState({
        from: 1,
        to: Infinity,
        interval: 1000,
    });
    const onClick = (from: number, to: number) => {
        if (state.interval <= 1) {
            props.onSelectLevel(from);
            return;
        }
        let maxValue = MAX_LEVEL;
        if (to != Infinity) {
            maxValue = to;
        }
        let dist = maxValue - from
        let interval = 1;
        if (dist >= 10000) {
            interval = 1000;
        } else if (dist >= 5000) {
            interval = 500;
        } else if (dist >= 1000) {
            interval = 200;
        } else if (dist >= 500) {
            interval = 50;
        } else if (dist >= 100) {
            interval = 1;
        }
        if (to === Infinity) {
            to = from + 1;
            interval = 1;
        }
        setState({
            from, to, interval,
        });
    };
    const levels: JSX.Element[] = [];
    let maxValue = MAX_LEVEL;
    if (state.to != Infinity && state.to > maxValue) {
        maxValue = state.to;
    }
    for (let interval of getIntervals(state.from, state.to, state.interval, maxValue)) {
        const from = interval.from;
        const to = interval.to;
        levels.push(<LevelPreview
            className={classes.levelPreview}
            key={`${from}-${to}`}
            from={from} to={to}
            onClick={() => onClick(from, to)}
        />)
    }
    return (
        <div className={`${classes.levels} ${classes.noSelection}`}>
            {levels}
        </div>
    );
}