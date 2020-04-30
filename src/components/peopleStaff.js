import React, { Component } from 'react'

const divStyle = {
    height: '100vh',
    backgroundColor: 'green'
  };

class PeopleStaff extends Component{
    render(){
        return( 
            <div>
                <div style={divStyle}>PeopleStaff section</div>
            </div>     
    )}
}

export default PeopleStaff;