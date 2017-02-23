import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import {Menu,MenuItem} from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import {List,ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {Wall} from './components/UserHome/index.js'
import {HomeContent,CustomMenu} from '../components/Home/index.js'
import { Link,browserHistory  } from 'react-router';
import axios from 'axios';

const styles={
  signInButtonStyle:{
    backgroundColor: '#EEE',
    marginTop: '5px',
    marginRight: '2px',
  },
  signUpButtonStyle:{
    backgroundColor: '#EEE',
    marginTop: '5px',
  },
  iconButtonStyle:{
    padding:'0px',
    height: 'auto',
    width: 'auto',
    marginRight:'20px'
  },
  drawerStyle:{
    backgroundColor:'#fff',
    borderRight: "5px solid #555",
    overflow: "hidden",
  },
  iconStyles : {
  marginRight: 24,
  },
  listItemStyle: {
    display:'inline-block',
    width: '100%',
    backgroundColor: '#ddd',
    borderBottom: '2px solid #555',
    fontSize: '20px',
    fontWeight: 600,
    borderRadius: '4px',
  },
  drawerAppbarTitleStyle:{
    marginTop: "0px",
  }
}
class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      operPopover: false,
      numberOfNotifications: -1,
      userImage: "",
      loggedin: false,
    };
    this.localUserAuthentication=this.localUserAuthentication.bind(this);
    this.createRightIcon=this.createRightIcon.bind(this);
  }
  componentWillMount(){
    console.log("SSSS");
    this.localUserAuthentication();
    //this.fetchNotification();
    //this.fetchProfilePic();
  }

  fetchNotification()
  {
    var numberOfNotifications=0;
    var that=this;
    var userDetails=JSON.parse(localStorage.getItem('cognitiveUser'));
    axios.get('http://localhost:3000/notifications/'+userDetails.user.username)
    .then(function (response){
      numberOfNotifications=response.data.notifications.length;
      that.setState({numberOfNotifications});
      console.log('not');
    })
  }
  fetchProfilePic(){
    var that=this;
    var userImage="";
    var userDetails=JSON.parse(localStorage.getItem('cognitiveUser'));
    axios.get('http://localhost:3000/Profiles?'+userDetails.user.username)
    .then(function (response){
      userImage=response.data[0].image;
      that.setState({userImage});
      console.log("pic");
    })
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
            browserHistory.push('/UserHome');

          }else{
            browserHistory.push('/Home');
          }
        }
        else{
          browserHistory.push('/Home');
        }
        console.log(that.state.loggedin);
      })
    }
    else{
      browserHistory.push('/Home');
    }
  }





  createRightIcon(numberOfNotifications,image)
  {
    return(
      <div>
      <div className="header">

          <Link to={`/Notification`} >
          <IconButton style={styles.iconButtonStyle}>
          <Badge badgeContent={numberOfNotifications}  >
            <NotificationsIcon />
            </Badge>
          </IconButton>
          </Link>

      </div>
      <div className="header">
        <Link to={`/Profile`} >
          <IconButton style={styles.iconButtonStyle}>
            <Avatar src={image} />
          </IconButton>
        </Link>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
      </div>
    )
   }


  toggleNav(){
    this.setState({openDrawer:!this.state.openDrawer})
  }


  render() {
    console.log("MainRender");
    var drawerMenu=[];
    var rightIcon={};
    var numberOfNotifications=-1;
    var image="";
    var mainComponent={};
    /*if(this.props.params.status !== null)
    {
      this.setState({loggedin: this.props.params.status });
    }*/
    if(!this.state.loggedin)
    {
      rightIcon=<div></div>
    }
    else
    {
      rightIcon=this.createRightIcon(this.state.numberOfNotifications,this.state.userImage);
    }
    console.log("XXX");
  /*  var children = React.Children.map(this.props.children, function (child) {

    return React.cloneElement(child, {
      foo: this.state.foo
      })
    })*/
    return (

      <MuiThemeProvider>
      <div>
        <div>
        <AppBar
        title={<span style={styles.appbarTitleStyle}>Nothing</span>}
            titleStyle={styles.appbarTitleStyle}
        iconElementRight={rightIcon}
        onLeftIconButtonTouchTap={this.toggleNav.bind(this)}
        />
        <Drawer open={this.state.openDrawer} containerStyle={styles.drawerStyle}>
          <AppBar title={<span style={styles.drawerAppbarTitleStyle}>Nothing</span>}
              titleStyle={styles.appbarTitleStyle} onLeftIconButtonTouchTap={this.toggleNav.bind(this)}/>
          <List>
            <CustomMenu/>
          </List>

        </Drawer>

        </div>



        {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
export default AppHeader;
