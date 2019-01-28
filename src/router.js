import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Featured from './components/featured/Featured';
import Submission from './components/submission/Submission';
// import Footer from './components/footer/Footer';
import About from './components/about/About';
import Landing from './components/landing/Landing';
import Services from './components/services/Services';
import Bathrooms from './components/bathrooms/Bathrooms';

export default(
    <div>
        <Switch>
            <Route component={Header} />
        </Switch>
        <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Featured} path= '/featured' />
            <Route component={Submission} path='/submit' />
            <Route component={About} path='/about' />
            <Route component={Services} path='/services' />
            <Route component={Bathrooms} path='/bathrooms' />
        </Switch>
        {/* <Switch> 
            <Route component={Footer} />
        </Switch> */}
    </div>
)