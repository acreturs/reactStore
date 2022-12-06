import React from 'react'
import { createUseStyles } from 'react-jss';
import './dog1.png';


const useStyles = createUseStyles({
wrapper:{
    border: '1px solid grey',
    minWidth: '13rem',
    minHeight:'13rem',
    margin: '3rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19)',
    '&:hover':{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    }
    
    
}   
  });
  

 
  

  
  function SellElement({image, name}) {
    const classes = useStyles();
    return(
      <div className={classes.wrapper}>
            <h3>{name}</h3>
            <img src={image}/>
      </div>
    );
  }
  export default SellElement