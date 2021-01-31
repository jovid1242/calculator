import React from 'react'
import './css/Result.css'

export default function Result({ result }) {
    return (
        <>
            <div className="calculator-result">
                <p>
                    {result}
                </p>
            </div>
        </>
    )
}
