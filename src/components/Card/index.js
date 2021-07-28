import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginBottom: 50,
    marginLeft: 20
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
  <Card className={classes.root}>
     <CardActionArea>
        <div>
            <img src={props.product.image} alt="Product" />
        </div>
        <CardContent>
          <Grid>
          <Typography gutterBottom variant="h5" component="h2">
           {props.product.name}
          </Typography>
          </Grid>
          <Typography variant="h5" color="textSecondary" component="p">
            R${props.product.price}.
          </Typography>
          <Typography>Notas da critica: {props.product.score}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <img src={process.env.PUBLIC_URL + '../../../assets/cart-icon.svg'} alt="cartIcon" height="40px" /> 
        </Button>
      </CardActions>
  </Card>
  );
}