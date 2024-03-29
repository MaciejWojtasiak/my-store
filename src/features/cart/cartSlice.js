import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [

    ],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
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
            if (item.quantity === 0) {
                cartSlice.caseReducers.deleteItem(state, action);
            }
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state => state.cart.cart.reduce((acc, curr) => acc += curr.totalPrice, 0));
export const getTotalCartQuantity = (state => state.cart.cart.reduce((acc, curr) => acc += curr.quantity, 0));
export const getTotalItemQuantityById = (id) => (state => state.cart.cart.find(item => item.id === id)?.quantity ?? 0)