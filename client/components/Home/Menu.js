import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {List,ListItem} from 'material-ui/List';
import { Link,browserHistory  } from 'react-router';
import axios from 'axios';
const styles={
  paperStyle:{
    textAlign: "justify",
    opacity: "0.5",
    padding: "20px",
    width: "auto",
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20px',
    height: "600px",
    fontSize: "20px",
    fontWeight:600,

  },
  divStyle:{
    width: "15%",
  }
}
class CustomMenu extends React.Component {
  constructor()
  {
    super();
    this.state={
      drawerMenu: [],
    }
  }
  componentDidMount()
  {

  }
  componentWillReceiveProps(newProps){
    if(this.props.menu!=newProps)
    {
      console.log(this.props.menu);
      this.setState({drawerMenu: this.props.menu})
    }
    console.log("In Props");
  }
  createMenu()
  {

    var menuItems=[];
    var drawerMenu=this.state.drawerMenu;
    drawerMenu.forEach(function(item){
      var x={};
      if(item.subMenu.length === 0)
      {
        x=<ListItem
                    key={item.text}
                    primaryText={item.text}
                    open={false}
                    containerElement={<Link to={item.link} />}
                  />;
      }
      else
      {
        x=<ListItem
                    key={item.text}
                    primaryText={item.text}
                    open={false}
                    nestedItems={this.createMenu(item.subMenu)}
                  />
      }
      menuItems.push(x);
    })
    return(
      menuItems
    )
  }
 render() {
   var menu=this.createMenu();
   return (
     <div>
     {menu}
     </div>
   );

 }
}
export default CustomMenu;
