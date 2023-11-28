import React, { useEffect, useState } from 'react'
import { BarChart,XAxis,YAxis,Tooltip,Legend,Bar } from 'recharts';

const data1 = [
    {name:"2017",react : 32,angular : 37,vue : 60},
    {name:"2018",react : 42,angular : 42,vue : 54},
    {name:"2019",react : 41,angular : 41,vue : 54},
    {name:"2020",react : 80,angular : 37,vue : 28},
    {name:"2021",react : 52,angular : 31,vue : 27},
    {name:"2022",react : 95,angular : 44,vue : 49}
]


export default function BarCharts() {

    const [data,setData] = useState();

useEffect(() => {
    
    setData(data1)

})

  return (

    <>
    
    
              <BarChart width={600} height={250} data={data}>
                  <XAxis dataKey="name" stroke='black' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="react" fill="#8884d8" />
                  <Bar dataKey="angular" fill="#82ca9d" />
                  <Bar dataKey="vue" fill="rgb(212, 212, 96)" />
              </BarChart>
    
    </>
  )
}
