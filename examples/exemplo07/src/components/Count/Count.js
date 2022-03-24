import React from "react";

import { useCount } from "../../context/CountContext";

export default function Count() {
  const { count, setCount } = useCount();

  return (
    <div>
      <label>Contador: {count}</label>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
