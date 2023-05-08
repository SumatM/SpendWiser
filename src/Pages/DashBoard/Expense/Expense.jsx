import styled from "styled-components";
import From from "./From";


function Expense(){

    return(
        <ExpenseDiv>
            <h1>Expence</h1>
    {/* total Expense */}
            <div className="totalexpense">
            <h2>Total Expense:<span className="currency">  -${"1234"}</span></h2>
            </div>
    {/* form and data list */}

    {/* form */}

            <div>
            <From/>
            </div>
    {/* list */}

            <div>

            </div>
        </ExpenseDiv>
    )
}


export default Expense;


const ExpenseDiv= styled.div`
    background-color:aqua;

    .totalexpense{
        text-align:center;
    }
    .currency{
        font-size:45px;
        color:red;
    }
`;