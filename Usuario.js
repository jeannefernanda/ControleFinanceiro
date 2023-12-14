class Usuario{
    nome;

    constructor(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setNome(novoNome){
        this.nome = novoNome;
    }
}

module.exports = Usuario;