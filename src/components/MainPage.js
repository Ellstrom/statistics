import React, {useState} from 'react'
import CSVReader from 'react-csv-reader'
import VerticalBarChart from "./VerticalBarChart";
import VerticalBarChartPerDay from "./VerticalBarChartPerDay";


const MainPage = () => {

    const [csvData, setCsvData] = useState([]);

    const handleData = (data, fileInfo) => {
        console.log(data, fileInfo);
        console.log(data[0]);
        setCsvData(data);
    };

    return (
        <div className="container">
            <CSVReader
                cssClass="react-csv-input"
                label="Select CSV"
                onFileLoaded={handleData}
                parserOptions={parseOptions}
            />
            <VerticalBarChart csvData={csvData}/>
            <br/><br/><br/><br/>
            <VerticalBarChartPerDay csvData={csvData}/>
        </div>
    )

}

const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};



export default MainPage;