import styled from "styled-components"

export default function Dashboard(){
    
    return (
        <DAS>
            <h1>DashBoard</h1>
            <div>
                <h2>All Transactions</h2>
            <div className="mainBox">
                <div className="alignment">
        {/* chart */}

        <div>
            <h2>Chart</h2>
        </div>
        <div className="leftCards">
            <div className="Cards">
                <h4>Total Income</h4>
                <h1>$1253</h1>
            </div>
            <div className="Cards">
                <h4>Total Income</h4>
                <h1>$1253</h1>
            </div>
            <div></div>
        </div>

                </div>

        {/* right side bar */}

                <div className="alignment">
        {/* recent history  */}
                    <div>
                    <div className="rightHeading"><h2>Recent History</h2></div>
                    <div className="rows">
                        <p>Travelling</p>
                        <p>$120</p>
                    </div>
                    <div className="rows">
                        <p>Travelling</p>
                        <p>$120</p>
                    </div>
                    </div>
        {/* salary */}
                    <div>
                    <div className="salaryheading rightHeading">
                        <div><h5>Min</h5></div>
                        <div><h2>Salary</h2></div>
                        <div><h5>Max</h5></div>
                    </div>
                    <div className="rows">
                        <p>$60</p>
                        <p>$120</p>
                    </div>
                    </div>
        {/* expenses */}
        <div>
                    <div className="salaryheading rightHeading">
                        <div><h5>Min</h5></div>
                        <div><h2>Expense</h2></div>
                        <div><h5>Max</h5></div>
                    </div>
                    <div className="rows">
                        <p>$60</p>
                        <p>$120</p>
                    </div>
                    </div>
                </div>

            </div>
            </div>
        </DAS>
    )
}


const DAS = styled.div`


.mainBox{
    display:flex;
    justify-content:space-between;
    background-color:#0099ff;
}

.alignment{
    width:40%;
}

.rows{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
    background-color:#81D4FA;
}

.salaryheading{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
}

.rightHeading{
    display:flex;
    justify-content:space-between;
    padding: 0 20px;
    margin:15px;
    background-color:#B2EBF2;
}

.leftCards{
    display:flex;
    justify-content:space-between;
    background-color:red;
    width:150%;
}

.Cards{
    background-color:green;
    width:40%;
}

`;