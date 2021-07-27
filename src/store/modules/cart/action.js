export function add(payload) {
    return {
        type: 'cart/ADD',
        payload,
    };
}

export function limpar(payload) {
    return {
        type: 'cart/EMPTY',
        payload,
    };
}