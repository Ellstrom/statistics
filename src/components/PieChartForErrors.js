import React from 'react'
import { Pie } from '@reactchartjs/react-chart.js'

const dynamicData = (data) => {


    const SERVICE_CREATE_CUSTOMER_ORDER = 'createcustomerorder';
    const SERVICE_CROSS_STACK = 'crossstack';
    const SERVICE_CUSTOMER_ORDER_COMMUNICATION = 'customer-order-communication';
    const SERVICE_FRAUD_EVALUATION = 'fraud-evaluation';
    const SERVICE_MANAGE_CUSTOMER = 'managecustomer';
    const SERVICE_CUSTOMER_ORDER_DATA = 'customer-order-data';

    const SERVICE_UNMAPPED = 'unmapped';

    console.log("count total=", data.length);

    console.log(data)
    const ordersWithError = data.filter((obj) => obj.service);

    const countErrors = ordersWithError.length;

    console.log("count error=", countErrors);



    const countServiceCreateCustomerOrder = ordersWithError.filter((obj) => SERVICE_CREATE_CUSTOMER_ORDER === obj.service).length;
    const countServiceCrossStack = ordersWithError.filter((obj) => SERVICE_CROSS_STACK === obj.service).length;
    const countServiceCustomerOrderCommunication = ordersWithError.filter((obj) => SERVICE_CUSTOMER_ORDER_COMMUNICATION === obj.service).length;
    const countServiceFraudEvaluation = ordersWithError.filter((obj) => SERVICE_FRAUD_EVALUATION === obj.service).length;
    const countServiceManageCustomer = ordersWithError.filter((obj) => SERVICE_MANAGE_CUSTOMER === obj.service).length;
    const countServiceCustomerOrderData = ordersWithError.filter((obj) => SERVICE_CUSTOMER_ORDER_DATA === obj.service).length;


    const unmappedErrors = ordersWithError.filter((obj) => (SERVICE_CREATE_CUSTOMER_ORDER !== obj.service))
        .filter((obj) => (SERVICE_CROSS_STACK !== obj.service))
        .filter((obj) => (SERVICE_CUSTOMER_ORDER_COMMUNICATION !== obj.service))
        .filter((obj) => (SERVICE_FRAUD_EVALUATION !== obj.service))
        .filter((obj) => (SERVICE_MANAGE_CUSTOMER !== obj.service))
        .filter((obj) => (SERVICE_CUSTOMER_ORDER_DATA !== obj.service))

    console.log("unmapped errors:");
    console.log(unmappedErrors);

    const countUnmapped = countErrors - countServiceCreateCustomerOrder - countServiceCrossStack - countServiceCustomerOrderCommunication - countServiceFraudEvaluation - countServiceManageCustomer - countServiceCustomerOrderData;


    const dataSetData = [
        countServiceCreateCustomerOrder,
        countServiceCrossStack,
        countServiceCustomerOrderCommunication,
        countServiceFraudEvaluation,
        countServiceManageCustomer,
        countUnmapped
    ]

    let dataSet = {
        labels: [
            SERVICE_CREATE_CUSTOMER_ORDER,
            SERVICE_CROSS_STACK,
            SERVICE_CUSTOMER_ORDER_COMMUNICATION,
            SERVICE_FRAUD_EVALUATION,
            SERVICE_MANAGE_CUSTOMER,
            SERVICE_UNMAPPED
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

const PieChartForErrors = (props) => (
    <>
        <div className='header'>
            <h1 className='title'>Errors based on service</h1>
        </div>
        <Pie className='borderBox' data={dynamicData(props.csvData)} options={options}  />
    </>
)

export default PieChartForErrors