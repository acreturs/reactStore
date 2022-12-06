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
      image: './images/dog1.png',
      name: 'Doggo1',
    },
    {
      image: './images/dog2_2.png',
      name: 'Doggo2',
    },
    {
      image: './images/dog3_2.png',
      name: 'Doggo3',
    },
    {
        image: './images/dog1.png',
        name: 'Doggo1',
      },
      {
        image: './images/dog2_2.png',
        name: 'Doggo2',
      },
      {
        image: './images/dog3_2.png',
        name: 'Doggo3',
      },
      {
        image: './images/dog1.png',
        name: 'Doggo1',
      },
      {
        image: './images/dog2_2.png',
        name: 'Doggo2',
      },
      {
        image: './images/dog3_2.png',
        name: 'Doggo3',
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