import * as React from "react";

import { Expr } from "./Expr";
import { HudArrows } from "./HudArrows";

export interface GameProps {
  level: number;
}

export const Game: React.FunctionComponent<GameProps> = (props) => {
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
      <h1>Level {props.level}</h1>
      <Expr value={state.expr} cursorPosition={state.pos} />
      <HudArrows onPressLeft={moveLeft} onPressRight={moveRight} />
    </>
  );
};
