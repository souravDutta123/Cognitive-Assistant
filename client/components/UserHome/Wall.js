import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class Wall extends React.Component {
  constructor(props)
  {
    super(props);

  }
  componentWillMount() {

  }

 render() {
   console.log("XXX");
     return(<MuiThemeProvider><Paper><p>asdasdas</p></Paper></MuiThemeProvider>)
 }
}
export default Wall;
