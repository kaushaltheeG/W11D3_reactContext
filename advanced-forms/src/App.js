import React from 'react';
import { Route } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import SampleSurvey from './components/SampleSurvey';
import Report from './components/Report';
import SensoryPreferences from './components/SensoryPreferences';

function App() {
  return (
    <>
      <NavBar />
      <Route path="/sample-survey" component={SampleSurvey} />
      <Route path="/report" component={Report} />
      <Route path="/sensory-preferences" component={SensoryPreferences} />
    </>
  );
}

export default App;
