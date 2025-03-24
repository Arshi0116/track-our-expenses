import React, { useState } from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const[error,setError]=useState({})
 const validate=(formData)=>{
  const errorData={}
  if(!formData.title){
    errorData.title='0pps!!! title is required'
  }
  if(!formData.category){
    errorData.category='please select the category'
  }

  if(!formData.amount){
    errorData.amount='0pps!!! amount is required'
  }
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
      <button className="add-btn">Add</button>
    </form>
  )
}