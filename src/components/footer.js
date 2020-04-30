import React, { Component } from 'react'

const divStyle = {
    height: '100vh',
    backgroundColor: 'green'
  };

class Footer extends Component{
    render(){
        return( 
            <div>
                <div style={divStyle}>Footer section</div>
            </div>     
    )}
}

export default Footer;