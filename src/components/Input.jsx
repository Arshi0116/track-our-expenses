import React from 'react'

export const Input = ({label,id,name,value,onChange,error}) => {
  return (
    <div className="input-container">
    <label htmlFor={label}>{label}</label>
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
    <p className='erorr'>{error}</p>
  </div>
  )
}
