import * as React from "react";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    levelPreview: {
    },
});

export interface LevelPreviewProps {
    from: number;
    to: number;
    className?: string;
    onClick?: () => void;
}

export const LevelPreview: React.FunctionComponent<LevelPreviewProps> = (props) => {
    const classes = useStyles();
    let text = "" + props.from;
    if (props.to != props.from) {
        text += ' - ';
        if (props.to === Infinity) {
            text += '∞';
        } else {
            text += props.to;
        }
    }
    return (
        <div className={props.className} onClick={props.onClick}>
            {text}
        </div>
    );
}
