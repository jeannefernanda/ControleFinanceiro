class Principal {
    static listaDeTransacoes = []

    static calcularEntradas() {
        let somaEntradas = 0;
        for (let i = 0; i < Principal.listaDeTransacoes.length; i++) {
            if (Principal.listaDeTransacoes[i].categoria.tipo === "Entrada") {
                somaEntradas += Principal.listaDeTransacoes[i].valor;
            }
        }
        return somaEntradas;
    }

    static calcularSaidas() {
        let somaSaidas = 0;
        for (let i = 0; i < Principal.listaDeTransacoes.length; i++) {
            if (Principal.listaDeTransacoes[i].categoria.tipo === "Saída") {
                somaSaidas += Principal.listaDeTransacoes[i].valor;
            }
        }
        return somaSaidas;
    }

    static CalcularSaldoDisponivel() {
        return this.calcularEntradas() - this.calcularSaidas();
    }

}

module.exports = Principal;