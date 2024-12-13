import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./Component/Slice/cardSlice";
import { wishSlice } from "./Component/Slice/wishlishSlice";

export const store = configureStore({
  reducer: {
    cardItemSlice: cardSlice.reducer,
    wishItemSlice: wishSlice.reducer
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
