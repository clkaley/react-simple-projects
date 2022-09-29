import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//veriyi çekecek olan action ı oluşturucaz

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await axios(`https://www.breakingbadapi.com/api/characters?limit=10`);
    return response.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

//reduceler dışarı aktarıldı
export default charactersSlice.reducer;

//actionlar dışarı aktarılacak
