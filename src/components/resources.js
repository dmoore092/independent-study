import React from 'react'
import ConsumeApi from '../consumeApi.js'

import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

const cardScrollStyle = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    maxHeight: '450px'
}

export default function Resources() {
    const { loading, error, data } = ConsumeApi('/resources/')
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
                <h4 className="w-50 mx-auto mt-5 text-white">{data.title}</h4>
                <div className="container">
                    <Accordion defaultActiveKey="4">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="4" className="text-dark">
                                {data.studentAmbassadors.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body style={cardScrollStyle}>
                                <img src={data.studentAmbassadors.ambassadorsImageSource} alt="student ambassadors" />
                                <br />
                                {data.studentAmbassadors.subSectionContent.map((content, i)=>
                                    <div key={i}>
                                        <h4 className="text-dark">{data.studentAmbassadors.subSectionContent[i].title}</h4>
                                        <p className="text-dark">{data.studentAmbassadors.subSectionContent[i].description}</p>
                                    </div>
                                )}
                                <p className="text-dark">{data.studentAmbassadors.note}</p>
                                <a href={data.studentAmbassadors.applicationFormLink} target="_blank" rel="noopener noreferrer" >Apply Here!</a>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="text-dark">
                                {data.studyAbroad.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div style={cardScrollStyle}>
                                    <p className="text-dark">{data.studyAbroad.description}</p>
                                    {data.studyAbroad.places.map((places, i) =>
                                        <div key={i}>
                                            <h4 className="text-dark">{places.nameOfPlace}</h4>
                                            <p className="text-dark">{places.description}</p>
                                        </div>
                                    )}
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="text-dark">
                                {data.studentServices.academicAdvisors.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body style={cardScrollStyle}>
                                <div>
                                    <p className="text-dark">{data.studentServices.academicAdvisors.description}</p>
                                    {data.studentServices.professonalAdvisors.advisorInformation.map((advisors, i) =>
                                        <div key={i}>
                                            <h4 className="text-dark">{advisors.department}</h4>
                                            <p className="text-dark">{advisors.name} - {advisors.email}</p>
                                        </div>
                                    )}
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className="text-dark">
                                {data.studentServices.facultyAdvisors.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <div style={cardScrollStyle}>
                                    <p className="text-dark">{data.studentServices.facultyAdvisors.description}</p>
                                    {data.studentServices.istMinorAdvising.minorAdvisorInformation.map((advisors, i) =>
                                        <div key={i}>
                                            <h4 className="text-dark">{advisors.title}</h4>
                                            <p className="text-dark">{advisors.advisor} - {advisors.email}</p>
                                        </div>
                                    )}
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" className="text-dark">
                                {data.tutorsAndLabInformation.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <div style={cardScrollStyle}>
                                    <p className="text-dark">{data.tutorsAndLabInformation.description}</p>
                                    <a href={data.tutorsAndLabInformation.tutoringLabHoursLink} target="_blank" rel="noopener noreferrer">Tutoring and Lab Hours</a>
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="5" className="text-dark">
                                Forms
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body>
                                <h4 className="text-dark">Graduate Forms</h4>
                                {data.forms.graduateForms.map((forms, i) =>
                                    <div key={i} style={cardScrollStyle}>
                                        <a href={data.forms.graduateForms[i].href} target="_blank" rel="noopener noreferrer" >{data.forms.graduateForms[i].formName}</a>
                                    </div>
                                )}
                                <h4 className="text-dark">Undergraduate Forms</h4>
                                <a href={data.forms.undergraduateForms[0].href} target="_blank" rel="noopener noreferrer" >{data.forms.undergraduateForms[0].formName}</a>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="6" className="text-dark">
                                {data.coopEnrollment.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                {data.coopEnrollment.enrollmentInformationContent.map((info, i) =>
                                    <div key={i} style={cardScrollStyle}>
                                        <h4 className="text-dark">{info.title}</h4>
                                        <p className="text-dark">{info.description}</p>
                                    </div>
                                )}
                                <a href={data.coopEnrollment.RITJobZoneGuidelink} target="_blank" rel="noopener noreferrer" >Enroll Here!</a>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        )
    }
}