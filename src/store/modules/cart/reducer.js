const estadoInicial = {
    produtos: [],
    total: 0,
};

export default function cart(state = estadoInicial, { type, payload }) {
    switch (type) {
        case 'cart/ADD':
            state.produtos.push(payload);
            const novoPreco =
                state.produtos.reduce((total, c) => {
                    return total += c.preco;
                }, 0);
            return {
                ...state,
                total: novoPreco,
                produtos: state.produtos,
            };
        case 'cart/EMPTY':
            return estadoInicial;
        default:
            return state;
    }
}