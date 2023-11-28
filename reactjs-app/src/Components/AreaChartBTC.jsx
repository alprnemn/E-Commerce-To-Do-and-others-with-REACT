import React, { useState ,useEffect } from 'react'
import { AreaChart,XAxis,YAxis,Tooltip,Area,Legend} from 'recharts'

const btcData = [
  {
    "btcPrice": 0.06,
    "year": "2010"
  },
  {
    "btcPrice": 0.7,
    "year": "2011"
  },
  {
    "btcPrice": 5,
    "year": "2012"
  },
  {
    "btcPrice": 18,
    "year": "2013"
  },
  {
    "btcPrice": 882,
    "year": "2014"
  },
  {
    "btcPrice": 210,
    "year": "2015"
  },
  {
    "btcPrice": 400,
    "year": "2016"
  },
  {
    "btcPrice": 908,
    "year": "2017"
  },
  {
    "btcPrice": 14900,
    "year": "2018"
  },
  {
    "btcPrice": 3500,
    "year": "2019"
  },
  {
    "btcPrice": 8680,
    "year": "2020"
  },
  {
    "btcPrice": 64654,
    "year": "2021"
  },
  {
    "btcPrice": 55000,
    "year": "2022"
  },
  {
    "btcPrice": 21235,
    "year": "2023"
  }
]

export default function AreaChartBTC() {

  const [data,setData] = useState()

useEffect(() => {

  setData(btcData)

})

  return (

    <>
            <AreaChart width={600} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorBTC" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis />
                    
                    <Tooltip />
                    <Area type="monotone" dataKey="btcPrice" stroke="#8884d8" fillOpacity={1} fill="url(#colorBTC)" />
                    <Legend />
                    
                
                </AreaChart>
    </>
  )
}
