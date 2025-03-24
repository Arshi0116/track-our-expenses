import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/expenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from '../expenseData'


function App() {
  const [expenses, setExpenses] = useState(expenseData)

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} />
      </div>
    </main>
  )
}

export default App
//  <Input label='category' id='category'name='category'value={expense.category}  onChange={(e) =>
//   setExpense((prevState) => ({ ...prevState, category: e.target.value })) } error={error.category}/>


