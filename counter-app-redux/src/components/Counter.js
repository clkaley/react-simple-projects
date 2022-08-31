import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from "../redux/counter/counterSlice";

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
      <div>
      <input className="" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}
        />
      <button className="btn btn-success mt-2 m-2" onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
      </div>
      <div>
      <input className="mt-5 m-2" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}
        />
      <button className="btn btn-danger " onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement by amount
      </button>
      </div>
    </div>
  );
}

export default Counter;
