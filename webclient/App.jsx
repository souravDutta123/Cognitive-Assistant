import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppHeader from './view/welcome.js';
import {ForgotPassword, Login, Register} from './auth/index.js';
import {ChangePassword, Profile, AccountSettings} from './userProfile/index.js';
import {Notification} from './notifications/index.js';
import Conversation from './conversation/index.js';
import {Introduction} from './home/index.js';

injectTapEventPlugin();

    ReactDOM.render((
        <Router history = {browserHistory}>
            <Route path = "/" component = {AppHeader}>
              <Route path = "/Home" component = {Introduction}/>
              <Route path="/Login" component = {Login} />
              <Route path="/Register" component = {Register} />
              <Route path = "/Profile" component = {Profile}/>
              <Route path = "/UserHome" component = {Conversation}/>
              <Route path = "/ChangePassword" component = {ChangePassword}/>
              <Route path = "/ForgotPassword" component = {ForgotPassword}/>
              <Route path = "/AccountSettings" component = {AccountSettings}/>
              <Route path = "/Notification" component = {Notification}/>
            </Route>
        </Router>
      ), document.getElementById('container'))
