import React from 'react'
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
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
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '5px',
    textAlign: "center",
  }
}
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dateOfBirth: {},
      email: "",
      username: '',
      password: "",
      repassword: "",
      errorname: '',
      errordateOfBirth: "",
      erroremail:"",
      errorusername: '',
      errorpassword: "",
      errorrepassword: "",
      open: false,
      message: "",

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
  handleDateChange(event,date) {
    this.setState({
      dateOfBirth: date
    });
  }
  handleSubmit(event) {
    var errorname = (this.state.name ==='')? "Required" : "";
    var errordateOfBirth = (this.state.dateOfBirth ==='')? "Required" : "";
    var erroremail = (this.state.email ==='')? "Required" : "";
    var errorusername = (this.state.username ==='')? "Required" : "";
    var errorpassword = (this.state.password ==='')? "Required" : "";
    var errorrepassword = (this.state.repassword ==='')? "Required" : "";
    errorrepassword = (errorpassword !== "Required" && errorpassword !== "Required" && this.state.repassword !== this.state.password)? "Password did not match" : "";
    this.setState({errorname,errordateOfBirth,erroremail,errorusername,errorpassword,errorrepassword});
    var x=errorname+errordateOfBirth+erroremail+errorusername+errorpassword+errorrepassword;
    if(x === "")
    {
      var that=this;
      axios.get('http://localhost:3000/credentials?username='+that.state.username)
      .then(function (response) {
        if(response.data.length === 0)
        {
          that.props.handleRegister(that.state);
        }
        else {
          console.log("Used User name");
          errorusername = "Choose another username";
          that.setState({errorusername})
        }

      })
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
    return (
      <MuiThemeProvider>
      <Paper style={styles.paperStyle}>
        <div>
        <h2 style={styles.headerStyle}>Sign Up</h2>
        <TextField hintText="Sourav" name="name" type="text" value={this.state.name} onFocus={this.handleFocus.bind(this)}
         onChange={this.handleInputChange}  floatingLabelText="Name" errorText={this.state.errorname}/><br/>

        <DatePicker hintText="20-08-1994" name="dateOfBirth" mode="landscape" value={this.state.dateOfBirth} onFocus={this.handleFocus.bind(this)}
          onChange={this.handleDateChange.bind(this)} autoOk={true} floatingLabelText="Date Of Birth" errorText={this.state.errordateOfBirth} /><br/>

         <TextField hintText="abc@abc.com" name="email" type="email" value={this.state.email} onFocus={this.handleFocus.bind(this)}
          onChange={this.handleInputChange} floatingLabelText="Email" errorText={this.state.erroremail}/><br/>

        <TextField hintText="Sourav123"  name="username"  type="text"  value={this.state.username} onFocus={this.handleFocus.bind(this)}
         onChange={this.handleInputChange} floatingLabelText="Username" errorText={this.state.errorusername}/><br/>

        <TextField  hintText="RTdsrsdEE335w" name="password" type="password" value={this.state.password} onFocus={this.handleFocus.bind(this)}
         onChange={this.handleInputChange}  floatingLabelText="Password" errorText={this.state.errorpassword}/><br/>

         <TextField  hintText="RTdsrsdEE335w" name="repassword" type="password" value={this.state.repassword} onFocus={this.handleFocus.bind(this)}
          onChange={this.handleInputChange}  floatingLabelText="Re-Enter Password" errorText={this.state.errorrepassword} /><br/>

        <RaisedButton label="Register" primary={true} onClick={this.handleSubmit.bind(this)}/>
        <br/>
        <br/>
        <Link to='/Login'><RaisedButton onTouchTap={this.props.onTouchTap}><span>Already have an account!</span></RaisedButton></Link>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={3000}
        />
        </div>
      </Paper>
      </MuiThemeProvider>
    );
  }
}
export default Register;
