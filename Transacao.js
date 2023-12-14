const Categoria = require('./Categoria');
const Conta = require('./Conta');
const Usuario = require('./Usuario');
const Principal = require('./Principal')

class Transacao{
    descricao;
    valor;
    categoria;
    conta;
    usuario;

    constructor(descricao, valor, categoria, conta, usuario){
        if(!(categoria instanceof Categoria)) throw new Error('Categoria não cadastrada.');
        if(!(conta instanceof Conta)) throw new Error('Conta não cadastrada.');
        if(!(usuario instanceof Usuario)) throw new Error ('Usuário não cadastrado');
        this.descricao = descricao;
        this.valor = valor;
        this.categoria = categoria;
        this.conta = conta;
        this.usuario = usuario;
        Principal.listaDeTransacoes.push(this)
    }
}

module.exports = Transacao;