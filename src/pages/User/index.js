import { Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import api from '../../services/api';
import api2 from '../../services/api2';

export default function User() {
    const user = useSelector(s => s.user);

    const [users, setUsers] = useState(null);

    const lista = [];

    async function buscarDados() {
        const data = await api.getUsers();

        const data2 = await api2.get('/users');
        console.log(data2);

        data.forEach(el => {
            lista.push(<li key={el.id}>{el.name}</li>)
        });

        setUsers(lista);
    }

    useEffect(() => {
        buscarDados();
    });

    return(
        <Container>
            <Typography variant="h1" component="h1">
                Página protegida
            </Typography>
            <Typography component="h2">
                Olá, { user.email }
                <ul>
                    { users }
                </ul>
            </Typography>  
        <Button variant="outlined" color="primary">Mostrar Carrinho</Button>
        </Container>
    );
}