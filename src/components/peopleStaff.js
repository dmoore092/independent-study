import React from 'react'
import consumeApi from '../consumeApi';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const divStyle = {
    backgroundColor: 'white',
};

const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

export default function PeopleStaff() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/people/')
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
                <h4 className="w-50 mx-auto mt-5">Staff</h4>
                <div className="container mb-5">
                    <div className="card-columns"> 
                        {data.staff.map((staff, i) =>
                        //TODO style accordions, fix values that return null
                            <Accordion key={i}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: '#000', color: 'white' }}>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey='{i}'>
                                            {staff.name}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='{i}'>
                                    <Card.Body>
                                        <img src={staff.imagePath} alt="staff" />
                                        {(() => {if(staff.username !== '' || staff.username === 'null'){ return ( <div>Username: {staff.username}</div> )}})()}
                                        {(() => {if(staff.tagline !== ''){ return ( <div>Tagline: {staff.tagline}</div> )}})()}
                                        {(() => {if(staff.title !== ''){ return ( <div>Title: {staff.title}</div> )}})()}
                                        {(() => {if(staff.interestArea !== ''){ return ( <div>Interest Area: {staff.interestArea}</div> )}})()}
                                        {(() => {if(staff.office !== '' || staff.office !== null){ return ( <div>Office: {staff.office}</div> )}})()}
                                        {(() => {if(staff.website !== ''){ return ( <div>Website: {staff.website}</div> )}})()}
                                        {(() => {if(staff.phone !== ''){ return ( <div>Phone: {staff.phone}</div> )}})()}
                                        {(() => {if(staff.email !== ''){ return ( <div>Email: {staff.email}</div> )}})()}
                                        {(() => {if(staff.twitter !== ''){ return ( <div>Twitter: {staff.twitter}</div> )}})()}
                                        {(() => {if(staff.facebook !== ''){ return ( <div>Facebook: {staff.facebook}</div> )}})()}
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