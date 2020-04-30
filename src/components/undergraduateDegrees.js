import React, { Component, Suspense, lazy } from 'react'

//import GraduateDegrees from './components/graduateDegrees';

const divStyle = {
    height: '100vh',
    backgroundColor: 'red'
  };

class UndergraduateDegrees extends Component{
    render(){
        return( 
            <div>
                <div style={divStyle}>Undergraduate Degrees</div>
            </div>     
    )}
}

export default UndergraduateDegrees;