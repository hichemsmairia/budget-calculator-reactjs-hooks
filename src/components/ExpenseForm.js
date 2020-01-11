import React from 'react' ;
import {MdSend} from 'react-icons/md'
const ExpenseForm = ({charge,amount,edit,handleCharge,handleAmount,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-center">
    <div className="form-groupe" >
    <label htmlFor="charge">
    Depences
     </label>
     <input
     onChange={handleCharge}
     value={charge}
     type="text"
     className="form-control"
      id="charge"
       name="charge"
       placeholder="e.g : Essence voiture" />
    </div>
    <div className="form-groupe" >
    <label htmlFor="amount">
    Montant
     </label>
     <input
     value={amount}
     onChange={handleAmount}
      type="number"
     className="form-control"
      id="amount"
       name="amount"
       placeholder="e.g : 250 TDN " />
    </div>
    </div>
    <button type="submit" className="btn" > {edit?'editer':'sauvgarder'}
    <MdSend className="btn-icon" />
    </button>
    </form>
  )
}
export default ExpenseForm
