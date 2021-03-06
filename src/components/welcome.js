import React from 'react'
import ConsumeApi from '../consumeApi.js'
import Axios from 'axios';

const divStyle = {
    height: '100%',
    color: 'white'
};
const orange = {color: '#F76902'};
const paddingTop = {paddingTop: '20%'}

export default function Welcome() {
    const { loading, error, data } = ConsumeApi('/about/')

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
            <div style={divStyle}>
                <h1 style={paddingTop} className="display-3 w-50 mx-auto"><span style={orange}>Information</span> Sciences &amp; Technologies at RIT</h1>
                <div className='bg-light text-dark w-75 mx-auto mt-1' >
                    <h4 className='pt-2'>{data.title}</h4>
                    <p>{data.description}</p>
                    <blockquote className='blockquote'>&quot;{data.quote}&quot;</blockquote>
                    <p>- {data.quoteAuthor}</p>
                </div>
            </div>     
        )
    }
        
}
