import React, { useState } from 'react'

function SmartCounter() {
    const [count, setCount] = useState(0);
    const MaxValue = 10;
    const MinValue = 0;

    const increment = () => {
        if (count < MaxValue) {
            setCount(prev => prev + 1)
        }
    }
    const decrement = () => {
        if (count > MinValue) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className='SmartCounter'
            style={{
                textAlign: "center",
                padding: "20px",
                border: "1px solid #add",
                borderRadius: "8px",
                width: "200px",
                margin: "auto"
            }}>
            <h2>Count: {count}</h2>
            <div style={{
                height: "24px",
                color: "#666"
            }}>
                {count === 5 && <p>halfway There!</p>}
                {count === MaxValue && <p style={{ color: "red" }}>Goal Reached</p>}
            </div>
            <div style={{ marginTop: "10px" }}>
                <button
                    onClick={decrement}
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        cursor: count === MinValue ? "not-allowed" : "pointer"
                    }}>-</button>
                <button
                    onClick={increment}
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        cursor: count === MaxValue ? "not-allowed" : "pointer"
                    }}
                >+</button>
            </div>
            <div>
                <button
                    onClick={()=>setCount(0)}
                    style={{
                        marginTop:"15px",
                        display:"block",
                        width:"100%",
                        background:"none",
                        border:"1px underline",
                        cursor:"pointer"
                    }}
                    >Reset</button>
            </div>
        </div>
    )
}

export default SmartCounter