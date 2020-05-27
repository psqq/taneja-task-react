import * as React from "react";
import LevelPreview from "./LevelPreview";

export class App extends React.Component {
    render() {
        return (
            <div>
                {[...Array(12).keys()].map(n => {
                    let from = n * 1000 + 1;
                    let to = n * 1000 + 1000;
                    if (to >= 11000) {
                        to = 11111;
                    }
                    if (from >= 11000) {
                        from = 11112;
                        to = Infinity;
                    }
                    return <LevelPreview from={from} to={to} key={`${from}-${to}`} />
                })}
            </div>
        );
    }
}