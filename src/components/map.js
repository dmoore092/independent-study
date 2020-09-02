import React from 'react'
import consumeApi from '../consumeApi';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

// this section includes the map as well as coop and employment tables

//column headers 
const coopColumns = [{
    dataField: 'employer',
    text: 'Employer'
}, {
    dataField: 'degree',
    text: 'Degree'
}, {
    dataField: 'city',
    text: 'City'
}, {
    dataField: 'term',
    text: 'Term'
}];

//column headers
const employmentColumns = [{
    dataField: 'employer',
    text: 'Employer'
}, {
    dataField: 'degree',
    text: 'Degree'
}, {
    dataField: 'city',
    text: 'City'
}, {
    dataField: 'startDate',
    text: 'Start Date'
}];


const divStyle = {
    backgroundColor: 'white',
};

const iframeStyle = {
    width: "90vw", 
    height: "60vh", 
    padding: "10px", 
    border: "0", 
    marginLeft: "22%", 
    marginRight: "22%"
};
const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

export default function Map() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('http://www.ist.rit.edu/api/employment/')
    if(loading){
        return(
            <div style={divStyle}>
                <img src={require('../img/preloader4.png')} alt='preloader' />
            </div>
        )
    }
    else if(error){
        return(
            <div style={divStyle}>
                <div>Error...</div>
            </div>
        )
    }
    else{
        return(
            <div className="border border-danger mb-5" style={divStyle}>
                <hr style={hr} />
                <h4 className="w-50 mx-auto mt-5">Where our students work</h4>
                <div className="container mb-5">
                    <div className="card-columns"> 
                    <iframe src="http://ist.rit.edu/api/map/" title="where out students work" scrolling="no" style={iframeStyle}></iframe>
                    </div>
                </div>
                <div>
                    <h4>{data.coopTable.title}</h4>
                    <div>
                        <BootstrapTable keyField='id' data={ data.coopTable.coopInformation } columns={ coopColumns } pagination={ paginationFactory() } />
                    </div>
                </div>
                <div>
                    <h4>{data.employmentTable.title}</h4>
                    <div>
                        <BootstrapTable keyField='id' data={ data.employmentTable.professionalEmploymentInformation } columns={ employmentColumns } pagination={ paginationFactory() } />
                    </div>
                </div>
                <hr style={hr} />
            </div>     
        )
    }
}