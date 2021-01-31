import React, { useState } from 'react'
import './css/Index.css'

export default function Index() {
    const [input, setInput] = useState("");
    console.log(input)
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calcBtns.push(
            <button
                onClick={(e) => {
                    setInput(input + e.target.value);
                }}
                value={item}
                key={item}
            >
                {/* {" "} */}
                {item}
            </button>
        );
    });
    return (
        <>
            <div className="wrapper">
                {" "}
                <div className="show-input">
                    <p>{input}</p>
                </div>
                <div className="container row">
                    <div className="col-md-9">
                        <div className="calc-btn">
                            {calcBtns}
                            <div className="modifiers">
                                {/* clear button */}

                                <button onClick={() => setInput(input.substr(0, input.length - 1))}>
                                    Clear
                                </button>

                                {/* clear all */}
                                <button onClick={() => setInput("")} value="">
                                    AC
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="operations">
                            {/* add button */}
                            <button onClick={(e) => setInput(input + e.target.value)} value="+">
                                +
                            </button>

                            {/* minus btn */}
                            <button onClick={(e) => setInput(input + e.target.value)} value="-">
                                {" "}
                                -{" "}
                            </button>

                            <button onClick={(e) => setInput(input + e.target.value)} value="*">
                                {" "}
                                *
                             </button>

                            <button onClick={(e) => setInput(input + e.target.value)} value="/">
                                {" "}
                                /
                            </button>
                            {/* "=" btn */}
                            <button
                                onClick={(e) => {
                                    try {
                                        setInput(
                                            String(eval(input)).length > 3 &&
                                                String(eval(input)).includes(".")
                                                ? String(eval(input).toFixed(4))
                                                : String(eval(input))
                                        );
                                    } catch (e) {
                                        console.log(e);
                                    }
                                }}
                                value="="
                            >
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
