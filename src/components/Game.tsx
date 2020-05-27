import * as React from "react";

export interface GameProps {
    level: number;
}

export const Game: React.FunctionComponent<GameProps> = (props) => {
    return (
        <h1>
            Level {props.level}
        </h1>
    );
}