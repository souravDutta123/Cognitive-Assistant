import Introduction from './Introduction.js';
import Login from './Login.js';
import CustomMenu from './Menu.js';
import Register from './Register.js';
import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {
  paperStyle:{
    width: "auto",
    padding:"10px",
    paddingTop: '100px',
    backgroundImage: `url(${"../../../images/intro-back.jpg"})`,
    backgroundSize: 'cover',
    height: (window.innerHeight)+'px',
  }
};
class HomeContent extends React.Component {
  constructor(){
    super();
    this.state={
      open: true,
    }
  }
  componentWillReceiveProps(newProps)
  {
    this.setState({openLogin:this.props.openLogin})
  }

 render() {
   console.log("Render");
   console.log(this.props);
   var view={};
   if(this.state.openLogin === 'Login')
   {
     view=(
       <div className="row">
        <div className="col-sm-12 col-md-9">
          <Introduction/>
        </div>
        <div className="col-sm-12 col-md-3">
          <Login onTouchTap={this.props.toggleSign} handleLogin={this.props.handleLogin}/>;
        </div>
      </div>
   )
   }
   else if(this.state.openLogin === 'Register')
   {
     view=(
       <div className="row">
        <div className="col-sm-12 col-md-9">
          <Introduction/>
        </div>
        <div className="col-sm-12 col-md-3">
          <Register onTouchTap={this.props.toggleSign} handleRegister={this.props.handleRegister}/>;
        </div>
      </div>
   )
   }
   else
   {
     view=(
       <div className="row">
        <div className="col-sm-12 col-md-12">
          <Introduction/>
        </div>
      </div>
     )
   }
   return (
     <Paper zDepth={3} style={styles.paperStyle}>
      {view}
     </Paper>
   );
 }
}
export {HomeContent,CustomMenu,Login,Register} ;
