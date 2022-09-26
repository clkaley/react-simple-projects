import { createSlice } from '@reduxjs/toolkit'


export const characterSlice =createSlice({
    name:'characters',
    initialState:{
      items:[]  
    },
    reducers:{

    }
})


//reduceler dışarı aktarıldı
export default characterSlice.reducer;

//actionlar dışarı aktarılacak

