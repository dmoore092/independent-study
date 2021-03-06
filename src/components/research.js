import React from 'react'
import ConsumeApi from '../consumeApi.js'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const cardScrollStyle = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    maxHeight: '300px'
}

export default function Research() {
    const { loading, error, data } = ConsumeApi('/research/')
    if(loading){
        return(
            <div>
                <img src={require('../img/preloader4.png')} alt='preloader' />
            </div>
        )
    }
    else if(error){
        return(
            <div>
                <div>Error...</div>
            </div>
        )
    }
    else{
        return(
            //TODO make accordion scrollable
            <div className="border border-danger mb-5">
                <h4 className="w-50 mx-auto mt-5 text-white">Citations by Interest Area</h4>
                <div className="container mb-5">
                    <div className="card-columns">
                        {data.byInterestArea.map((interestArea, i) =>
                            <Accordion key={i}>
                                <Card style={{ borderRadius: '500px' }}>
                                    <Card.Header style={{ backgroundColor: '#F76902', color: 'black' }}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey='{i}'>
                                        <br />{interestArea.areaName}
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='{i}'>
                                    <Card.Body className="text-dark">
                                        <h4>Citations:</h4><br />
                                        <div style={cardScrollStyle}>
                                            {interestArea.citations.map((area, i) => 
                                                <p key={i} >{area}</p>
                                            )}
                                        </div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}