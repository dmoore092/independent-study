import React from 'react'
import consumeApi from '../consumeApi'

const divStyle = {
    // height: '100vh',
    backgroundColor: 'white',
}

const cardStyle = {
    maxWidth: '18rem',
    margin: 'auto',
    
}

const twitterBlue = {
    backgroundColor: '#50ABF1',
}

const tigerOrange = {
    backgroundColor: '#F76902',
}

const black = {
    backgroundColor: 'black',
}

const imgStyle = {
    maxWidth: '25%'
}

const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

//TODO change all of these functions
export default function Welcome() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/footer/')
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
            <div className="border border-danger mb-5" style={divStyle}>
                <hr style={hr} />
                <h4 className="w-50 mx-auto mt-5 text-black">{data.social.title}</h4>
                <div><a href={data.social.facebook} target="_blank" rel="noopener noreferrer">Follow US on Facebook!</a></div>
                <div><a href={data.social.twitter} target="_blank" rel="noopener noreferrer">Follow US on Twitter!</a></div>
                <div className="card text-white bg-primary mb-3" style={cardStyle}>
                    <div className="card bg-light mb-3" style={cardStyle}>
                        <div className="card-header" style={twitterBlue}><img src={'./twitter.png'} alt="twitter logo" style={imgStyle} />{data.social.by}</div>
                        <div className="card-body">
                            <p className="card-text text-dark">{data.social.tweet}</p>
                        </div>
                        
                    </div>
                </div>
                <div style={tigerOrange} className="py-4">
                    <p><a href={data.quickLinks[0].href} className="btn btn-dark btn-lg" >{data.quickLinks[0].title}</a></p>
                </div>
                <div style={black} className="pt-2">
                    <a href={data.quickLinks[1].href} className="text-white px-5" target="_blank" rel="noopener noreferrer">{data.quickLinks[1].title}</a>
                    <a href={data.quickLinks[2].href} className="text-white px-5" target="_blank" rel="noopener noreferrer">{data.quickLinks[2].title}</a>
                    <a href={data.quickLinks[3].href} className="text-white px-5" target="_blank" rel="noopener noreferrer">{data.quickLinks[3].title}</a>
                    <a href={data.news} className="text-white px-5" target="_blank" rel="noopener noreferrer">News</a>
                    <div dangerouslySetInnerHTML={{ __html: data.copyright.html }} className="text-white mt-3" />;
                </div>
                <hr style={hr} />
            </div>
        )
    }
}