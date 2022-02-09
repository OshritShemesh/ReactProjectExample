//selectedProducts
export function addProductToCart(newSelectedProduct) {
    return { type: 'ADD_PRODUCT_TO_CART', payload: newSelectedProduct }
}

export function removeFromSelected(selectedProId) {
    return { type: 'REMOVE_FROM_SELECTED', payload: selectedProId }
}

export function updateSelectedAmount(updateProduct) {
    return { type: 'UPDATE_SELECTED_AMOUNT', payload: updateProduct }
}