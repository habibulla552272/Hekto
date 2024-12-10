import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cardItemSlice",
  initialState: {
    cartItems: localStorage.getItem("card")
      ? JSON.parse(localStorage.getItem("card"))
      : [],
  },
  reducers: {
    addtoCard: (state, action) => {
      let findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findItem === -1) {
        state.cartItems.push(action.payload);
        localStorage.setItem("card", JSON.stringify(state.cartItems));
      } else {
        state.cartItems[findItem].Qont += 1;
        state.cartItems[findItem].total =
          action.payload.price * state.cartItems[findItem].Qont;
        localStorage.setItem("card", JSON.stringify(state.cartItems));
      }
    },

    increment: (state, action) => {
      state.cartItems[action.payload].Qont += 1;
      localStorage.setItem("card", JSON.stringify(state.cartItems));
    },
    decrement: (state, action) => {
      if (state.cartItems[action.payload].Qont !== 1) {
        state.cartItems[action.payload].Qont -= 1;
        localStorage.setItem("card", JSON.stringify(state.cartItems));
      }
    },
    deleteitem: (state, action) => {
     if(confirm('are you sure Can you delete This item ?')){
       state.cartItems.splice(action.payload, 1);
       localStorage.setItem("card", JSON.stringify(state.cartItems));
     }
    },
    clearCurdAllData:(state)=>{
     state.cartItems = [];
      localStorage.setItem('card',JSON.stringify(state.cartItems));
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, addtoCard, decrement, deleteitem,clearCurdAllData } =
  cardSlice.actions;

export default cardSlice.reducer;
