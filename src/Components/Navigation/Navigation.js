import React from 'react'
import { createUseStyles } from 'react-jss';
import cornett from './cornetto.png'

const useStyles = createUseStyles({
    wrapper: {
      marginTop:'2rem',
      borderBottom: 'black solid 1.5px',
      borderTop: 'black solid 1.5px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    liste:{
    marginTop: '0',
   
    minHeight:'100%',
    listStyle:'none',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    },
    rightSide:{
   
    gridColumnStart: '2',
    gridColumnEnd: '3',

    },
    leftSide:{
        gridColumnStart: '1',
        gridColumnEnd: '2',
        gridRowStart: '1',
        gridRowEnd:'1',
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '20% 60% 20%'
        },
    buttons:{
        border:'none',
        backgroundColor:'Transparent',
        color:'black',
        
        outline:'none',
        fontSize:'1.1rem',
        '&:hover':{
            borderBottom: 'grey solid 1px',
        }

    },
    
    bild:{
        marginTop:'10px',
        maxWidth:'30%',
        maxHeight:'80%',
        gridColumnStart: '2',
        gridColumnEnd: '3',
        gridRowStart: '2',
        gridRowEnd:'3',
        objectFit:'cover',
       
    }

  });
  
  

  
  function Navigation() {
    const classes = useStyles();
    return(
      <div className={classes.wrapper}>
        <div className={classes.rightSide}>
        <ol className= {classes.liste}>
            <li><button className={classes.buttons}>Menu</button></li>
            <li><button className={classes.buttons}>liste</button></li>
            <li><button className={classes.buttons}>faq</button></li>
        </ol>
        </div>
        <div className={classes.leftSide}>
           <img src={cornett} alt='geht nicht'className={classes.bild}/>
        </div>
    </div>
    );
  }
  export default Navigation