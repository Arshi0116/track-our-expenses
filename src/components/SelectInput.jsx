import React from 'react'

export const SelectInput = ({label,id,name,value,onChange,slectLable,options,error}) => {
  return (
    <div className="input-container">
    <label htmlFor={label}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="" hidden>
        {slectLable}
      </option>
      {options.map(opt=> <option value={opt}>{opt}</option>)}
   
    
    </select>
    <p className='erorr'>{error}</p>
  </div>
  )
}
