import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <Link to="/about">About</Link> <br />
            <Link to="/showProducts">All Products</Link> <br />
            <Link to="/showSelectedProducts">Selected Products</Link> <br />
            <Link to="/payment">Payment</Link> <br />
            <p>______________________________________</p>
            <br /><br />
        </>
    )
}