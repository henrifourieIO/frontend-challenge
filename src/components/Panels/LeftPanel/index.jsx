import React from 'react'

const LeftPanel = ({setOpen, open, formRef}) => {
    
    const handleClick = () => {
        setOpen(!open);
        !open ? formRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }) : null
    }

    return (
        <div className="contentWrapper">
            <div className="faceImageWrapper">
                <img src="/images/face.svg" alt="#" />
            </div>
            <div>
                <h1>Front-end Challenge!</h1>
                <p>This is the design I coded up for you to impress you.</p>
            </div>
            <div>
                <button onClick={() => handleClick()}>
                    <img src="/images/arrow.svg" alt="#" className={open ? 'open': ''} />
                </button>
            </div>
        </div>
    )
}

export default LeftPanel