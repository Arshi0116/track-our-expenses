import React from 'react'

export default function ContextMenu({ContextMenu,setContectMenu,setExpenses ,id}) {
  if(!ContextMenu.top){return}
  return (
    <div className='context-menu' style={ContextMenu} >
        <div onClick={()=>{setContectMenu({})}}>Edit</div>
        <div onClick={()=>{
          setContectMenu({})
          setExpenses(preState=>preState.filter((expense)=>expense.id!==id))
        }
         }>Delete</div>
    </div>
  )
}
