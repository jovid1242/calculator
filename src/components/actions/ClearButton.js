import React from 'react'

export default function ClearButton({ clearInput, clearAllInput }) {
    return (
        <div className="calculator-btn">
            <div className="modifiers">
                <button onClick={() => clearInput()}>
                    Clear
                </button>
                <button value="" onClick={() => clearAllInput()}>
                    AC
                </button>
            </div>
        </div >
    )
}
