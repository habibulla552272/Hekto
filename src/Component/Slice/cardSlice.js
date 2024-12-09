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

  increment:(state,action)=>{
    let findItem =state.cartItems.findIndex((item)=>{return item.id===action.payload.id})

    if(findItem !== -1){
      state.cartItems[findItem].Qont +=1;
      state.cartItems[findItem].total =action.payload.price * state.cartItems[findItem].Qont;
        
       localStorage.setItem("card", JSON.stringify(state.cartItems));
    }
    
  },
decrement:(state,action)=>{
   let findItem = state.cartItems.findIndex((item) => {
     return item.id === action.payload.id;
   });

   if (findItem !== -1) {
     state.cartItems[findItem].Qont = state.cartItems[findItem].Qont-1;
     state.cartItems[findItem].total =
      state.cartItems[findItem].total- action.payload.price  ;
     localStorage.setItem("card", JSON.stringify(state.cartItems));
   }
}
  },
});

// Action creators are generated for each case reducer function
export const { increment, addtoCard,decrement } = cardSlice.actions;

export default cardSlice.reducer;
