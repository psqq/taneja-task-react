import * as React from "react";

export interface LevelPreviewProps {
    from: number;
    to: number;
}

export default class LevelPreview extends React.Component<LevelPreviewProps, {}> {
    render() {
        return (
            <h1>
                Levels from {this.props.from} to {this.props.to}
            </h1>
        );
    }
}
