import React from 'react'
import ConsumeApi from '../consumeApi.js'

export default function Employment() {
    const { loading, error, data } = ConsumeApi('/employment/')
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
                <h4 className="w-50 mx-auto mt-5 text-white">{data.introduction.title}</h4>
                {data.introduction.content.map((content, i) => 
                    <div className="w-50 mx-auto mt-5 text-white" key={i}>
                        {data.introduction.content[i].title}<br />
                        {data.introduction.content[i].description}
                    </div>
                )}
                <div className="container mb-5">
                    <div className="row">
                        {data.degreeStatistics.statistics.map((stats, i) =>
                        <div className="col-md-3 col-sm-12 mt-5" key={i}>
                            <div className="bg-warning text-dark">
                                <div className="card-header">{data.degreeStatistics.statistics[i].value}</div>
                                <div className="card-body">
                                    <p className="card-text">{data.degreeStatistics.statistics[i].description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className="w-50 mx-auto mt-5 text-white">
                        {data.employers.title}<br />
                        {data.employers.employerNames.map((employers, i) =>
                            <span key={i}>{employers}</span>
                        )}
                        
                    </div>
                    <div className="w-50 mx-auto mt-5 text-white">
                        {data.careers.title}<br />
                        {data.careers.careerNames.map((careers, i) =>
                            <span key={i}>{careers}</span>
                        )}
                    </div>
                </div>
            </div>     
        )
    }
}