import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
height: 300,
width: window.innerWidth/2+'px',
marginRight: '',
marginLeft: '25%',
textAlign: 'justify',
backgroundColor:'rgba(0,0,0,0.0)',
display: 'inline-block',
color: 'white',
};
const labelStyle={
  color: 'white',
  fontWeight: '400px',
  fontSize: '20px',
}
const buttonStyle={
padding: '10px',
backgroundColor:'#EC5509',
};
class Introduction extends React.Component
{

render()
{




return(

 <div>
    <Paper style={style} zDepth={0} >
    <br/>
    <br/>
    <br/>
  <h1>Conversational User Experience Platform.<br/>
            Now we are talking.</h1><br/>
         <h2>Build brand-unique, natural language interactions<br/>
         for bots, applications, services, and devices.<br/>

          </h2>
          <br/>
          <br/>
          <br/>
    <RaisedButton label="GET STARTED FREE" labelStyle={labelStyle}
    backgroundColor='#EC5509' style={buttonStyle} />
    </Paper>


  </div>





	)



}

}
export default Introduction;
