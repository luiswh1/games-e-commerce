import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { limpar } from '../../store/modules/cart/action';


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
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
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>World of Games</Typography>
                    <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>R$ { total.toFixed(2) }</Typography>
                    <Button color="secondary" variant="outlined" className={classes.link} onClick={limparCarrinho}>
                        <RemoveShoppingCartIcon />
                    </Button>

                    <Button href="#" color="primary" variant="outlined" className={classes.link}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Catálogo</Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">Confira o Catálogo de games disponiveis no momento.</Typography>
            </Container>
        </React.Fragment>
    );
}