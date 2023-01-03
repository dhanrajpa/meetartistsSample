import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() 
{
  return (
    <div className='cards'>
      <h1>“Creativity takes courage”</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Bismillah.jpg'
              text='Indian musician credited with popularizing the shehnai, a reeded woodwind instrument.'
              path='/services'
            />
            <CardItem
              src='images/mj.jpg'
              text=' American singer, songwriter, dancer and philanthropist'   
              path='/https://www.google.com/'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paint.jfif'
              text=' Painter is an artist itself who paints the art with help of paint and Brush.'          
              path='/services'
            />
            <CardItem
              src='images/jibin.jpeg'
              text='Jubin Nautiyal is an Indian playback singer and performer.'  
              path='/products'
            />
            <CardItem
              src='images/natyam.jpg'
              text='It is a major form of Indian classical dance that originated in Tamil Nadu'        
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;

// export default Cards;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import './Cards.css';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// function Cards() {
//   const classes = useStyles();

//   return (
//     <div className='cards' id='card'>
//            <h1>Check out these EPIC Destinations!</h1>
//            <div className='cards__container'>
//            <div className='cards__wrapper'>
//           <ul className='cards__items'>
//      <Card className={classes.root}> 
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image='images/jibin.jpeg'
       
//         />
        
//          <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
       
//         </CardContent>

    
//          <CardMedia
//           className={classes.media}
//           image='images/Bismillah.jpg'
//           title="Contemplative Reptile"
//         />
//          <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>  
        
//       </CardContent>
    
      
//          <CardMedia
//           className={classes.media}
//           image='images/mj.jpg'
//           title="Contemplative Reptile"
//         />
//          <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
         
//         </CardContent>
     




//          <CardMedia
//           className={classes.media}
//           image='images/paint.jfif'
//           title="Contemplative Reptile" />
//          <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
         
//         </CardContent>



      
//          <CardMedia
//           className={classes.media}
//           image='images/natyam.jpg'
         
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
        
 
//       {/* <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions> */}
        
// </CardContent> 
// </CardActionArea>

    
//     </Card>
//     </ul>
    
//     </div>
 
//     </div>
 

//     </div>
//   );
// }


