import React, { Component } from 'react'

const divStyle = {
    height: '100vh',
    backgroundColor: 'red'
  };

class PeopleFaculty extends Component{
    render(){
        return( 
            <div>
                <div style={divStyle}>PeopleFaculty section</div>
            </div>     
    )}
}

export default PeopleFaculty;