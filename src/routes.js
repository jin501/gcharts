import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Homepage from './components/home/Homepage';
import Chartspage from './components/charts/Chartspage';


export default(
  <Route path="/" component={Layout} >
    <IndexRoute component={Homepage} />
    <Route path="charts" component={Chartspage} />
  </Route>
);
