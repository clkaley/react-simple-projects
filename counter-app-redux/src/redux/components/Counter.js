import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from "../counter/counterSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState( value);
  const dispatch = useDispatch();
  console.log("counter value", value);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{value}</h1>
      <button className="btn btn-danger m-2" onClick={() => dispatch(decrement())}>Decrement</button>
      <button  className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />
      <input className="mt-3" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}
        />
      <button className="btn btn-success mt-2" onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
      <input className="mt-5" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}
        />
      <button className="btn btn-danger mt-2" onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement by amount
      </button>
    </div>
  );
}

export default Counter;
