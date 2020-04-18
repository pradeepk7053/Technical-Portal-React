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
  height: 150,     // as an example I am modifying width and height
  width: '33%',
  marginLeft: '33%',
  marginTop:'30px',
},
nddiv:{
marginLeft:'1%'
},

});

export default function SmartphoneCollections() {
  const classes = useStyles();

  return (
          <div className='flex-container row'>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="//www.91-img.com/pictures/136125-v4-oneplus-8-mobile-phone-large-1.jpg"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
           OnePlus 8        
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          OnePlus 8 is powered by an octa-core Qualcomm Snapdragon 865 processor. It comes with 8GB of RAM
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
          image="//www.91-img.com/pictures/138034-v6-xiaomi-redmi-note-9-pro-max-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Xiaomi Note 9 Pro Max
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It runs on the Qualcomm Snapdragon 720G Chipset. It has 6 GB RAM and 64 GB internal storage.
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
          image="//www.91-img.com/pictures/136164-v6-oneplus-8-pro-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          OnePlus 8 Pro
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          OnePlus 8 Pro is powered by an octa-core Qualcomm Snapdragon 865 processor. It comes with 8GB of RAM. 
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
          image="//www.91-img.com/pictures/138137-v1-motorola-edge-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Motorola Edge
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            It runs on the Qualcomm Snapdragon 765G Chipset. It has 6 GB RAM and 128 GB internal storage.
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
          image="//www.91-img.com/pictures/137046-v6-xiaomi-redmi-note-9-pro-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          Redmi Note 9 Pro
                    </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It has a 6.67-inch LCD screen  and hole-punch front camera at the top. The processor is a Qualcomm Snapdragon 720G          </Typography>
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
          image="//www.91-img.com/pictures/136684-v3-realme-6-pro-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Realme 6 Pro
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Realme 6 Pro smartphone runs on Android v10 (Q) operating system. The phone is powered by Octa core
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
          image="//www.91-img.com/pictures/136405-v7-realme-6-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Realme 6
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It runs on the MediaTek Helio G90T Chipset. ... Connectivity features in the smartphone include WiFi, and more.
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
          image="//www.91-img.com/pictures/136708-v7-oppo-reno-3-pro-mobile-phone-medium-1.jpg?tr=q-60"
          title="Contemplative Reptile"
          object-fit
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          OPPO Reno 3 Pro
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          OPPO Reno 3 Pro comes with an inbuilt storage space of 128 GB, out of which 113 GB is accessible to the users. 
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

    </div>
  );
}

