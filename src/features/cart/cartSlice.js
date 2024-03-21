import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            itemId: 20,
            name: 'polo',
            quantity: 1,
            price: 20,
            totalPrice: 40,
        }
    ],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.price * item.quantity;
        },
        decreaseQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.price * item.quantity;
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;