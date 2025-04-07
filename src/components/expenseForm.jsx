import React, { useState } from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput'
import { rules } from 'eslint-plugin-react-refresh'

export default function ExpenseForm({ setExpenses,expense ,setExpense ,rowId}) {
  
  const[error,setError]=useState({})
  const validationconfig={
    key: crypto.randomUUID(),
    title:[{required:true,message:"please give the title"},
      {minlength:true,message:"minimum alphabet should be more than 5"}],
    category:[{required:true,message:"please select any category"}],
    amount:[{required:true,message:"please write some amount"}],
  }
 const validate=(formData)=>{
  const errorData={}
  Object.entries(formData).forEach(([key,value])=>{
    validationconfig[key].forEach((rule)=>{
      if(rule.required && !value){
        return errorData[key]=rule.message 
     
      }
      if(rule.minlength && value.length<5 ){ 
        return errorData[key]=rule.message
      }
    })  })



setError(errorData)
return errorData
 }
  const handleSubmit = (e) => {
    e.preventDefault()
    const valid=validate(expense)
     if(Object.keys(valid).length) return
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
        <Input label='Title' id='title'name='title'value={expense.title}  onChange={(e) =>
    setExpense((prevState) => ({ ...prevState, title: e.target.value })) } error={error.title}/> 


    
    <SelectInput  label='category' id='category'name='category'value={expense.category}  onChange={(e) =>
    setExpense((prevState) => ({ ...prevState, category: e.target.value })) } slectLable='select the category' options={['Grocery','Clothes','Bills','Education','Medicine']} error={error.category} />

      
  
      <Input label='Amount' id='amount'name='amount'value={expense.amount}  onChange={(e) =>
      setExpense((prevState) => ({ ...prevState, amount: e.target.value })) } error={error.amount}/>
      <button className="add-btn">{rowId? 'Save' : 'Add'}</button>
    </form>
  )
}