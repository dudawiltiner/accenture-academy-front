import React from "react";

import { useCount } from "../../context/CountContext";

export default function Espelho() {
  const { count } = useCount();

  return (
    <div>
      <label>Espelho: {count}</label>
    </div>
  );
}
