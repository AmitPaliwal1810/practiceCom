import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "01/05",
    Accepted: 4000,
    Denied: 2400,
    amt: 2400,
  },
  {
    name: "02/05",
    Accepted: 3000,
    Denied: 1398,
    amt: 2210,
  },
  {
    name: "03/05",
    Accepted: 3800,
    Denied: 800,
    amt: 2290,
  },
  {
    name: "04/05",
    Accepted: 4780,
    Denied: 1908,
    amt: 2000,
  },
  {
    name: "05/05",
    Accepted: 2090,
    Denied: 800,
    amt: 2181,
  },
  {
    name: "06/05",
    Accepted: 2390,
    Denied: 800,
    amt: 2500,
  },
  {
    name: "07/05",
    Accepted: 3490,
    Denied: 1300,
    amt: 2100,
  },
  {
    name: "08/05",
    Accepted: 3790,
    Denied: 2300,
    amt: 2100,
  },
  {
    name: "09/05",
    Accepted: 5490,
    Denied: 2300,
    amt: 2100,
  },
  {
    name: "10/05",
    Accepted: 3490,
    Denied: 1300,
    amt: 2100,
  },
  {
    name: "11/05",
    Accepted: 3790,
    Denied: 1000,
    amt: 2100,
  },
  {
    name: "12/05",
    Accepted: 4490,
    Denied: 1300,
    amt: 2100,
  },
  {
    name: "13/05",
    Accepted: 3400,
    Denied: 1300,
    amt: 2100,
  },
  {
    name: "14/05",
    Accepted: 3500,
    Denied: 1560,
    amt: 2100,
  },
];

const ChartData = () => {
  return (
      <>
    <BarChart
      width={1250}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
        
      }}
    >   
        <Bar dataKey="Accepted" fill="#6AFF6A" />
      <Bar dataKey="Denied" fill="#FF8383" />
      <CartesianGrid strokeDasharray="0 3" />
      <XAxis dataKey="name" style={{
          color: "#777777",
          fontWeight: "500",
          font: "normal normal normal 20px/24px Museo Sans 500",
      }}  />
      <YAxis style={{
          color: "#777777",
          fontWeight: "500",
          font: "normal normal normal 20px/24px Museo Sans 500",
      }} />
      <Tooltip />
      <Legend />
      
    </BarChart>
    </>
  );
};

export default ChartData;
