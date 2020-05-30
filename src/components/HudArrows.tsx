import * as React from "react";
import { LevelPreview } from "./LevelPreview";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    display: "grid",
    bottom: 0,
    left: 0,
    gridTemplateColumns: "1fr 1fr",
    "&>div": {
      fontSize: 50,
      padding: 10,
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
});

export interface GameProps {
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export const HudArrows: React.FunctionComponent<GameProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div onClick={props.onPressLeft}>&larr;</div>
      <div onClick={props.onPressRight}>&rarr;</div>
    </div>
  );
};
