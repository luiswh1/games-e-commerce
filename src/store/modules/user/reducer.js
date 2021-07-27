const estadoInicial = null;

export default function user(state = estadoInicial, {
    type,
    payload
}) {
    switch (type) {
        case 'user/LOGIN':
            return payload;
        case 'user/LOGOUT':
            return null;
            default:
                return state;
    }
}