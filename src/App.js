import Routes from './routes';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/globals';

export default function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <PersistGate persistor={persistor}>
                    <Routes />
            </PersistGate>
        </Provider>
    );
}
