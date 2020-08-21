import React from 'react'
import consumeApi from '../consumeApi';

const divStyle = {
    height: '100vh',
    //backgroundColor: 'orange'
  };

export default function New() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/news/')
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
        console.log(data);
        return(
            <div style={divStyle}>
                <h4><a href="#ex1" rel="modal:open">Check out the latest news!</a></h4>
                news
            </div>     
        )
    }
    
}