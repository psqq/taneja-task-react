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
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.from} - {props.to === Infinity ? '∞' : props.to}
        </div>
    );
}
