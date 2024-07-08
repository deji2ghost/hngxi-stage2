import { createSlice } from "@reduxjs/toolkit"
import walNut from "../images/walnuts.png"
import chiaSeeds from "../images/chiaSeeds.png"


const initialState={
    cart: [
        {
            id: 2,
            image: walNut,
            price: '40',
            name: 'Wal Nuts',
            description: 'Walnuts are a type of tree nut that is rich in nutrients and has a distinctive appearance and flavor. walnuts are a delicious and nutritious snack that can be enjoyed on their own or used in a variety of recipes, from baked goods to savory dishes.'
        },
        {
            id: 3,
            image: chiaSeeds,
            price: '10',
            name: 'Chia Seeds',
            description: 'Chia seeds are a type of edible seed that comes from the plant Salvia hispanica, native to Central America and Mexico.They have been a staple food in many cultures for centuries, and are highly valued for their nutritional and health benefits.'
        }
    ],
    totalItem: 0,
    totalAmount: 0,
}

const CartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(exist => exist.id === action.payload.id)
            console.log(existingProduct)
            if(existingProduct){
                const tempCart = state.cart.map(product => {
                    if(product.id === action.payload.id){
                        return({
                            ...product, quantity: product.quantity + 1, totalAmount: product.quantity * product.price
                        })
                    }else{
                        return(product)
                    }
                })
                state.cart = tempCart
            }else{
                state.cart.push(action.payload)
            }
        }
    }
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer