import React from 'react'
import { connect } from 'react-redux'

function mapstateToProps(state) {
    return {
        selectedProducts: state.selectedProducts.selectedProducts
    }
}

export default connect(mapstateToProps)(
    function Payment(props) {

        const { selectedProducts } = props

        return (
            <>
                <h3>The products in your cart:</h3>
                {selectedProducts.map(selectedP =>
                    <p key={selectedP.id}>{selectedP.name},
                        {selectedP.price} NIS,
                        {selectedP.color},
                        {selectedP.amount}
                    </p>
                )
                }

                <p>The total SUM: {selectedProducts.reduce((sum, currentSelected) =>
                    sum += currentSelected.price * currentSelected.amount
                    , 0)}
                </p>
            </>
        )
    }
)

