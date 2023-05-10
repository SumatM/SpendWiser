import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { CartesianGrid, LineChart, XAxis, YAxis, Line, Legend, Tooltip } from 'recharts';

const ResponsiveLineChart = styled(LineChart)`
  width: 100%;
  height: auto;
`;

function Chart({ data }) {
  return (
    <DIV>
      <ResponsiveLineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="green" strokeWidth={3} />
        <Line type="monotone" dataKey="expence" stroke="red" strokeWidth={3} />
      </ResponsiveLineChart>
    </DIV>
  );
}

export default Chart;


const DIV = styled.div`
@media (max-width: 768px) {
  .recharts-text,
  .recharts-cartesian-axis-tick-value {
    font-size: 12px;
  }
  .recharts-cartesian-axis-tick-line {
    stroke-width: 1;
  }
  .recharts-legend-wrapper {
    font-size: 12px;
  }
}

`;