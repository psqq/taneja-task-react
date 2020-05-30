import * as React from "react";
import { LevelPreview } from "./LevelPreview";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  expr: {
    position: "fixed",
    outline: 0,
    borderStyle: "none",
    width: "100vw",
    textAlign: "center",
    bottom: "50vh",
    fontSize: 30,
  },
});

type Props = {
  value?: string;
  cursorPosition?: number;
};

export const Expr: React.FunctionComponent<Props> = ({
  value = "",
  cursorPosition = 0,
}) => {
  const classes = useStyles();
  const ref = React.createRef<HTMLInputElement>();
  React.useEffect(() => {
    ref.current.focus();
    ref.current.setSelectionRange(cursorPosition, cursorPosition);
  });
  return (
    <input className={classes.expr} type="text" value={value} ref={ref}></input>
  );
};
