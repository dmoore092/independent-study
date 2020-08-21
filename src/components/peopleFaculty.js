import React from 'react'
import consumeApi from '../consumeApi';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export default function PeopleFaculty() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/people')
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
            <div className="border border-danger mb-5">
                <h4 className="w-50 mx-auto mt-5 text-white">Faculty</h4>
                <div className="container mb-5">
                    <div className="card-columns"> 
                        {data.faculty.map((faculty, i) =>
                            <Accordion key={i}>
                                 <Card>
                                     <Card.Header style={{ backgroundColor: '#F76902', color: 'black' }}>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey='{i}'>
                                            <br />{faculty.name}
                                        </Accordion.Toggle>
                                     </Card.Header>
                                     <Accordion.Collapse eventKey='{i}'>
                                     <Card.Body>
                                         {/* hide empty values */}
                                         <img src={faculty.imagePath} alt="faculty" />
                                         {(() => {if(faculty.username !== ''){ return ( <div>Username: {faculty.username}</div> )}})()}
                                         {(() => {if(faculty.tagline !== ''){ return ( <div>Tagline: {faculty.tagline}</div> )}})()}
                                         {(() => {if(faculty.title !== ''){ return ( <div>Title: {faculty.title}</div> )}})()}
                                         {(() => {if(faculty.interestArea !== ''){ return ( <div>Interest Area: {faculty.interestArea}</div> )}})()}
                                         {(() => {if(faculty.office !== ''){ return ( <div>Office: {faculty.office}</div> )}})()}
                                         {(() => {if(faculty.website !== ''){ return ( <div>Website: {faculty.website}</div> )}})()}
                                         {(() => {if(faculty.phone !== ''){ return ( <div>Phone: {faculty.phone}</div> )}})()}
                                         {(() => {if(faculty.email !== ''){ return ( <div>Email: {faculty.email}</div> )}})()}
                                         {(() => {if(faculty.twitter !== ''){ return ( <div>Twitter: {faculty.twitter}</div> )}})()}
                                         {(() => {if(faculty.facebook !== ''){ return ( <div>Facebook: {faculty.facebook}</div> )}})()}
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