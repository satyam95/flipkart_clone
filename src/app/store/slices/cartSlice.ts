import { createSlice } from "@reduxjs/toolkit";

interface CartStateType {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  quantity: number;
}

interface InitialState {
  cart: CartStateType[];
  productNumber: number;
}

const initialState: InitialState = {
  cart: [],
  productNumber: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.productNumber = state.productNumber + 1;
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.cart.find(
        (product) => product.id === action.payload.id
      );
      state.productNumber = state.productNumber - productToRemove!.quantity;
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const itemInc = state.cart.find((item) => item.id === action.payload.id);
      if (itemInc!.quantity >= 1) {
        itemInc!.quantity = itemInc!.quantity + 1;
      }
      state.productNumber = state.productNumber + 1;
    },
    decrementInCart: (state, action) => {
      const itemDec = state.cart.find((item) => item.id === action.payload.id);
      if (itemDec!.quantity === 1) {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload
        );
        state.cart.splice(index, 1);
      } else {
        itemDec!.quantity--;
      }
      state.productNumber = state.productNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } = cartSlice.actions;

export default cartSlice.reducer;
