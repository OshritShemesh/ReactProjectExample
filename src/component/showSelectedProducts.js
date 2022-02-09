import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { removeFromSelected, updateSelectedAmount } from '../action'

//for icons
import { MdRemoveShoppingCart } from 'react-icons/md'

function mapStateToProps(state) {
    return {
        selectedProducts: state.selectedProducts.selectedProducts
    }
}

//'withRouter'- for the 'history.push'
export default withRouter(connect(mapStateToProps)
    (
        function ShowSelectedProducts(props) {

            //'history'- for the 'history.push'
            const { selectedProducts, dispatch, history } = props
            const [toPaymentFlag, setToPaymentFlag] = useState(0)

            function removeFromSelectedPro(selectedProId) {
                dispatch(removeFromSelected(selectedProId))
            }

            function updateAmount(productId, amount) {
                dispatch(updateSelectedAmount({ productId: productId, amount: amount }))
            }

            function toPaymentFunc() {
                if (toPaymentFlag) {
                    if (window.confirm('are you sure you want to pass to the payment??'))
                    //     // alert
                    //     // return <Redirect to='/payment' />
                    { history.push('/payment') }
                }
            }

            useEffect(toPaymentFunc, [toPaymentFlag])

            return (
                <>
                    <h3>The products in your cart:</h3>
                    {selectedProducts.map(selectedP =>
                        <p key={selectedP.id}>{selectedP.name},
                            {selectedP.price},
                            {selectedP.color}
                            <button onClick={() => updateAmount(selectedP.id, selectedP.amount + 1)}>+</button>
                            {selectedP.amount}
                            <button onClick={() => updateAmount(selectedP.id, selectedP.amount - 1)}>-</button>
                            <button onClick={() => { removeFromSelectedPro(selectedP.id) }}><MdRemoveShoppingCart /></button>
                        </p>
                    )
                    }
                    <button onClick={() => { setToPaymentFlag(1) }}>to payment</button>
                </>
            )
        }
    )
)