"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const DougnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets:[
            {
                label:'banks',
                data:[550,330,120],
                backgroundColor:['#0747b6','#2265b8','#2f91fa']
            }

        ],
        labels:['Bank 1','Bank 2','Bank 3'],
    }
  return <Doughnut data={data}
     options={
        {
            cutout:'60%',
            plugins:{
                legend:{
                    display:false
                }
            }
        }
     }
  /> 
}

export default DougnutChart