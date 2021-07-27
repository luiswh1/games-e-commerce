import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import Route from './RouteWrapper';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/user"  exact component={User}/>
            </Switch>
        </BrowserRouter>
    ); 
}