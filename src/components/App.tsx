import * as React from "react";
import { LevelsViewer } from "./LevelsViewer";
import { Game } from "./Game";

export function App() {
  const [state, setState] = React.useState(null);
  return (
    // state == null
    //     ? <LevelsViewer onSelectLevel={level => setState(level)} />
    //     :
    <Game level={123} />
  );
}
