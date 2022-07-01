import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartState {
  isOpen: boolean;
  isSuccess: boolean;
  products: ICartProduct[];
  quantity: number;
  total: number;
}

export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
}

const initialState: ICartState = {
  isOpen: false,
  isSuccess: false,
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTotal: (state) => {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.total = total;
      state.quantity = quantity;
    },
    reset: () => initialState,
    addProduct: (state, action: PayloadAction<ICartProduct>) => {
      if (state.quantity === 0) {
        state.products.push(action.payload);
      } else {
        let check = false;
        state.products.forEach((item, index) => {
          if (item.id === action.payload.id) {
            state.products[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          state.products.push(action.payload);
        }
      }
      cartSlice.caseReducers.getTotal(state);
    },
    increase: (state, action: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );

      state.products[index].quantity++;
      cartSlice.caseReducers.getTotal(state);
    },
    decrease: (state, action: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );

      state.products[index].quantity--;
      cartSlice.caseReducers.getTotal(state);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      cartSlice.caseReducers.getTotal(state);
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addProduct,
  closeCart,
  getTotal,
  openCart,
  reset,
  decrease,
  increase,
  removeProduct,
} = actions;
// Export the reducer, either as a default or named export
export default reducer;
