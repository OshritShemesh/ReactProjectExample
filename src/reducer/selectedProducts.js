import React from 'react'
//to be able to change, update, the store
import produce from 'immer'

//givving starting values to the store, if we want
//we can only declare the store without values
const initialState = {
    selectedProducts: [],
}

//'produce'-to be able to change values in the store
//'state'-our store, the 'initialState'
//'action'-what to do, and with what to do the action: {type:'UPDATE_CLASS',payload:'...'}
export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            {
                const indexPro = state.selectedProducts.findIndex(selectedP => selectedP.id === action.payload.id)
                if (indexPro != -1)
                    //already chose to cart
                    state.selectedProducts[indexPro].amount++;
                else {
                    //first time to choose this item
                    action.payload = { ...action.payload, amount: 1 };
                    state.selectedProducts.push(action.payload)
                }
            }
            break;
        case 'REMOVE_FROM_SELECTED':
            { state.selectedProducts = state.selectedProducts.filter(selected => selected.id !== action.payload) }
            break;
        case 'UPDATE_SELECTED_AMOUNT':
            { state.selectedProducts.find(selectedP => selectedP.id === action.payload.productId).amount = action.payload.amount }
            break;
    }
}, initialState)