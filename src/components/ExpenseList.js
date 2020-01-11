import React from 'react' ;
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expenses, editItem,deleteItem,clearItems}) => {
  return (
    <>
    <ul className="list">
    {expenses.map((expense)=>{
      return <Item key={expense.id}
      deleteItem={deleteItem}
      editItem={editItem}
       expense={expense} />
    })}
    </ul>
    {expenses.length > 0 && (<button
       className="btn" onClick={clearItems}>
    effacer le registre
    <MdDelete className="btn-icon" />
    </button>)}
    </>
  )
}
export default ExpenseList
