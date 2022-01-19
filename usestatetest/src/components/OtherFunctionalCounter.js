import React, {useState} from 'react'

const OtherFunctionalCounter = props => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Other Functional Counter</h1>
            {count}<br/>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default OtherFunctionalCounter