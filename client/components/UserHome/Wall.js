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

 render() {
   console.log("XXX");
     return(
       <div><h1>Wall</h1></div>
     );
 }
}
export default Wall;
