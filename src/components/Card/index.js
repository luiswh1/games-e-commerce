import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     <CardActionArea>
        <div>
            <img image={props.product.image} alt="Product" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Comprar
        </Button>
        <Button size="small" color="primary">
          Adicionar no carrinho
        </Button>
      </CardActions>
    </Card>
  );
}