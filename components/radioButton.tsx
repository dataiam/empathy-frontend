import React from 'react'

const RadioButton: React.FC<radioBtnProps> = ({ name, title, isChecked }) =>{
  return (
    <div className="form-check">
    <input className="form-check-input" type="radio" name={name} id={name} checked={isChecked} readOnly/>
    <label className="form-check-label" htmlFor={name}>
        {title}
    </label>
    </div>
  )
}

export default RadioButton;