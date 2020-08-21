import React from 'react'
import consumeApi from '../consumeApi';


const divStyle = {
    backgroundColor: 'white',
};
const hr = {background: 'linear-gradient(to right,#87be31 15%,#ff0c64 35%,#0072ef 65%,#ff8e18 95%',
    height: '5px',
    width: '100%',
    marginTop: '0',
    marginBottom: '0'}

//styles for the degree cards
const styles = ["bg-dark text-white", "bg-warning text-black", "bg-info text-white"]    

export default function UndergraduateDegrees() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/degrees/undergraduate/')
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
                <h4 className="w-50 mx-auto mt-5">Our Undergraduate Degrees</h4>
                <div className="container mb-5">
                    <div className="row">
                        {data.undergraduate.map((deg, i) =>
                        //future degrees will auto update
                            <div className="col-4" key={i}>
                                <div className={styles[i]}>
                                    <div className="card-header">{data.undergraduate[i].title}</div>
                                    <div className="card-body">
                                        <p className="card-text">{data.undergraduate[i].description}</p>
                                        <u>Concentrations:</u>
                                        <p>{data.undergraduate[i].concentrations}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <hr style={hr} />
            </div>     
        )
    }
}