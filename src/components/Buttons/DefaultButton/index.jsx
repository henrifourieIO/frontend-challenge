import React from 'react'

const Button = ({onClick, color, children}) => {

    return(
        <button onClick={onClick} className={`button ${color}`}>
            {children}
        </button>
    )
}

export default Button;