class Categoria{
    nome;
    tipo = ['Entrada', 'Saída']

    constructor(nome, tipo){
        if(this.tipo.includes(tipo)){
            this.nome = nome;
            this.tipo = tipo;
        }
        
    }

    getNome(){
        return this.nome;
    }

    setNome(novoNome){
        this.nome = novoNome;
    }
}

module.exports = Categoria;
