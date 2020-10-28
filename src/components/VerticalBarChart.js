import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const dynamicData = (data) => {
    //console.log(data[0]);

    const countNewOrders = data.filter((obj) => obj.order_type === "NEW").length;
    const countModifyOrders = data.filter((obj) => obj.order_type === "MODIFY").length;
    const countMobileCrossStackOrders = data.filter((obj) => obj.order_type === "MOBILE_CROSS_STACK").length;
    const countMoveOrders = data.filter((obj) => obj.order_type === "MOVE").length;
    const countDisconnectOrders = data.filter((obj) => obj.order_type === "DISCONNECT").length;

    const dataSetData = [countNewOrders, countModifyOrders, countMobileCrossStackOrders, countMoveOrders, countDisconnectOrders]

    let dataSet = {
        labels: ['NEW', 'MODIFY', 'MOBILE_CROSS_STACK', 'MOVE', 'DISCONNECT'],
        datasets: [
            {
                label: '# of Orders',
                data: dataSetData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return dataSet;

};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

const VerticalBar = (props) => (
    <>
        <div className='header'>
            <h1 className='title'>Number of orders by orderType</h1>
        </div>
        <Bar className='borderBox' data={dynamicData(props.csvData)} options={options}  />
    </>
)

export default VerticalBar