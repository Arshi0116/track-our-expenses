import React from 'react'

export default function ContextMenu({ContextMenu,setContectMenu,setExpenses ,id,setExpense,expenses,setRowId}) {
  if(!ContextMenu.top){return}
  return (
    <div className='context-menu' style={ContextMenu} >
        <div onClick={()=>{
          setContectMenu({})
          const {title,category,amount}=expenses.find((ex)=>ex.id===id)
          setExpense( {title,category,amount})
          setRowId(id)
        }
      }>Edit</div>


        <div onClick={()=>{
          setContectMenu({})
          setExpenses(preState=>preState.filter((expense)=>expense.id!==id))
        }
         }>Delete</div>
    </div>
  )
}
