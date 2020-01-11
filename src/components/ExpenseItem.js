import React from 'react' ;
import {MdEdit,MdDelete} from 'react-icons/md'
const ExpenseItem = ({expense,deleteItem,editItem}) => {
  const {id,charge,amount} = expense
  return (
    <li className="item">
    <div className="info">
    <span className="expense"> {charge} </span>
    <span className="amount"> {amount} TDN </span>
    </div>
    <div>
    <button
    className="edit-btn"
     aria-label="editer"
     onClick={()=>editItem(id)}>
    <MdEdit />
    </button>
    <button
    className="clear-btn"
     aria-label="supprimer"
     onClick={()=>deleteItem(id)}>
    <MdDelete />
    </button>
     </div>
    </li>
  )
}
export default ExpenseItem
