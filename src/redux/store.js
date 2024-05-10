import { configureStore } from "@reduxjs/toolkit";
("./reducer/user-reducer");
import { saveState } from "../lib/storage";
import productReducer from "./reducer/product-reducer";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
