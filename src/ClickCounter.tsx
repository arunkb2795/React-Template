import React, { useState } from 'react'

export default function ClickCounter() {
    const [count, setCount] = useState(0)
    const handleButtonClick = () => {
        setCount(count => count + 1)
    }
    return (
        <button onClick={handleButtonClick}>
            Count {count}
        </button>
    )
}
