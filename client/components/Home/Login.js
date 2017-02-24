import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory,Link  } from 'react-router';

const styles={
  headerStyle:{
    color: '#999',
    textAlign: 'left'
  },
  paperStyle:{
    height: 'auto',
    width: 'auto',
    padding: '20px',
    opacity: '0.8',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '5px',
    textAlign: "center",
  },
  divStyle:{
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  iconImageStyle:{
    width: 100,
    height: 100,
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('aa');
    this.state = {
      username: '',
      password: "",
      errorusername: '',
      errorpassword: "",
      message: "",
      open: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var errorusername = (this.state.username ==='')? "Required" : "";
    var errorpassword = (this.state.password ==='')? "Required" : "";
    this.setState({errorusername,errorpassword})
    var that=this;
    if(errorusername+errorpassword ===""){
      this.props.handleLogin({username:this.state.username,password:this.state.password});
    }
  }
  handleFocus(event)
  {
    const target = event.target;
    const name= "error"+target.name;
    this.setState({
      [name]: ""
    });
  }
  render() {
    console.log(this.props);
    return (


        <div style={styles.divStyle}>
        <Paper style={styles.paperStyle}>
        <h2 style={styles.headerStyle}>Sign In</h2>
        <img src="../../../images/user-info.png" style={styles.iconImageStyle}/>
        <br/>
        <TextField hintText="Sourav" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}
        onFocus={this.handleFocus.bind(this)}
        errorText={this.state.errorusername}
         floatingLabelText="Username"/><br/>

        <TextField hintText="asdwz6a56agywe2#"
         type="password"
         name="password"
         value={this.state.password}
         onChange={this.handleInputChange}
         onFocus={this.handleFocus.bind(this)}
         errorText={this.state.errorpassword}
         floatingLabelText="Password"
        /><br/>
        <RaisedButton label="LogIn" primary={true} onClick={this.handleSubmit} />
        <br/>
        <br/>

          <Link to='/Register'><RaisedButton ><span>Create Account</span></RaisedButton></Link>
        </Paper>
        </div>

    );
  }
}
export default Login;
