import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllQuotes=createAsyncThunk('quotes/fetchAllQuotes',async()=>{
    const res=await axios("https://www.breakingbadapi.com/api/quotes")
    return res.data
})



export const quotesSlice = createSlice({
    name:"quotes",
    initialState:{
        items:[],
        status:'idle'
    },
    reducers:{},
    extraReducers:{
        [fetchAllQuotes.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.status='succeeded'
        },
        [fetchAllQuotes.pending]:(state,action)=>{
            state.status='loading'
        },
        [fetchAllQuotes.rejected]:(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        },

    }
})

export const selectQuotes=(state)=>state.quotes.items
export const selectStatus=(state)=>state.quotes.status
export const selectError=(state)=>state.quotes.error
export default quotesSlice.reducer;