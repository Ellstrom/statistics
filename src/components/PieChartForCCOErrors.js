import React from 'react'
import { Pie } from '@reactchartjs/react-chart.js'

const dynamicData = (data) => {


    const SERVICE_CREATE_CUSTOMER_ORDER = 'createcustomerorder';


    //292, 218

    const ERROR_NULL = null;
    const ERROR_59 = 59;
    const ERROR_100 = 100;
    const ERROR_212 = 212;
    const ERROR_217 = 217;
    const ERROR_221 = 221;
    const ERROR_261 = 261;
    const ERROR_277 = 277;

    const ERROR_5 = 5;
    const ERROR_201 = 201;
    const ERROR_226 = 226;
    const ERROR_270 = 270;
    const ERROR_273 = 273;
    const ERROR_275 = 275;

    const ERROR_UNMAPPED = 'unmapped';

    console.log("count total=", data.length);

    console.log(data)
    const ordersWithError = data.filter((obj) => obj.service);
    const ordersWithCCOError = ordersWithError.filter((obj) => SERVICE_CREATE_CUSTOMER_ORDER === obj.service);



    const countCCOErrors = ordersWithCCOError.length;
    console.log("count cco error=", countCCOErrors);


    const countErrorNull = ordersWithCCOError.filter((obj) => ERROR_NULL === obj.service_error_code).length;
    const countError59 = ordersWithCCOError.filter((obj) => ERROR_59 === obj.service_error_code).length;
    const countError100 = ordersWithCCOError.filter((obj) => ERROR_100 === obj.service_error_code).length;
    const countError212 = ordersWithCCOError.filter((obj) => ERROR_212 === obj.service_error_code).length;
    const countError217 = ordersWithCCOError.filter((obj) => ERROR_217 === obj.service_error_code).length;
    const countError221 = ordersWithCCOError.filter((obj) => ERROR_221 === obj.service_error_code).length;
    const countError261 = ordersWithCCOError.filter((obj) => ERROR_261 === obj.service_error_code).length;
    const countError277 = ordersWithCCOError.filter((obj) => ERROR_277 === obj.service_error_code).length;
    const countError5 = ordersWithCCOError.filter((obj) => ERROR_5 === obj.service_error_code).length;
    const countError201 = ordersWithCCOError.filter((obj) => ERROR_201 === obj.service_error_code).length;
    const countError226 = ordersWithCCOError.filter((obj) => ERROR_226 === obj.service_error_code).length;
    const countError270 = ordersWithCCOError.filter((obj) => ERROR_270 === obj.service_error_code).length;
    const countError273 = ordersWithCCOError.filter((obj) => ERROR_273 === obj.service_error_code).length;
    const countError275 = ordersWithCCOError.filter((obj) => ERROR_275 === obj.service_error_code).length;


    const unmappedErrorCodes = ordersWithCCOError.filter((obj) => (ERROR_217 !== obj.service_error_code))
        .filter((obj) => (ERROR_59 !== obj.service_error_code))
        .filter((obj) => (ERROR_100 !== obj.service_error_code))
        .filter((obj) => (ERROR_212 !== obj.service_error_code))
        .filter((obj) => (ERROR_221 !== obj.service_error_code))
        .filter((obj) => (ERROR_261 !== obj.service_error_code))
        .filter((obj) => (ERROR_277 !== obj.service_error_code))
        .filter((obj) => (ERROR_5 !== obj.service_error_code))
        .filter((obj) => (ERROR_201 !== obj.service_error_code))
        .filter((obj) => (ERROR_226 !== obj.service_error_code))
        .filter((obj) => (ERROR_270 !== obj.service_error_code))
        .filter((obj) => (ERROR_273 !== obj.service_error_code))
        .filter((obj) => (ERROR_275 !== obj.service_error_code))
        .filter((obj) => (ERROR_NULL !== obj.service_error_code))

    console.log("unmapped errorsCodes:");
    console.log(unmappedErrorCodes);

    const countUnmapped = countCCOErrors
        - countError59
        - countError100
        - countError212
        - countError217
        - countError221
        - countError261
        - countError277
        - countError5
        - countError201
        - countError226
        - countError270
        - countError273
        - countError275
        - countErrorNull;


    const dataSetData = [
        countError59,
        countError100,
        countError212,
        countError217,
        countError221,
        countError261,
        countError277,
        countError5,
        countError201,
        countError226,
        countError270,
        countError273,
        countError275,
        countErrorNull,
        countUnmapped
    ]

    let dataSet = {
        labels: [
            ERROR_59,
            ERROR_100,
            ERROR_212,
            ERROR_217,
            ERROR_221,
            ERROR_261,
            ERROR_277,
            ERROR_5,
            ERROR_201,
            ERROR_226,
            ERROR_270,
            ERROR_273,
            ERROR_275,
            ERROR_NULL,
            ERROR_UNMAPPED
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
                    'rgba(220, 99, 132, 0.2)',
                    'rgba(30, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(220, 99, 132, 0.2)',
                    'rgba(30, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(220, 99, 132, 0.2)',
                    'rgba(30, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
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

const PieChartForCCOErrors = (props) => (
    <>
        <div className='header'>
            <h1 className='title'>CCO Errors by error code</h1>
        </div>
        <Pie className='borderBox' data={dynamicData(props.csvData)} options={options}  />
    </>
)

export default PieChartForCCOErrors