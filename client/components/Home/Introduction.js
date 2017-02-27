import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
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
borderRadius: '4px',
};
const styles={
  paperStyle:{
    width: "auto",
    padding:"10px",
    paddingTop: '100px',
    backgroundImage: `url(${"../../../images/intro-back.jpg"})`,
    backgroundSize: 'cover',
    height: (window.innerHeight)+'px',
  }
}
class Introduction extends React.Component
{

render()
{

return(
<div>
  <div className="row">
   <div className="col-sm-12 col-md-12">
    <Paper zDepth={3} style={styles.paperStyle}>
      <div>
      <Paper style={style} zDepth={0} >
      <br/>
      <br/>
      <br/>
    <h1>Conversational User Experience Platform.<br/>
              Now we are talking.</h1><br/>
           <h3>Build brand-unique, natural language interactions<br/>
           for bots, applications, services, and devices.<br/>

            </h3>
            <br/>
            <br/>
            <br/>
      <Link to='/Register'><RaisedButton label="GET STARTED FREE" labelStyle={labelStyle}
      backgroundColor='#EC5509' style={buttonStyle} /></Link>
      </Paper>
    </div>
    </Paper>
   </div>
 </div>

    <div className="row">
      <div className="col-sm-12 col-md-8">
      <h1>Voice-Enable Your Product with Lucy</h1>
        <span>Use the Lucy Voice Service (LVS) to add intelligent voice control to any connected product that has a microphone and speaker. Your customers will be able to ask Lucy to play music, answer questions, get news and local information, control smart home products, and more on their voice-enabled products. Get started with LVS »</span>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src="../../../images/1.png" alt="Voice-Enable Your Product with Lucy" className="img-responsive"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-8">
      <h1>How LVS Works</h1>
        <span>As an LVS developer, you can build products with access to Lucy’s growing list of capabilities through our regular API updates, feature launches, and from Lucy skills contributed by our active developer community. Best of all, LVS is free to use.</span>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <img src="../../../images/2.png" alt="Natural Voice Control"/>
        <h3>Natural Voice Control</h3>
        <span>Lucy has finely tuned automatic speech recognition (ASR) and natural language understanding (NLU) engines that recognize and respond to voice requests instantly. See more LVS features »</span>
      </div>
      <div className="col-sm-12 col-md-4">
        <h3>Always Getting Smarter</h3>
        <img src="/3.png" alt=""/>
        <span></span>//comment
      </div>
      <div className="col-sm-12 col-md-4">
        <img src="" alt=""/>
        <span></span>//comment
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <img src="" alt=""/>
      </div>
      <div className="col-sm-12 col-md-8">
        <span></span>//comment
      </div>
    </div>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-sm-12 col-md-6">
        <img src="" alt=""/>
        <h1></h1>
        <span></span>//comment
      </div>
      <div className="col-md-3"></div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-7">
        <span></span>//comment
      </div>
      <div className="col-sm-12 col-md-5">
        <img src="" alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <img src="" alt=""/>
      </div>
      <div className="col-sm-12 col-md-7">
        <h1></h1>
        <span></span>//comment
      </div>
    </div>
    <div className="row">
      <div className="col-md-2">

      </div>
      <div className="col-sm-6 col-md-2">
        <img src="" alt=""/>
        <h1></h1>
        <span></span>//comment
      </div>
      <div className="col-sm-6 col-md-2">
        <img src="" alt=""/>
        <h1></h1>
        <span></span>//comment
      </div>
      <div className="col-sm-6 col-md-2">
        <img src="" alt=""/>
        <h1></h1>
        <span></span>//comment
      </div>
      <div className="col-sm-6 col-md-2">
        <img src="" alt=""/>
        <h1></h1>
        <span></span>//comment
      </div>
      <div className="col-md-2">
      </div>
    </div>
  </div>
	)
}

}
export default Introduction;
