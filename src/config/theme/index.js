import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale' ;

import 'typeface-roboto';

export default createMuiTheme(
    {
        palette: {
            primary: {
                main: '#000080',
                light: '#836FFF',
                dark: '#00008B'
            }
        }
    },
    ptBR
);
