import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    Cart: [],  
}

const cartSlice = createSlice({

    name: "Cart",
    initialState,
    reducers: {
        add(state, action) {
            // console.log(action.payload._id, "action payload id")

            //////////////////////////////////////////////////////////////////////////////////////////////
            let find = state.Cart.findIndex((item) => item._id === action.payload._id);
            if (find >= 0) {
                alert("Product is already added...!!")
            } else {
                state.Cart.push(action.payload);

            }
            ///////////////////////////////////////////////////////////////////////////////////////////////

        },
        
        remove(state, action) {
            console.log(action)
            const data = state.Cart.filter((item) => {
                return item._id !== action.payload

            })
            state.Cart = data
            localStorage.setItem("yourCart", data)
        },

        inc: (state, action) => {
            state.Cart = state.Cart.map((item) => {
                if (item._id === action.payload) {
                    if (item.quantity > item.cartQuantity) {
                        item.cartQuantity = item.cartQuantity + 1
                        return { ...item, cartQuantity: item.cartQuantity, totalPrice: item.price * item.cartQuantity }
                    }
                }
                return item;
            });
        },

        dec(state, action) {
            state.Cart = state.Cart.map((item) => {
                if (item._id === action.payload) {
                    if (item.cartQuantity > 1) {
                        item.cartQuantity = item.cartQuantity - 1
                        return { ...item, cartQuantity: item.cartQuantity, totalPrice: item.price * item.cartQuantity }
                    }

                }
                return item;
            });
        },
    },
}

)

export const { add, remove, inc, dec } = cartSlice.actions;
export default cartSlice.reducer;