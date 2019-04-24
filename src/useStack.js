import { useState, useEffect } from "react";

const useStack = () => {
  const [stack, setStack] = useState([]);
  const [length, setLength] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setLength(stack.length);
    setIsEmpty(stack.length === 0);
  }, [stack]);

  // push
  const push = (...value) => {
    setStack([...stack, ...value]);
  };

  // pop
  const pop = () => {
    if (isEmpty) {
      throw new Error("Stack is empty");
    }

    setStack(stack.slice(0, stack.length - 1));
  };

  // peek
  const peek = () => {
    if (isEmpty) {
      throw new Error("No values!");
    }

    return stack[stack.length - 1];
  };

  // clear
  const clear = () => setStack([]);

  // values
  const values = () => [...stack];

  return {
    push,
    pop,
    clear,
    length,
    values,
    peek,
    isEmpty
  };
};

export default useStack;
