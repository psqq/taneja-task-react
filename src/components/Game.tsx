import * as React from "react";
import { createUseStyles } from "react-jss";

import { Expr } from "./Expr";
import { HudArrows } from "./HudArrows";

const useStyles = createUseStyles({
  goal: {
    textAlign: "right",
    paddingRight: "30px",
  },
});

export interface GameProps {
  level: number;
}

export const Game: React.FunctionComponent<GameProps> = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    expr: "123456789",
    pos: 0,
  });
  function moveLeft() {
    setState({ ...state, pos: Math.max(0, state.pos - 1) });
  }
  function moveRight() {
    setState({ ...state, pos: Math.min(state.pos + 1, state.expr.length) });
  }
  return (
    <>
      <h1 className={classes.goal}>{props.level}</h1>
      <Expr value={state.expr} cursorPosition={state.pos} />
      <HudArrows onPressLeft={moveLeft} onPressRight={moveRight} />
    </>
  );
};
