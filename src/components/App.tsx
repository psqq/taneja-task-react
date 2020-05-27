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

export function App() {
    const classes = useStyles();
    const interval = 1000;
    function makeLevelPreview(n: number) {
        let from = n * interval + 1;
        let to = n * interval + interval;
        if (to >= 11000) {
            to = 11111;
        }
        if (from >= 11001) {
            from = 11112;
            to = Infinity;
        }
        if (to < from) {
            to = from + 1;
        }
        return (
            <LevelPreview
                className={classes.levelPreview} key={`${from}-${to}`}
                from={from} to={to}
            />
        );
    }
    return (
        <div className={`${classes.levels} ${classes.noSelection}`}>
            {[...Array(12).keys()].map(makeLevelPreview)}
        </div>
    );
}