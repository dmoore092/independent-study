import React from 'react'
import consumeApi from '../consumeApi';


export default function Welcome() {
    const {
        loading, 
        error, 
        data
    } = consumeApi('/degrees/graduate/')
    if(loading){
        return(
            <div>
                <img src={require('../img/preloader4.png')} alt='preloader' />
            </div>
        )
    }
    else if(error){
        return(
            <div>
                <div>Error...</div>
            </div>
        )
    }
    else{
        return(
            <div className="mb-5">
                <h4 className="w-50 mx-auto mt-5 text-white">Our Graduate Degrees</h4>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="bg-warning text-black">
                                <div className="card-header">{data.graduate[0].title}</div>
                                <div className="card-body">
                                    <p className="card-text">{data.graduate[0].description}</p>
                                    <u>Concentrations:</u>
                                    <p>{data.graduate[0].concentrations}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-info text-white">
                                <div className="card-header">{data.graduate[1].title}</div>
                                <div className="card-body">
                                    <p className="card-text">{data.graduate[1].description}</p>
                                    <u>Concentrations:</u>
                                    <p>{data.graduate[1].concentrations}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-dark text-white">
                                <div className="card-header">{data.graduate[2].title}</div>
                                <div className="card-body">
                                    <p className="card-text">{data.graduate[2].description}</p>
                                    <u>Concentrations:</u>
                                    <p>{data.graduate[2].concentrations}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="w-50 mx-auto mt-5 text-white">Our Graduate Advanced Certificates</h4>
                    <div className="row mt-5 justify-content-md-center">
                        <div className="col-4">
                            <div className="bg-info text-white">
                                <div className="card-header">{data.graduate[3].availableCertificates[0]}</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-warning text-black">
                                <div className="card-header">{data.graduate[3].availableCertificates[1]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}