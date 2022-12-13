import React from 'react'
import { createUseStyles } from 'react-jss';
import BILD1 from '../SellElement/dog1.png';
import BILD2 from '../SellElement/dog2_2.png';
import BILD3 from '../SellElement/dog3_2.png';





const useStyles = createUseStyles({
wrapper:{

    backgroundColor: 'red',
    border: '1px solid grey',
    minWidth: '12rem',
    minHeight:'12rem',
    margin: '3rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19)',
    '&:hover':{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 80px 0 rgba(0, 0, 0, 0.19)',
        header:{
          color:'black'
        }
    }
},
para:{
    fontSize: "100px"
},
header:{
    color: 'green',
    '&:hover':{
     color:'black'
},
}   
 } );
  

 
  

  
  function SellElement({image, name}) {
    const classes = useStyles();
    return(
      <div className={classes.wrapper}>
            <h3 className={classes.header}>{name}</h3>
          <img src={image}/>
      </div>
    );
  }
  export default SellElement