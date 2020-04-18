import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        marginRight:'10px',
        marginLeft:'80px',
        marginBottom :'30px',
       


      },
  media: {           // this is the`className` passed to `CardMedia` later
  height: 100, 
  width: 120,
  marginLeft: '33%',
  marginTop:'30px',
},
nddiv:{
marginLeft:'1%'
},

});

export default function Laptops() {
  const classes = useStyles();

  return (
          <div className='flex-container row'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/lenovo/lenovo-s145-81n30063in-136733-v1-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Lenovo Ideapad S145 (81N30063IN) Laptop (AMD Dual Core A6/4 GB/1 TB/Windows 10)
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          LENOVO IDEAPAD S145 (81N30063IN) LAPTOP (AMD DUAL CORE A6/4 GB/1 TB/WINDOWS 10) PRICE IN INDIA  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/apple/apple-macbook-air-mqd32hn-a-ultrabook-core-i5-5th-gen-8-gb-128-gb-ssd-macos-sierra-119032-v1-large-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Apple MacBook Air MQD32HN/A Ultrabook (Core i5 5th Gen/8 GB/128 GB SSD/macOS Sierra)          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. 
                </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/hp/hp-14q-cy0006au-7qg88pa-laptop-amd-dual-core-a9-4-gb-256-gb-ssd-windows-10-135138-v3-large-1.jpg?tr=h-330,c-at_max,q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          HP 14q-cy0006au (7QG88PA) Laptop (AMD Dual Core A9/4 GB/256 GB SSD/Windows 10)         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          laptop is powered by AMD Dual Core  processor, coupled with 4 GB of RAM and has 256 GB SSD .
   </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.91-img.com/pictures/laptops/hp/-134142-v1-large-1.jpg?tr=h-630,q-75"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          HP 15q-dy0007au (6AL29PA) Laptop (AMD Dual Core A9/4 GB/1 TB/Windows 10)          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This laptop is powered by AMD Dual Core A9-9425 processor coupled with 4 GB of RAM and has 1 TB HDD storage at this price
                    </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
    </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/dell/dell-15r-5559-i5559-7080slv-core-i7-6th-gen-8-gb-1-tb-windows10-4-gb-99600-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Dell Inspiron 15R 5559
                    </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This laptop is powered by Intel Core i7-6500U (6th Gen) processor, coupled with 8 GB of RAM and has 1 TB HDD storage at this price point.
             </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/hp/hp-15-au003tx-w6t16pa-core-i5-6th-gen-8-gb-1-tb-windows-10-2-gb-99293-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HP Pavilion 15-au003tx
                    </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP Pavilion 15-AU003TX packs 1TB of HDD storage.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/asus/asus-g752vy-gc489t-core-i7-6th-gen-16-gb-1-tb-512-gb-ssd-windows-10-8-gb-99282-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Asus ROG G752VY-GC489T Laptop
      </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ASUS ROG G752VY-GC489T Laptop (Core I7 6TH GEN/16 GB/1 TB 512 GB SSD) DETAILS. Asus ROG G752VY-GC489T price in India starts at Rs. 1,69,990.      </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className='flex-item'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/laptops/dell/dell-17-mlk-z569971hin9-core-i7-6th-gen-16-gb-1-tb-windows-10-8-gb-98559-small-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h7">
          Dell 17 MLK (Core i7 6th Gen/16 GB/1 TB/Windows 10)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Dell Inspiron Core i7 6th Gen - (16 GB/1 TB HDD/128 GB SSD/Windows 10) 7559 Gaming Laptop           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
    </div>

    </div>
  );
}

