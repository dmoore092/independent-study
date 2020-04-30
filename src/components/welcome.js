import React from 'react'
import consumeApi from '../consumeApi';


const divStyle = {
    height: '100vh'
  };
export default function Welcome() {
        const {
            loading, 
            error, 
            data
        } = consumeApi('/about/')
        return( 
            <div style={divStyle}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.quote}</div>
                <div>{data.quoteAuthor}</div>
            </div>     
    )
}
