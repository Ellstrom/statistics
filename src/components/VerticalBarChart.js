import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const dynamicData = (data) => {

    const ORDER_TYPE_NEW = 'NEW';
    const ORDER_TYPE_MODIFY = 'MODIFY';
    const ORDER_TYPE_MOBILE_CROSS_STACK = 'MOBILE_CROSS_STACK';
    const ORDER_TYPE_MOVE = 'MOVE';
    const ORDER_TYPE_DISCONNECT = 'DISCONNECT';

    const countNewOrders = data.filter((obj) => ORDER_TYPE_NEW === obj.order_type).length;
    const countModifyOrders = data.filter((obj) => ORDER_TYPE_MODIFY === obj.order_type).length;
    const countMobileCrossStackOrders = data.filter((obj) => ORDER_TYPE_MOBILE_CROSS_STACK === obj.order_type).length;
    const countMoveOrders = data.filter((obj) => ORDER_TYPE_MOVE === obj.order_type).length;
    const countDisconnectOrders = data.filter((obj) => ORDER_TYPE_DISCONNECT === obj.order_type).length;

    const dataSetData = [countNewOrders, countModifyOrders, countMobileCrossStackOrders, countMoveOrders, countDisconnectOrders]

    let dataSet = {
        labels: [
            ORDER_TYPE_NEW,
            ORDER_TYPE_MODIFY,
            ORDER_TYPE_MOBILE_CROSS_STACK,
            ORDER_TYPE_MOVE,
            ORDER_TYPE_DISCONNECT
        ],
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