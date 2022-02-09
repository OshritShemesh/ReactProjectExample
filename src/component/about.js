import React, { useState } from 'react'

import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';

export default function About() {
    return (
        <>
            <FutherComponent>
                <StoreHistory />
                <StoreOpenResons />
                <StoreState />
            </FutherComponent>
        </>
    )
}

function FutherComponent(props) {

    const [pageNum, setPageNum] = useState(0)

    return (
        <>
            <button disabled={pageNum === 0} onClick={() => setPageNum(pageNum - 1)}><BsFillCaretLeftFill /></button>
            <button disabled={pageNum === props.children.length - 1} onClick={() => setPageNum(pageNum + 1)}><BsFillCaretRightFill /></button>

            {props.children[pageNum]}
        </>
    )
}

function StoreHistory() {
    return (
        <>
            <h3>Our History:</h3>
            <p>our family loved to help people...</p>
        </>
    )
}

function StoreOpenResons() {
    return (
        <>
            <h3>Why We Opened the Store:</h3>
            <p>We saw the need of people of a good store...</p>
        </>
    )
}

function StoreState() {
    return (
        <>
            <h3>The State of the Store:</h3>
            <p>Nowadays, we try to help people with...</p>
        </>
    )
}