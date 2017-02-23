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
    backgroundImage: `url(${"../../../images/intro-back.jpg"})`,
    backgroundSize: 'cover',
  }
};
class HomeContent extends React.Component {
  constructor(){
    super();
    this.state={
      open: true,
    }
  }
 toggleSign(){
   this.setState({open:!this.state.open});
   console.log("SSS");
 }
 render() {
   var sign={};
   if(this.state.open)
   {
     sign=<Login onTouchTap={this.toggleSign.bind(this)} />;
   }
   else
   {
     sign=<Register onTouchTap={this.toggleSign.bind(this)} />;
   }
   return (
     <Paper zDepth={3} style={styles.paperStyle}>
     <div className="row">

      <div className="col-sm-12 col-md-9">
        <Introduction/>
      </div>
      <div className="col-sm-12 col-md-3">
        {sign}
      </div>

     </div>
     </Paper>
   );
 }
}
export {HomeContent,CustomMenu} ;
