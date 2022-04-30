import React from 'react'

const RadioButton = ({ icons, label, active, onClick }) => {

    return (
        <div className={`radioItem ${active ? 'active' : ''}`} onClick={onClick}>
            <div><img src={active ? icons.active : icons.unactive} alt={label} /></div>
            <span>{label}</span>
        </div>
    )
}

export default RadioButton