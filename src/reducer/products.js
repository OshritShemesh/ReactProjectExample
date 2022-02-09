import React from 'react'
//to be able to change, update, the store
import produce from 'immer'

//givving starting values to the store, if we want
//we can only declare the store without values
const initialState = {
    products: [
        { name: "pen", id: 1, price: 2.5, color: "blue" },
        { name: "pencile", id: 2, price: 3.4, color: "red" },
        { name: "book", id: 3, price: 25, color: "" },
        { name: "notebook", id: 4, price: 4.5, color: "purple" },
        { name: "eariser", id: 5, price: 1, color: "wight" },
        { name: "marker", id: 6, price: 2.7, color: "yellow" },
        { name: "scissers", id: 7, price: 7, color: "green" },
        { name: "crayons", id: 8, price: 10, color: "colorful" },
    ],
}

export default produce((state, action) => {
    switch (action.type) {
    }
}, initialState)