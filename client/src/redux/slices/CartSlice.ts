import { CartItemType } from '@/pages/Cart/types';
import { MenuArr } from '@/pages/Menu/data';
import { MenuArrItemType } from '@/pages/Menu/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cartItems: CartItemType[];
};

const initialState: CartState = {
  cartItems: MenuArr
    .filter((menu, index) => {
      if (index < 4) {
        return menu;
      }
      return;
    })
    .map((menu) => ({ ...menu, quantity: 1 })),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<MenuArrItemType>) {
      const { id } = payload;
      const itemExists = state.cartItems.find((item) => item.id === id);
      if (itemExists) {
        itemExists.quantity += 1;
        return;
      }
      state.cartItems.push({ ...payload, quantity: 1 });
    },
    removeFromCart(state, { payload }: PayloadAction<{ id: number }>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    updateQuantity(
      state,
      { payload }: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = payload;
      const itemExists = state.cartItems.find((item) => item.id === id);
      if (!itemExists) return;

      itemExists.quantity = quantity;
    },
  },
});

const { actions, reducer: cartReducer } = cartSlice;
export const { addToCart, removeFromCart, updateQuantity } = actions;
export default cartReducer;
