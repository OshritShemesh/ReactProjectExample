import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addProductToCart } from '../action'

//npm install react-bootstrap bootstrap@4.6.0
import { Card, Button, Modal } from 'react-bootstrap'

//for icons
//npm install react-icons --save
import { AiOutlineShoppingCart } from 'react-icons/ai';


function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(
    function ShowProducts(props) {
        const { products, dispatch } = props

        // for the popup
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [productToPop, setProductToPop] = useState(0)

        function watchProductPopUp(productId) {
            setProductToPop(products.findIndex(p => p.id === productId))
            handleShow();
        }
        // for the popup---------END

        function addProductToSelected(product) {
            dispatch(addProductToCart(product))
        }

        return (
            <>

                <h3>Our Products:</h3>
                {products.map(product =>

                    <Card key={product.id} border="primary" style={{ width: '18rem', display: "inline-block" }}>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {product.color}
                            </Card.Title>
                            <Card.Text>
                                {product.price} NIS
                            </Card.Text>
                            <Button onClick={() => addProductToSelected(product)}><AiOutlineShoppingCart /></Button>

                            {/* adding the popup */}
                            <Button variant="primary" onClick={() => { watchProductPopUp(product.id); }}>
                                watch product
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{products[productToPop].name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{products[productToPop].color}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={() => { addProductToSelected(products[productToPop]); handleClose() }}>
                                        <AiOutlineShoppingCart />
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* end of the popup */}

                        </Card.Body>
                    </Card>

                )}

            </>
        )
    }
)