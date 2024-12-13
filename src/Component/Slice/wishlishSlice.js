import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishItemSlice",
  initialState: {
    wishItem: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
  },
  reducers: {
    addtoWishList: (state, action) => {

       
        
      let findItem = state.wishItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findItem === -1) {
        state.wishItem.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.wishItem));
      } 
    },

   
    deleteitem: (state, action) => {
      if (confirm("are you sure Can you delete This item ?")) {
        state.wishItem.splice(action.payload, 1);
        localStorage.setItem("card", JSON.stringify(state.wishItem));
      }
 
  },
}

});

// Action creators are generated for each case reducer function
export const { addtoWishList } =wishSlice.actions;

export default wishSlice.reducer;
