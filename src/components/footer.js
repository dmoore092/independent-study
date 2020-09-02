import React from 'react'
import consumeApi from '../consumeApi'
import ContactForm from './contactForm'
import Axios from 'axios'

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

const black = {
    backgroundColor: 'black',
}

const imgStyle = {
    maxWidth: '25%'
}

const hr = {
    background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

export default function Footer() {
    Axios.get(
        'www.google.com',
        params: {
            
        }

    )
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
            //social media presence, contact form and coptright
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
                <ContactForm />
                <div style={black} className="pt-2">
                    {data.quickLinks.map((links, i) =>
                        <a href={data.quickLinks[i].href} className="text-white px-5" target="_blank" rel="noopener noreferrer" key={i}>{data.quickLinks[i].title}</a>
                    )}
                    <a href={data.news} className="text-white px-5" target="_blank" rel="noopener noreferrer">News</a>
                    <div dangerouslySetInnerHTML={{ __html: data.copyright.html }} className="text-white mt-3" />;
                </div>
                <hr style={hr} />
            </div>
        )
    }
}