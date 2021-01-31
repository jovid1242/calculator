import React from 'react'
import './css/Buttons.css'

export default function Buttons({ addValue }) {
    const calcButtons = [];
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "00", "."].forEach((item) => {
        calcButtons.push(
            <button
                onClick={(e) => {
                    addValue(e.target.value);
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
            <div className="calculator-btn">
                {calcButtons}
            </div>
        </>
    )
}
