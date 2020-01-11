import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'
import { FaGithubSquare } from "react-icons/fa";
const initialExpense = localStorage.getItem('expenses')?
JSON.parse(localStorage.getItem('expenses')) : [] ;
function App() {

  const [expenses,setExpenses] = useState(initialExpense) ;
  const [charge,setCharge] = useState('')
  const [amount,setAmount] = useState('')

  const [alert,setAlert] = useState({show:false})
  const [edit,setEdit] = useState(false)
  const [id,setId] = useState(0)
  useEffect(()=> {
    localStorage.setItem('expenses',JSON.stringify(expenses),[expenses])
  })
  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }

  const handleCharge = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault() ;
    if(charge !== '' && amount > 0) {

      if(edit){
        let tempExpenses = expenses.map(item => {
          return item.id === id? {...item,charge:charge,amount:amount} : item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({type:"success",text:" depence a ete modifie avec succes"})

      } else {
        const singleExpense = {id:uuid(),charge:charge,amount:amount}
        setExpenses([...expenses,singleExpense])
        handleAlert({type:'success' ,text:'votre depense a ete ajoute !'})
      }
      setCharge("") ;
      setAmount("") ;

    } else {
      handleAlert({type:'danger' ,text:'verifiez le nom de la depence ou/et le montant '})

    }
  }
  const clearItems = () => {
    setExpenses([]) ;
    handleAlert({type:"danger",text:"tous les depence ont ete supprimee"})

  }
  const deleteItem = (id) => {
    let tempExpenses = expenses.filter(item => item.id !== id)
    setExpenses(tempExpenses) ;
    handleAlert({type:"danger",text:"depence supprimee"})
  }
  const editItem = id => {
let expense = expenses.find(item => item.id === id)
let {charge,amount} = expense;
setCharge(charge)
setAmount(amount)
setEdit(true)
setId(id) ;
  }
  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert />
    <h1> calculez votre budget !  </h1>
    <main className="App">
    <ExpenseForm
    charge={charge}
    amount={amount}
    handleAmount={handleAmount}
    handleCharge={handleCharge}
    handleSubmit={handleSubmit}
    edit={edit}/>
    <ExpenseList expenses={expenses} deleteItem={deleteItem} editItem={editItem} clearItems={clearItems} />
    </main>
    <h1>
    totale d'argent dépensé <span className="total">
     {expenses.reduce((acc,curr)=>{
      return (acc+= parseInt(curr.amount)) ;
    },0)} Dinar Tunisien
    </span>

    </h1>
    <div>
    <h3> developped by : Hichem Smairia 2020° </h3>


    github :<FaGithubSquare /> https://github.com/hichemsmairia

    </div>

    </>
  );
}

export default App;
