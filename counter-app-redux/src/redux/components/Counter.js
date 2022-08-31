import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { decrement, increment } from "../counter/counterSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch=useDispatch()
  console.log("counter value", value);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{value}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
