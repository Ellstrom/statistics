import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const dynamicData = (data) => {

    /*
    const ORDER_TYPE_NEW = 'NEW';
    const ORDER_TYPE_MODIFY = 'MODIFY';
    const ORDER_TYPE_MOBILE_CROSS_STACK = 'MOBILE_CROSS_STACK';
    const ORDER_TYPE_MOVE = 'MOVE';
    const ORDER_TYPE_DISCONNECT = 'DISCONNECT';
     */
    const FIRST_DAY = '2020-10-12';
    const SECOND_DAY = '2020-10-13';
    const THIRD_DAY = '2020-10-14';
    const FOURTH_DAY = '2020-10-15';
    const FIFTH_DAY = '2020-10-16';
    const SIXTH_DAY = '2020-10-17';
    const SEVENTH_DAY = '2020-10-18';

    const countFirstDay = data.filter((obj) => obj.created_date.includes(FIRST_DAY)).length;
    const countSecondDay = data.filter((obj) => obj.created_date.includes(SECOND_DAY)).length;
    const countThirdDay = data.filter((obj) => obj.created_date.includes(THIRD_DAY)).length;
    const countFourthDay = data.filter((obj) => obj.created_date.includes(FOURTH_DAY)).length;
    const countFifthDay = data.filter((obj) => obj.created_date.includes(FIFTH_DAY)).length;
    const countSixthDay = data.filter((obj) => obj.created_date.includes(SIXTH_DAY)).length;
    const countSeventhDay = data.filter((obj) => obj.created_date.includes(SEVENTH_DAY)).length;

    const dataSetData = [
        countFirstDay,
        countSecondDay,
        countThirdDay,
        countFourthDay,
        countFifthDay,
        countSixthDay,
        countSeventhDay
    ]

    let dataSet = {
        labels: [
            FIRST_DAY,
            SECOND_DAY,
            THIRD_DAY,
            FOURTH_DAY,
            FIFTH_DAY,
            SIXTH_DAY,
            SEVENTH_DAY
        ],
        datasets: [
            {
                label: '# of Orders',
                data: dataSetData,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
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
            <h1 className='title'>Number of orders per day</h1>
        </div>
        <Bar className='borderBox' data={dynamicData(props.csvData)} options={options}  />
    </>
)

export default VerticalBar