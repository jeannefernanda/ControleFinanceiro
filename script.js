const Conta = require('../ControleFinanceiro/classes/Conta');
const Categoria = require('../ControleFinanceiro/classes/Categoria')
const Usuario = require('../ControleFinanceiro/classes/Usuario');
const Cartao = require('../ControleFinanceiro/classes/Cartao');
const Transacao = require('./classes/Transacao');
const Principal = require('./classes/Principal');

const categoria1 = new Categoria('Moradia', 'Saída');
const categoria2 = new Categoria('Educação', 'Saída');
const categoria3 = new Categoria('Transporte', 'Saída');

const categoria4 = new Categoria('Salario', 'Entrada');

const usuario1 = new Usuario('João')

const usuario2 = new Usuario('Maria')


const cartao1 = new Cartao('Nubank', 2000, '01', '25')

const conta1 = new Conta('Banco do Brasil', 'Conta Corrente', '1000');
//console.log(conta1);

//const conta2 = new Conta('Conta inválida', 'Investimentos', '1000');
//console.log(conta2);

const transacao1 = new Transacao('Empresa x', 6000, '15/12/2023', '15/12/2023', categoria4, conta1, usuario1);
//console.log(transacao1);
const transacao2 = new Transacao('Gasolina', 260, '15/12/2023', '15/12/2023', categoria3, conta1, usuario1);
//console.log(transacao2);
const transacao3 = new Transacao('Aluguel', 1100, '15/12/2023', '', categoria1, conta1, usuario1);
//console.log(transacao3);

console.log(Principal.listaDeTransacoes);
console.log(Principal.listaDeTransacoes[1].categoria.tipo)


console.log(Principal.calcularEntradas());
console.log(Principal.calcularSaidas());
console.log(Principal.CalcularSaldoDisponivel())
console.log(Categoria.listaDeCategorias)

console.log(Usuario.listaDeUsuarios)

