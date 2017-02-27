import Introduction from './Introduction.js';
import Login from './Login.js';
import CustomMenu from './Menu.js';
import Register from './Register.js';
import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {

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
   return (
     <Introduction/>
   );
 }
}
export {HomeContent,CustomMenu,Login,Register} ;
