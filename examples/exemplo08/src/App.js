import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { decreaseAction, increaseAction } from "./redux/actions";

function App() {
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  
  const [counter, setCounter] = useState(0);

  const increase = () => {
    dispatch(increaseAction());
  }

  const decrease = () => {
    dispatch(decreaseAction());
  }

  useEffect(() => {
    setCounter(state.count)
  }, [state]);
  

  return (
    <div className="app">
      <div className="header">Contador</div>

      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <button type="button" onClick={decrease}>-</button>

          <label>
            <input
              className="input"
              type={"text"}
              value={counter}
              onChange={() => {}}
            />
          </label>

          <button type="button" onClick={increase}>+</button>
        </form>
      </div>
    </div>
  );
}

export default App;
