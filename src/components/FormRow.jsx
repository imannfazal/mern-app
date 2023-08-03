import React from 'react'

const FormRow = ({type, labelText, name, defaultValue}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className='form-label'>{labelText || name}</label>
            <input type={type} className='form-input' id={name} name={name} required defaultValue={defaultValue || ''} />
        </div>
    )
}

export default FormRow;