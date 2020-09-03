import React from 'react'
import ConsumeApi from '../consumeApi.js'

//alternate styles for the degree cards
const styles = ["bg-warning text-dark", "bg-info text-white", "bg-dark text-white", ]

export default function GraduateDegrees() {
    const { loading, error, data } = ConsumeApi('/degrees/graduate/')
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
        //slice off the advanced degrees from the graduate degrees. If a degree is added, this will need to be changed
        const degrees = data.graduate.slice(0, 3)
        return(
            <div className="mb-5">
                <h4 className="w-50 mx-auto mt-5 text-white">Our Graduate Degrees</h4>
                <div className="container mb-5">
                    <div className="row">
                        {degrees.map((deg, i) =>
                            <div className="col-md-4 col-sm-12" key={i}>
                                <div className={styles[i]}>
                                    <div className="card-header">{data.graduate[i].title}</div>
                                    <div className="card-body">
                                        <p className="card-text">{data.graduate[i].description}</p>
                                        <u>Concentrations:</u>
                                        <p>{data.graduate[i].concentrations}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <h4 className="w-50 mx-auto mt-5 text-white">Our Graduate Advanced Certificates</h4>
                    <div className="row mt-5 justify-content-md-center">
                        {data.graduate[3].availableCertificates.map((deg, i) => 
                        //if certificate is added, this will auto update
                            <div className="col-md-4 col-sm-12" key={i}>
                                <div className="bg-info text-white">
                                    <div className="card-header">{data.graduate[3].availableCertificates[i]}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>     
        )
    }
}