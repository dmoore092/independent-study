import React, { Component } from 'react'

const divStyle = {
    height: '100vh',
    backgroundColor: 'blue'
  };

class Resources extends Component{
    render(){
        return( 
            <div>
                <div style={divStyle}>Resources section</div>
            </div>     
    )}
}

export default Resources;