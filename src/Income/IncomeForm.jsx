import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { addIncomeData, putUser } from '../redux/budgetReducer/action';

export function IncomeForm({update}) {
   
    const dispatch=useDispatch();
    const mydata=useSelector((store)=>{
        return store.budgetReducer.userIncome;
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
        e.preventDefault();

        let obj={
            id:new Date().getTime(),
            title,
            amount:+amount,
            date,
            category,
            description,
        }

      dispatch(addIncomeData(obj))
       
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });

        dispatch(putUser(mydata)).then((res)=>{
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
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                    required
                />
            </div>

            <div className="input-control">
                <input value={amount}  
                    type="number" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
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

                />
            </div>

            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option> 
                    <option value="parttime">Part-Time Job</option>
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button type="submit">Add Income</button>
            </div>
        </form>
            
        </DIV>
    )
}


const DIV = styled.div`
    display:flex;
    

    form{
    margin: auto;
    width:70%;
    }

    form>div{
        margin-top:15px;
    }

    input{
        padding:15px;
        width:80%;
    }

    select {
        padding:15px;
        width:87%; 
    }

    textarea{
        padding:10px;
        width:83%; 
    }

    .submit-btn{
        display:flex;
        justify-content:center;
    }
    button{
        padding:15px;
        background-color:black;
        color:white;
        font-size:15px;
    }
`;





