import React from 'react'
import ConsumeApi from '../consumeApi.js'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const divStyle = {
    backgroundColor: 'white',
};

const cardScrollStyle = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    maxHeight: '300px'
}

const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

export default function ResearchFaculty() {
    const { loading, error, data } = ConsumeApi('/research/')
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
            <h4 className="w-50 mx-auto mt-5 text-dark">Citations by faculty</h4>
                <div className="container mb-5">
                    <div className="card-columns">
                        {data.byFaculty.map((faculty, i) =>
                            <Accordion key={i}>
                                <Card style={{ borderRadius: '500px', border: '#F76902' }}>
                                    <Card.Header style={{ backgroundColor: '#000', color: 'white' }}>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey='{i}'>
                                            <br />{faculty.facultyName}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='{i}'>
                                    <Card.Body>
                                        <h4 className="text-dark">Citations:</h4><br />
                                        <div style={cardScrollStyle}>
                                            {faculty.citations.map((area, i) => 
                                                <p key={i} className="text-dark">{area}</p>
                                            )}
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )}
                    </div>
                </div>
                <hr style={hr} />
            </div>
        )
    }
}