import React from "react";
import { render } from "react-dom";
import useStack from "./useStack";

const App = () => {
  const { push, pop, clear, length, values, peek, isEmpty } = useStack();

  return (
    <div>
      {values().map(elem => (
        <div key={elem}>
          <span>{elem}</span>
          <br />
        </div>
      ))}
      <button onClick={() => push(length)}>PUSH</button>
      <br />
      <button onClick={() => pop()}>POP</button>
      <br />
      <button onClick={() => clear()}>CLEAR</button>
      <br />
      <button onClick={() => console.log(isEmpty, length, peek())}>
        check
      </button>
      <br />
    </div>
  );
};

render(<App />, document.getElementById("root"));
