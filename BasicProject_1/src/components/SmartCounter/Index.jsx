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
        <div className='SmartCounter'>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default SmartCounter