import React, {useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector} from 'react-redux';
import { PutUser, addExpenseData } from '../redux/budgetExpenseReducer/action';


export function ExpenseForm({update}) {
   
    const dispatch=useDispatch();

    const userId=useSelector((store)=>{
        return store.AuthReducer.userData.id;
  });

    let mydata=useSelector((store)=>{
        return store.expenseReducer.userExpense;
    })


    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {

        setInputState({...inputState, [name]: e.target.value}) 
    }



    const handleSubmit = e => {
        console.log("yes")
        e.preventDefault();

        let obj={
            id:new Date().getTime(),
            title,
            amount:+amount,
            date,
            category,
            description,
        }

      dispatch(addExpenseData(obj))
       
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });

      

    console.log(mydata);

     dispatch(PutUser(mydata)(userId)).then((res)=>{
        update();
     })

    }

    





    return (
        <DIV>
        <form onSubmit={handleSubmit}>

            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                    required
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="number" 
                    name={'amount'} 
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')} 
                    required
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                    required
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="recharge">Recharge</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transportation">Transportation</option> 
                    <option value="medicalHealthcare">Medical & Healthcare</option>
                    <option value="food">Food</option>
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </DIV>
    )
}








