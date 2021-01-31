import React from 'react'
import './css/Notification.css'

export default function Notification({ message, active }) {
    return (
        <>
            <div className={`notification ${active ? "" : "hide"}`}>
                <p>{message}</p>
            </div>
        </>
    )
}
