import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cardSlice = createSlice({
  name: "cardItemSlice",
  initialState,
  reducers: {
    increment: (state,action) => {
      console.log(state);
      console.log(action);
      
      
    },
    
  
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cardSlice.actions;

export default cardSlice.reducer;
