import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';

import { login } from '../../store/modules/user/action';


export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [temErro, setTemErro] = useState(false);
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.login({
            email,
            password,
        });

        if(response) {
            setTemErro(false);

            dispatch(login({
                email,
                password,
            }));

            window.location.href = "/user";
        }
        else {
            setTemErro(true);
        }
    }

    return (
        <Grid container justify="center" direction="column" align="center">
            <form onSubmit={handleSubmit}>
                <Grid item style={{ margin: '2rem 0rem 3rem 0rem' }}>
                    <Typography variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
                    <TextField label="E-mail" onChange={e => setEmail(e.target.value)} error={temErro} helperText={temErro ? 'email ou senha invalidos' : ''} />
                </Grid>
                <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
                    <TextField label="Senha" 
                               type="password" onChange={e => setPassword(e.target.value)} error={temErro} helperText={temErro ? 'email ou senha invalidos' : ''}  />
                </Grid>
                <Grid item style={{ margin: '4rem 0rem 2rem 0rem' }}>
                    <Button type="submit">
                        <Typography>Entrar</Typography>
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};