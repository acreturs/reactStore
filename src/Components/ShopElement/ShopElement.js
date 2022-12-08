import React from 'react'
import { createUseStyles } from 'react-jss';
import SellElement from '../SellElement/SellElement';
import BILD1 from '../SellElement/dog1.png';
import BILD2 from '../SellElement/dog2_2.png';
import BILD3 from '../SellElement/dog3_2.png';


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
    //  "image": '🤠',
      image: BILD1,
      name: 'Doggo1',
    },
    {
    // image: '😡',
     image :BILD2,
     name: 'Doggo2',
    },
    {
      //image: '💩',
      image: BILD3,
      name: 'Doggo3',
    },
    {
      //  "image": '🤠',
        image: BILD1,
        name: 'Doggo1',
      },
      {
      // image: '😡',
       image :BILD2,
       name: 'Doggo2',
      },
      {
        //image: '💩',
        image: BILD3,
        name: 'Doggo3',
      },
      {
        //  "image": '🤠',
          image: BILD1,
          name: 'Doggo1',
        },
        {
        // image: '😡',
         image :BILD2,
         name: 'Doggo2',
        },
        {
          //image: '💩',
          image: BILD3,
          name: 'Doggo3',
        },
        {
          //  "image": '🤠',
            image: BILD1,
            name: 'Doggo1',
          },
          {
          // image: '😡',
           image :BILD2,
           name: 'Doggo2',
          },
          {
            //image: '💩',
            image: BILD3,
            name: 'Doggo3',
          }
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
  export default ShopElement ; 
