import axios from 'axios';

class Api {
    async login({email, password}) {        
        if (email === 'admin@admin.com' && password === '1234') {
            return true;
        }

        return false;
    }

    async getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        return response.data;
    }
}

export default new Api();