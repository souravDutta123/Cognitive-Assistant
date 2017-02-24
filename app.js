import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppHeader from './client/view/main.js';
import AppHeader1 from './client/view/usermain.js';
import IndexPage from './client/view/IndexPage.js';
import {HomeContent,Login,Register} from './client/components/Home/index.js';
import Wall from './client/components/UserHome/Wall.js';
injectTapEventPlugin();

    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path = "/" component = {AppHeader}>
              <Route path = "/Home" component = {HomeContent}/>
              <Route path="/Login" component = {Login} />
              <Route path="/Register" component = {Register} />
              <Route path = "/UserHome" component = {Wall}/>
            </Route>
        </Router>
      ), document.getElementById('container'))
