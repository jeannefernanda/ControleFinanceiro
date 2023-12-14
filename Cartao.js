class Cartao{
    nome;
    limite;
    vencimento;
    fechamento;

    constructor(nome, limite, vencimento, fechamento){
        this.nome = nome;
        this.limite = limite;
        this.vencimento = vencimento;
        this.fechamento = fechamento;
    }

    getNome(){
        return this.nome;
    }

    setNome(novoNome){
        this.nome = novoNome;
    }

    getLimite(){
        return this.limite;
    }

    setLimite(novoLimite){
        this.limite = novoLimite;
    }

    getVencimento(){
        return this.vencimento;
    }

    setVencimento(novoVencimento){
        this.vencimento = novoVencimento;
    }

    getFechamento(){
        return this.fechamento
    }

    setFechamento(novoFechamento){
        this.fechamento = novoFechamento;
    }
}

module.exports = Cartao;