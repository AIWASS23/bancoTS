// Aplicação 1

const cargoGerente = new Cargo("Gerente");
const cargoAtendente = new Cargo("Atendente");

const gerente = new Funcionario("123.456.789-00", "João Silva", "(11) 98765-4321", 10000.00, cargoGerente);
const atendente = new Funcionario("987.654.321-00", "Maria Souza", "(22) 99876-5432", 1000.00, cargoAtendente);

// Aplicação 2

const endereco1 = new Endereco("01234-567", "Rua das Flores", "123", "Apto 45", "São Paulo", "SP");
const endereco2 = new Endereco("98765-432", "Avenida Central", "456", "Casa 78", "Rio de Janeiro", "RJ");
const endereco3 = new Endereco("45678-901", "Praça das Árvores", "789", "Sala 10", "Belo Horizonte", "MG");
const contaCorrenteExemplo1 = new ContaCorrente("12345-6", 500.0);

const cliente = new Cliente("123.456.789-00", "João da Silva", "(11) 98765-4321", true, [endereco1, endereco2, endereco3], contaCorrenteExemplo1);

cliente.listarEnderecos();

// Aplicação 3

const contaCorrenteExemplo = new ContaCorrente("12345-6", 500.0);

const clienteExemplo = new Cliente("123.456.789-00", "João da Silva", "(11) 98765-4321", true, [], contaCorrenteExemplo);

clienteExemplo.conta = contaCorrenteExemplo;

clienteExemplo.conta.depositar(100.0);
clienteExemplo.conta.depositar(100.0);
clienteExemplo.conta.depositar(100.0);

clienteExemplo.conta.sacar(50.0);

console.log("Saldo da Conta Corrente: R$" + clienteExemplo.conta.calcularSaldo());

// Aplicação 4

const contaCorrente = new ContaCorrente("12345-6", 1000.0);
const clienteContaCorrente = new Cliente("111.222.333-44", "João Silva", "(11) 98765-4321", true, [], contaCorrente);

clienteContaCorrente.conta.depositar(1000.0);

const contaPoupanca = new ContaPoupanca("98765-4");
const clienteContaPoupanca = new Cliente("555.666.777-88", "Maria Souza", "(22) 99876-5432", false, [], contaPoupanca);

clienteContaPoupanca.conta.depositar(1000.0);

clienteContaCorrente.conta.transferir(clienteContaPoupanca.conta, 500.0);

console.log("Saldo da Conta Corrente: R$" + clienteContaCorrente.conta.calcularSaldo());
console.log("Saldo da Conta Poupança: R$" + clienteContaPoupanca.conta.calcularSaldo());

// Aplicação 5

const contaCorrente3 = new ContaCorrente("12345-6", 0)
const clienteContaCorrente1 = new Cliente("111.222.333-44", "João Silva", "(11) 98765-4321", true, [], contaCorrente3);

clienteContaCorrente1.conta.depositar(300.0);
clienteContaCorrente1.conta.limite = 100.0;

const contaCorrente4 = new ContaCorrente("98765-4", 1000)
const clienteContaCorrente2 = new Cliente("555.666.777-88", "Maria Souza", "(22) 99876-5432", false, [], contaCorrente4);

clienteContaCorrente2.conta.depositar(100.0);

clienteContaCorrente1.conta.transferir(clienteContaCorrente2.conta, 1000.0);

console.log("Saldo da Conta Corrente 1: R$" + clienteContaCorrente1.conta.calcularSaldo());
console.log("Saldo da Conta Corrente 2: R$" + clienteContaCorrente2.conta.calcularSaldo());

