import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class IndexPage extends React.Component {
  constructor(props)
  {
    super(props);

  }
  componentWillMount() {
    this.localUserAuthentication();
  }

  localUserAuthentication(){
    var that=this;
    var userDetails=JSON.parse(localStorage.getItem('cognitiveUser')) || {user:{},loggedin: false};
    if(userDetails.loggedin === true)
    {
      axios.get('http://localhost:3000/credentials?username='+userDetails.user.username)
      .then(function (response){
        if(response.data.length!==0)
        {
          if(userDetails.user.password === response.data[0].password)
          {
            that.setState({loggedin: true});
            browserHistory.push('/User');
          }else{
            browserHistory.push('/Initial');
          }
        }
        else{
          browserHistory.push('/Initial');
        }
        console.log(that.state.loggedin);
      })
    }
    else{
      browserHistory.push('/Initial');
    }
  }
 render() {
   console.log("Index");
   console.log("XXX");
     return(<div>{this.props.children}</div>)
 }
}
export default IndexPage;
