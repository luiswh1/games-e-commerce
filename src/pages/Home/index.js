import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { limpar } from '../../store/modules/cart/action';
import products from '../../products.json';
import GrowCard from '../../components/Card';
import { CssBaseline } from '@material-ui/core';

const data = products;

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));


export default function Home() {
    const classes = useStyles();

    const total = useSelector(store => store.cart.total);
    const dispatch = useDispatch();
    function limparCarrinho() {
        dispatch(limpar());
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>World of Games</Typography>
                    <Typography variant="h5" color="inherit" noWrap >R$ { total.toFixed(2) }</Typography>
                    <Button color="secondary" variant="outlined" className={classes.link} onClick={limparCarrinho}>
                        <RemoveShoppingCartIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Catálogo</Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">Confira o Catálogo de games disponiveis no momento.</Typography>
            </Container>
            <Container>
                <Grid container xs={12}>
                       {data.map((product) => (
                           <GrowCard key={product.id} product={product}  classes={classes} />
                           ))}  
                          </Grid>
            </Container>
        </React.Fragment>
    );
}