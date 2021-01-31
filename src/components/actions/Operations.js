import React from 'react'
import './css/Operations.css'

export default function Operations({ addOperation }) {
    const calcOperations = [];
    const arr = ["+", "-", "*", "/"].forEach((item) => {
        calcOperations.push(
            <button
                onClick={(e) => {
                    addOperation(e.target.value);
                }}
                value={item}
                key={item}
            >
                {item}
            </button>
        );
    });
    return (
        <>
            <div className="operations">
                {calcOperations}
            </div>
        </>
    )
}
