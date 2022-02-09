import React from 'react'
//to be able to change, update, the store
import produce from 'immer'
//to connect the store
import { applyMiddleware, combineReducers, createStore } from 'redux'

//bringing all the reducer files
import products from "./reducer/products";
import selectedProducts from "./reducer/selectedProducts";

// //bringing the middleware
// import { alertNewPupil, logAction, alertNewPupilSeePupils } from './myMiddlewares'

//combines all the reducers to one store
const reducer = combineReducers({ products, selectedProducts })

// //to put the store in the app
// // 'applyMiddleware' - to use middleware
const store = createStore(reducer)//applyMiddleware(alertNewPupil, logAction, alertNewPupilSeePupils)
window.store = store

export default store;