import React, { useState, useEffect} from "react";
import {fetchDailyData} from '../../api'
import { Line, Bar} from 'react-chartjs-2'
import {styles} from './Graph.module.css'


const Graph = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async () =>{
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData)
        fetchApi();
    },[]);

    const lineChart = (
        dailyData.length
         ?(
            <Line 
        data={{
            labels:dailyData.map(({ date })=> date),
            datasets:[{
                data:dailyData.map(({ confirmed })=> confirmed),
                label:'infected',
                borderColor: 'rgba(0, 0, 255, 0.5)',
                fill:true,
            }, {
                data:dailyData.map(({ deaths })=> deaths),
                label:'Deaths',
                borderColor: 'rgba(255, 0, 0 ,0.5)',
                fill: true,

            }],
        }}
        />):null

    );
    const barChart =(
        confirmed?(
            <Bar 
            data={{
                labels:['infected','recovered','deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:['rgba(0 , 0, 255, 0.5)','rgba(0 , 255, 0, 0.5)','rgba(255 , 0, 0, 0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]

            }}
            options={{
                legend:{display:false},
                title:{display:true, text:`current state in ${country}`},
            }}
            />
        ) :null
    )

    return(
            <div>
                {country ? barChart : lineChart}
            </div>
    )
} 

export default Graph;