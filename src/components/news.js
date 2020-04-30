import React from 'react'
import consumeApi from '../consumeApi';

const divStyle = {
    height: '100vh',
    backgroundColor: 'orange'
  };

  export default function News() {
    consumeApi('/news/')
    return( 
        <div>
            <div style={divStyle}>News section</div>
        </div>     
    )
}