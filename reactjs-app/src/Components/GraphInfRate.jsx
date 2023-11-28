import React, { useState,useEffect } from 'react';
import { Line, LineChart, XAxis, YAxis,Tooltip,Legend } from 'recharts';


const data1 = [
    
    {
      "country": "United States",
      "inflationRateUSA": 4,
      "interestRateUSA" : 1 ,
      "year": "2020"
    },
    {
      "country": "United States",
      "inflationRateUSA": 4.5,
      "interestRateUSA" : 2.5 ,
      "year": "2020-3"
    },
    {
      "country": "United States",
      "inflationRateUSA": 4.7,
      "interestRateUSA" : 3 ,
      "year": "2020-4"
    },
    {
      "country": "United States",
      "inflationRateUSA": 6.5,
      "interestRateUSA" : 3.5 ,
      "year": "2021"
    },
    {
      "country": "United States",
      "inflationRateUSA":7.5,
      "interestRateUSA" : 4 ,
      "year": "2021-3"
    },
    {
      "country": "United States",
      "inflationRateUSA": 6.5 ,
      "interestRateUSA" : 3.7 ,
      "year": "2021-4"
    },
    {
      "country": "United States",
      "inflationRateUSA": 6,
      "interestRateUSA" : 3.7 ,
      "year": "2022"
    },
    {
      "country": "United States",
      "inflationRateUSA": 5.5,
      "interestRateUSA" : 3.7 ,
      "year": "2022-3"
    },
    {
      "country": "United States",
      "inflationRateUSA": 5,
      "interestRateUSA" : 3.5 ,
      "year": "2022-4"
    },
    {
      "country": "United States",
      "inflationRateUSA": 4,
      "interestRateUSA" : 3.5 ,
      "year": "2023"
    },
    {
      "country": "United States",
      "inflationRateUSA": 2,
      "interestRateUSA" : 3.5 ,
      "year": "2023-3"
    }

  ]


export default function GraphInfRate() {

    const [inflationData,setInflationData] = useState()

useEffect(() => {
    setInflationData(data1)
},[])


  return (

    <>

                <LineChart width={600} height={250} data={inflationData} 
                margin={ {top: 5, right: 5, bottom: 5, left: 5} } layout='horizontal' >

                    <Line type='monotone' 
                    dataKey='inflationRateUSA' 
                    stroke='cyan' 
                    strokeWidth={1} 
                    legendType='plainline'
                    dot={{ stroke: 'blue', strokeWidth: 1 }}
                    activeDot={{ stroke: 'white', strokeWidth: 5, r: 2 }}
                    isAnimationActive={true}
                    animationEasing='ease-in-out'
                    animationDuration={1500}
                    />

                    <Line type='monotone' 
                    dataKey='interestRateUSA' 
                    stroke='bisque' 
                    strokeWidth={1}
                    legendType='plainline'
                    dot={{ stroke: 'red', strokeWidth: 1 }} 
                    activeDot={{ stroke: 'white', strokeWidth: 5 , r: 2 }}
                    isAnimationActive={true}
                    animationEasing='ease-in-out'
                    animationDuration={1500}
                    />

                    <XAxis dataKey='year' stroke='black'  />
                    <YAxis stroke='black' />

                    <Tooltip />
                    <Legend />

                </LineChart>
    
    
    </>
  )
}
