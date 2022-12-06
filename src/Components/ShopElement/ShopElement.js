import React from 'react'
import { createUseStyles } from 'react-jss';
import SellElement from '../SellElement/SellElement';


const useStyles = createUseStyles({
  wrapper:{
   
    backgroundColor:'lightgrey',
    display: 'flex',
    flexWrap: 'wrap',
   /// gap: '8%',
    padding: [30, 80],
    justifyContent: 'center',
  },

  });
  

  
  const shopItems = [
    {
      image: '🤠',
      name: 'Doggo1',
    },
    {
      image: '😡',
      name: 'Doggo2',
    },
    {
      image: '💩',
      name: 'Doggo3',
    },
    {
        image: '👾',
        name: 'Doggo1',
      },
      {
        image: '🤠',
        name: 'Doggo1',
      },
      {
        image: '😡',
        name: 'Doggo2',
      },
      {
        image: '💩',
        name: 'Doggo3',
      },
      {
          image: '👾',
          name: 'Doggo1',
        },
 
    
  ];
  

  
  function ShopElement() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
        {
        shopItems.map(shopItems => (
          <SellElement
            key={shopItems.name}
            image={shopItems.image}
            name={shopItems.name}
          />
        ))
      }
    
        </div>
    );
  }
  export default ShopElement