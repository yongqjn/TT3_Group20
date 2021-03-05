import React from 'react'
import "./InvalidInput.css"

function InvalidInput(props) {
    return (
        <div className="error">
            <p>{props.message}</p>
        </div>
    )
}

export default InvalidInput