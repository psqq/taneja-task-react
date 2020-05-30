import * as React from "react";
import { createUseStyles } from "react-jss";
import * as math from "mathjs";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    display: "grid",
    top: "45vh",
    left: 0,
  },
  expr: {
    outline: 0,
    borderStyle: "none",
    textAlign: "center",
    width: "100vw",
    left: 0,
    fontSize: 30,
  },
  result: {
    fontSize: 30,
    paddingTop: "50px",
    paddingLeft: "50px",
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
    const el = ref.current;
    el.focus();
    el.setSelectionRange(cursorPosition, cursorPosition);
    function onFocusOut(e: FocusEvent) {
      e.preventDefault();
      el.focus();
    }
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusout", onFocusOut);
    };
  });
  const result = math.evaluate(value) || 0;
  return (
    <div className={classes.container}>
      <input
        className={classes.expr}
        type="text"
        value={value}
        ref={ref}
      ></input>
      <div className={classes.result}>= {result}</div>
    </div>
  );
};
