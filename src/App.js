import React, { Component, Suspense, lazy} from 'react'
import './App.css';

import Fallback from './components/fallback'

import Welcome from './components/welcome'

//TODO implement news
const News = lazy(() => { return import('./components/news')})
const UndergraduateDegrees = lazy(() => { return import('./components/undergraduateDegrees')})
const GraduateDegrees = lazy(() => { return import('./components/graduateDegrees')})
const Minors = lazy(() => { return import('./components/minors')})
const Employment = lazy(() => { return import('./components/employment')})
const Map = lazy(() => { return import('./components/map')})
const PeopleFaculty = lazy(() => { return import('./components/peopleFaculty')})
const PeopleStaff = lazy(() => { return import('./components/peopleStaff')})
const Research = lazy(() => { return import('./components/research')})
const ResearchFaculty = lazy(() => { return import('./components/researchFaculty')})
const Resources = lazy(() => { return import('./components/resources')})
const Footer = lazy(() => { return import('./components/footer')})

class App extends Component {
  render(){
    return(
      <div className="App"> 
        <Welcome  />
        <Suspense fallback={<Fallback />}>
          <News />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <UndergraduateDegrees />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <GraduateDegrees />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Minors />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Employment />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Map />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <PeopleFaculty />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <PeopleStaff />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Research />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <ResearchFaculty />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Resources />
    </Suspense>
        <Suspense fallback={<Fallback />}>
          <Footer />
        </Suspense>
      </div>
    )
  }
}

export default App;
