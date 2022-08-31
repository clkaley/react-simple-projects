//createSlice bize bir Slice oluşturucak bunun içinde ise state in içinde durucak her şey burda olucak
import { createSlice } from "@reduxjs/toolkit";

//niye dışarı aktardık store.js üzerindeki reducers a vericez.
export const counterSlice = createSlice({
  //state ulaşmak istediğimiz zaman state.counter
  name: "counter",
  initialState: {
    value: 0,
  },
  //update etmek için kullancağımız kısım reducers kısmı
  reducers: {
    //state in içinde üstteki objemiz olucak yani value ya erişebiliriz.
    increment:(state)=>{
        state.value+=1;
    },
    decrement:(state)=>{
        state.value-=1;
    }
  },
});

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer;
