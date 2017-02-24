import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import {Menu,MenuItem} from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import {List,ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {Wall} from './components/UserHome/index.js'
import {HomeContent,CustomMenu} from '../components/Home/index.js'
import { Link,browserHistory  } from 'react-router';
import axios from 'axios';

const styles={
  signInButtonStyle:{
    margin:'10px',
    border: '0px solid black',
  },
  signUpButtonStyle:{
    margin: '10px',
  },
  signUpButtonLabelStyle:{
    color: 'white',
    fontWeight: 400,
  },
  signInButtonLabelStyle:{
    color: 'white',
    fontWeight: 400,
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
    color: '#FFF',
  },
  drawerAppbarStyle:{
    backgroundColor: '#000',
  },
  appbarStyle:{
    backgroundColor: '#000',
    position: 'fixed',
  }
}
class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      operPopover: false,
      openSnackbar: false,
      drawerMenu: [],
      numberOfNotifications: -1,
      userImage: "",
      loggedin: false,
      message: "",
      openLogin: 'none',
    };
    this.localUserAuthentication=this.localUserAuthentication.bind(this);
    this.createRightIcon=this.createRightIcon.bind(this);
  }
  componentDidMount(){
    this.localUserAuthentication();
    this.fetchMenu();
    this.fetchNotification();
    this.fetchProfilePic();
  }
  fetchMenu(){
    var drawerMenu=[];
    var that=this;
    var userDetails=JSON.parse(localStorage.getItem('cognitiveUser'))||{user:{},loggedin: false};
    console.log(userDetails);
    if(userDetails.loggedin)
    {
      axios.get('http://localhost:3000/menus?username='+userDetails.user.username)
      .then(function (response){
        drawerMenu.push({text:'Home',link:'/UserHome',subMenu: []});
        Array.prototype.push.apply(drawerMenu, response.data[0].menu);
        drawerMenu.push({text:'About Us',link:'/About',subMenu: []});
        drawerMenu.push({text:'Contact Us',link:'/Contact',subMenu: []});
        that.setState({drawerMenu});
      })
    }
    else{
      drawerMenu.push({text:'Home',link:'/UserHome',subMenu: []});
      drawerMenu.push({text:'About Us',link:'/About',subMenu: []});
      drawerMenu.push({text:'Contact Us',link:'/Contact',subMenu: []});
      this.setState({drawerMenu});
    }

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
          <IconButton style={styles.iconButtonStyle} onTouchTap={this.handlePopover.bind(this)}>
            <Avatar src={image} />
          </IconButton>
        <Popover
          open={this.state.openPopover}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{"horizontal":"right","vertical":"bottom"}}
          targetOrigin={{"horizontal":"right","vertical":"top"}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" onTouchTap={this.handleLogoutUser.bind(this)}/>
          </Menu>
        </Popover>
      </div>
      </div>
    )
   }

   handleLogoutUser(){
     localStorage.setItem('cognitiveUser', JSON.stringify({user: {},loggedin: false}));
     this.setState({loggedin: false,openPopover: false,openDrawer: false});
     browserHistory.push('/Home');
     this.fetchMenu();
     this.fetchProfilePic();
     this.fetchNotification();
   }
  toggleNav(){
    this.setState({openDrawer:!this.state.openDrawer})
  }
  handlePopover(event){
    event.preventDefault();
    this.setState({openPopover:!this.state.openPopover,anchorEl: event.currentTarget})
  }
  handleRequestClose(){
   this.setState({
     openPopover: false,
   });
 };
  handleLogin(credentials){
    var that=this;
    axios.get('http://localhost:3000/credentials?username='+credentials.username)
    .then(function (response){
      if(response.data.length === 1 && response.data[0].password == credentials.password)
      {
        that.setState({loggedin: true,message: "Successfully signed in!",openSnackbar: true});
        localStorage.setItem('cognitiveUser', JSON.stringify({user: {username:credentials.username,password:credentials.password},loggedin: true}));
        browserHistory.push('/UserHome');
        that.fetchMenu();
        that.fetchProfilePic();
        that.fetchNotification();
      }
    })
  }
  handleRegister(userDetails)
  {
    var that=this;
    var profile={
      name: userDetails.name,
      dateOfBirth: userDetails.dateOfBirth,
      email: userDetails.email,
      username: userDetails.username
    }
    console.log("ABC");
    axios.post('http://localhost:3000/profiles', profile)
    .then(function (response) {
      that.setState({openLogin:"Login"});
    })
    var credentials={
      username: userDetails.username,
      password: userDetails.password,
    }
    axios.post('http://localhost:3000/credentials', credentials)
    .then(function (response) {

      that.setState({open:true,message:"Successfully signed up!",openLogin:true});
    })
    axios.post('http://localhost:3000/menus', {username: credentials.username,menu: []})
    .then(function (response) {
      console.log("Succ");

      that.setState({open:true,message:"Successfully signed up!",openLogin:true});
    })
    axios.post('http://localhost:3000/credentials', credentials)
    .then(function (response) {
      console.log("Succ");
      browserHistory.push('/Login');

      that.setState({open:true,message:"Successfully signed up!",openLogin:true});
    })
  }
  toggleSign(){
    var openLogin=this.state.openLogin;
    if(openLogin === 'none')
    {
      openLogin = 'Login';
    }
    else if(openLogin === 'Login')
    {
      openLogin = 'Register';
    }
    else if(openLogin === 'Register')
    {
      openLogin = 'Login';
    }
    this.setState({openLogin});
  }
  showLogin()
  {
    this.setState({openLogin:'Login'});
  }
  showRegister()
  {
    this.setState({openLogin:'Register'});
  }
  render() {
    var drawerMenu=[];
    var rightIcon={};
    var numberOfNotifications=-1;
    var image="";
    var mainComponent={};
    var that=this;

    if(!this.state.loggedin)
    {
      rightIcon=(
        <div>
          <div className="header">
          <Link to='/Login'>
            <FlatButton label="LogIn" backgroundColor='#000'
            labelStyle={styles.signInButtonLabelStyle}
            style={styles.signInButtonStyle}
            onTouchTap={this.showLogin.bind(this)
            }/></Link>
          </div>
          <div className="header">

          <Link to='/Register'>  <RaisedButton label="Sign up free" onTouchTap={this.showRegister.bind(this)}
            backgroundColor='#21254F' labelStyle={styles.signUpButtonLabelStyle}
            style={styles.signUpButtonStyle}/></Link>
          </div>
        </div>
      );
    }
    else
    {
      rightIcon=this.createRightIcon(this.state.numberOfNotifications,this.state.userImage);
    }
    console.log(this.props.children);
  var children = React.Children.map(this.props.children, function (child) {
    if(that.props.children!=null &&that.props.children.props.route.path === '/Home')
    {
      return React.cloneElement(child, {
      handleLogin: that.handleLogin.bind(that),
      handleRegister: that.handleRegister.bind(that),
      openLogin: that.state.openLogin,
      toggleSign: that.toggleSign.bind(that)
      })
    }
    else if(that.props.children!=null &&that.props.children.props.route.path === '/Login')
    {
      return React.cloneElement(child, {
      handleLogin: that.handleLogin.bind(that)
      })
    }
    else if(that.props.children!=null &&that.props.children.props.route.path === '/Register')
    {
      return React.cloneElement(child, {
      handleRegister: that.handleRegister.bind(that)
      })
    }
    })


    return (
      <MuiThemeProvider>
      <div>

        <div>

        <AppBar style={styles.appbarStyle}
        title={<span style={styles.appbarTitleStyle} >Cognitive Assistant</span>}
            titleStyle={styles.appbarTitleStyle}
        iconElementRight={rightIcon}
        onLeftIconButtonTouchTap={this.toggleNav.bind(this)}
        />
        <div id="fake"></div>
        <Drawer open={this.state.openDrawer} containerStyle={styles.drawerStyle}>
          <AppBar style={styles.drawerAppbarStyle} title={<span style={styles.drawerAppbarTitleStyle}>Nothing</span>}
              titleStyle={styles.appbarTitleStyle} onLeftIconButtonTouchTap={this.toggleNav.bind(this)}/>
          <List>
            <CustomMenu menu={this.state.drawerMenu}/>
          </List>
        </Drawer>
        <Snackbar
          open={this.state.openSnackbar}
          message={this.state.message}
          autoHideDuration={3000}
        />
        </div>
        {children}
        </div>
      </MuiThemeProvider>
    )
  }
}
export default AppHeader;
