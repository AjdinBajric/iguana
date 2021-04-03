import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter = {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      {isLogged && (
        <>
          <h1>Valuable information</h1>
          <p>Those information cannot be viewed if you are not logged in.</p>
        </>
      )}
    </div>
  );
}

export default App;
