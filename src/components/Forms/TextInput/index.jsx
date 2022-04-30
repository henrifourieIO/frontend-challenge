import { useRef } from 'react';
import { useState } from 'react'
// import { validateForm } from './validation';

const TextInput = ({ type, name, placeholder, label, error }) => {
    
    return (
        <div className={`formItem ${error ? 'error' : ''}`}>
            <label htmlFor={name}>
                <div />
                {label}
            </label>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />

                <small>Invalid {label}</small>
            </div>
        </div>
    )
}



export default TextInput