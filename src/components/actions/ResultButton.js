import React from 'react'

export default function ResultButton({ calculate }) {
    return (
        <div className="operations">
            <button value="=" onClick={() => calculate()}>=</button>
        </div>
    )
}
