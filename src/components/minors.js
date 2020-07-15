import React from 'react'
import consumeApi from '../consumeApi';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const divStyle = {
    // height: '100vh',
    backgroundColor: 'white',
};
const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

export default function Welcome() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/minors/')
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
                <h4 className="w-50 mx-auto mt-5">Our Undergraduate Minors</h4>
                <div className="container mb-5">
                    <div className="card-columns"> 
                        {data.UgMinors.map((minors, i) =>
                            <Accordion key={i}>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey='{i}'>
                                        {minors.title}
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='{i}'>
                                    <Card.Body>
                                        <div>{minors.description}</div>
                                        <div>Courses: <br />
                                            {data.UgMinors[i].courses.map((course, j) =>
                                                <span key={j}>{course}<br /></span>
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