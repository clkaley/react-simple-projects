//createSlice bize bir Slice oluşturucak bunun içinde ise state in içinde durucak her şey burda olucak
import { createSlice } from "@reduxjs/toolkit";

//niye dışarı aktardık store.js üzerindeki reducers a vericez.
export const counterSlice = createSlice({
  //state ulaşmak istediğimiz zaman state.counter
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {},
});

export default counterSlice.reducer;
