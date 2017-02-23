import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
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
class Introduction extends React.Component {

 render() {
   return (
     <div>
     <Paper style={styles.paperStyle}>
     <p >A card is a piece of paper with unique related data that serves as an entry point to more detailed information. For example, a card could contain a photo, text, and a link about a single subject.</p>

     <p>Cards have a constant width and variable height. The maximum height is limited to the height of the available space on a platform, but it can temporarily expand (for example, to display a comment field). Cards do not flip over to reveal information on the back.</p>

     <p>Card expansion can be controlled (use expanded and onExpandChange properties) or uncontrolled (use initiallyExpanded property). Use the expandable property to control whether an element will react to expansion or not. Use actAsExpander on CardTitle or CardHeader to let them have an expander button.</p>
     </Paper>
</div>
   );

 }
}
export default Introduction;
