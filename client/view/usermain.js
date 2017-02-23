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
import {List,ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {Wall} from './components/UserHome/index.js'
import {HomeContent} from '../components/Home/index.js'
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
class AppHeader1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      operPopover: false,
      drawerMenu: [],
      numberOfNotifications: -1,
      userImage: "",
      anchorEl: event.currentTarget,
      loggedin: false,
    };
    this.localUserAuthentication=this.localUserAuthentication.bind(this);
    this.createMenu=this.createMenu.bind(this);
    this.createRightIcon=this.createRightIcon.bind(this);
  }
  componentWillMount(){
    console.log("SSSS");
    this.localUserAuthentication();

  }
  componentDidMount(){



  }
  handleLogoutUser(){
    localStorage.setItem('cognitiveUser', JSON.stringify({user: {},loggedin: false}));
    browserHistory.push('/Home');
  }
  fetchMenu(){
    var drawerMenu=[];
    var that=this;
    var userDetails=JSON.parse(localStorage.getItem('cognitiveUser'));
    axios.get('http://localhost:3000/menus?username'+userDetails.user.username)
    .then(function (response){
      drawerMenu.push({text:'Home',link:'/UserHome',subMenu: []});
      Array.prototype.push.apply(drawerMenu, response.data[0].menu);
      drawerMenu.push({text:'About Us',link:'/About',subMenu: []});
      drawerMenu.push({text:'Contact Us',link:'/Contact',subMenu: []});
      that.setState({drawerMenu});
    })
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
            that.fetchMenu();
            that.fetchNotification();
            that.fetchProfilePic();
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


  createMenu(drawerMenu)
  {

    var menuItems=[];
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
   handlePopover(event){
     event.preventDefault();
     this.setState({openPopover:!this.state.openPopover,anchorEl: event.currentTarget})
   }
   handleRequestClose(){
    this.setState({
      openPopover: false,
    });
  };
  toggleNav(){
    this.setState({openDrawer:!this.state.openDrawer})
  }
  render() {
    var drawerMenu=[];
    var rightIcon={};
    var numberOfNotifications=-1;
    var image="";
    var mainComponent={};
    console.log(drawerMenu.length);
    var menu={};

    if(!this.state.loggedin)
    {
      var drawerMenu=[];
      mainComponent=<HomeContent/>
      drawerMenu.push({text:'Home',link:'/UserHome',subMenu: []});
      drawerMenu.push({text:'About Us',link:'/About',subMenu: []});
      drawerMenu.push({text:'Contact Us',link:'/Contact',subMenu: []});
      menu=this.createMenu(drawerMenu);
      rightIcon=<div></div>
    }
    else
    {
      menu=this.createMenu(this.state.drawerMenu);
      rightIcon=this.createRightIcon(this.state.numberOfNotifications,this.state.userImage);
    }
    console.log("XXX");
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
            {menu}
          </List>

        </Drawer>

        </div>



        {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
export default AppHeader1;
