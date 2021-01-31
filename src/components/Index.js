import React, { useState } from 'react'
import Buttons from './actions/Buttons'
import Result from './actions/Result'
import Operation from './actions/Operations'
import ResultButton from './actions/ResultButton'
import ClearButton from './actions/ClearButton'
import Notification from './actions/Notification'

import './css/Index.css'
import Operations from './actions/Operations'

export default function Index() {
    const operations = ["+", "-", "*", "/"]
    const message = 'Использован недопустимый формат'

    const [input, setInput] = useState("")
    const [notificationActive, setNotificationActive] = useState(false)

    const addValue = value => {
        setInput(input + value)
    }
    const addOperation = value => {
        const lastElement = input[input.length - 1]
        let result = input
        if (operations.includes(lastElement)) {
            result = result.slice(0, -1)
        }
        setInput(result + value)
    }
    const calculate = () => {
        const lastElement = input[input.length - 1]
        let result = input
        if (operations.includes(lastElement)) {
            setNotificationActive(true)
            setTimeout(() => {
                setNotificationActive(false)
            }, 3000)
            return
        }
        result = String(eval(result))

        setInput(result)
    }
    const clearInput = () => {
        const result = input.slice(0, -1)
        setInput(result)
    }
    const clearAllInput = () => {
        setInput("")
    }
    return (
        <>
            <div className="wrapper">
                <Notification message={message} active={notificationActive} />
                <Result result={input} />
                <div className="row">
                    <div className="col-md-8 col-8">
                        <Buttons addValue={addValue} />
                        <ClearButton clearInput={clearInput} clearAllInput={clearAllInput} />
                    </div>
                    <div className="col-md-4 col-4">
                        <Operation addOperation={addOperation} />
                        <ResultButton calculate={calculate} />
                    </div>
                </div>
            </div>
        </>
    )
}
