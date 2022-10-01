import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//veriyi çekecek olan action ı oluşturucaz

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await axios(`https://www.breakingbadapi.com/api/characters?limit=12`);
    return response.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading:false,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]:(state,action)=>{
      state.isLoading=true
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items=action.payload;
      state.isLoading=false;
    },
    [fetchCharacters.rejected]:(state,action)=>{
      state.isLoading=false;
      state.error=action.error.message
    }
  },
});

//reduceler dışarı aktarıldı
export default charactersSlice.reducer;

//actionlar dışarı aktarılacak
