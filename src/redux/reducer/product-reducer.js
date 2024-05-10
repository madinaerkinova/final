import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";
const initialState = loadState("product") || {
  product: [],
  price: 0,
};
const productReduser = createSlice({
  name: "productReduser",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const bool = state.product.find((item) => item.id === action.payload.id);

      if (!bool) {
        let n = 0;
        state.product.map((item) => (n += item.newPrice));
        const prise = n + action.payload.newPrice;
        return {
          ...state,
          product: [...state.product, action.payload],
          price: prise,
        };
      }
      if (bool) {
        const newState = state.product.map((item) =>
          item.id === action.payload.id ? action.payload.count + 1 : item
        );
        let n = 0;
        state.product.map((item) => (n += item.newPrice));
        const prise = n + action.payload.newPrice * newState[0];
        const newProduct = state.product.map((item) =>
          item.id === action.payload.id ? { ...item, count: newState[0] } : item
        );
        return {
          ...state,
          product: [...newProduct],
          price: prise,
        };
      }
    },
    deleteProduct: (state, action) => {
      console.log(action.payload.id);
      const newData = state?.product.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        product: newData,
        price: state.price - action.payload.newPrice,
      };
    },
  },
});

export default productReduser.reducer;

export const { addProduct, deleteProduct } = productReduser.actions;
