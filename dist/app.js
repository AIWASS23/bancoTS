"use strict";
// Aplicação 1
const cargoGerente = new Cargo("Gerente");
const cargoAtendente = new Cargo("Atendente");
const gerente = new Funcionario("123.456.789-00", "João Silva", "(11) 98765-4321", 10000.00, cargoGerente);
const atendente = new Funcionario("987.654.321-00", "Maria Souza", "(22) 99876-5432", 1000.00, cargoAtendente);
// Aplicação 2
const endereco1 = new Endereco("01234-567", "Rua das Flores", "123", "Apto 45", "São Paulo", "SP");
const endereco2 = new Endereco("98765-432", "Avenida Central", "456", "Casa 78", "Rio de Janeiro", "RJ");
const endereco3 = new Endereco("45678-901", "Praça das Árvores", "789", "Sala 10", "Belo Horizonte", "MG");
const cliente = new Cliente("123.456.789-00", "João da Silva", "(11) 98765-4321", true, [endereco1, endereco2, endereco3]);
cliente.listarEnderecos();
