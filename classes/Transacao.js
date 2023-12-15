const Categoria = require('./Categoria');
const Conta = require('./Conta');
const Usuario = require('./Usuario');
const Principal = require('./Principal')
const fs = require('fs');

class Transacao {
    descricao;
    valor;
    dataDeVencimento;
    dataDePagamento;
    categoria;
    conta;
    usuario;

    constructor(descricao, valor, dataDeVencimento, dataDePagamento, categoria, conta, usuario) {
        if (!(categoria instanceof Categoria)) throw new Error('Categoria não cadastrada.');
        if (!(conta instanceof Conta)) throw new Error('Conta não cadastrada.');
        if (!(usuario instanceof Usuario)) throw new Error('Usuário não cadastrado');
        this.descricao = descricao;
        this.valor = valor;
        this.dataDeVencimento = dataDeVencimento;
        this.dataDePagamento = dataDePagamento;
        this.categoria = categoria;
        this.conta = conta;
        this.usuario = usuario;
        Principal.listaDeTransacoes.push(this);
        Transacao.salvarNoJSON('base/transacoes.json');
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(novaDescricao) {
        this.descricao = novaDescricao;
    }

    getValor() {
        return this.valor;
    }

    setValor(novoValor) {
        this.valor = novoValor;
    }

    getDataVencimento() {
        return this.dataDeVencimento;
    }

    setDataVencimento(novaDataVencimento) {
        this.dataDeVencimento = novaDataVencimento;
    }

    getDataPagamento() {
        return this.dataDePagamento;
    }

    setDataPagamento(novaDataPagamento) {
        this.dataDePagamento = novaDataPagamento
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(novaCategoria) {
        this.categoria = novaCategoria;
    }

    getConta() {
        return this.conta;
    }

    setConta(novaConta) {
        this.conta = novaConta;
    }

    getUsuario() {
        return this.usuario;
    }

    setUsuario(novoUsuario) {
        this.usuario = novoUsuario;
    }

    static salvarNoJSON(caminho) {
        const dadosJSON = JSON.stringify(Principal.listaDeTransacoes, null, 2);
        fs.writeFileSync(caminho, dadosJSON);
        
    }

}

module.exports = Transacao;