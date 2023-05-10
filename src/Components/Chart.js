import {Bar} from 'react-chartjs-2'
import styled from 'styled-components'
import { CartesianGrid, LineChart, XAxis, YAxis,Line,Legend, Tooltip } from 'recharts'




function Chart({data}){

return (
    <div>
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            responsive={true}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="green" strokeWidth={3} />
            <Line type="monotone" dataKey="expense" stroke="red" strokeWidth={3}/>
            </LineChart>
    </div>
)
}

export default Chart;



