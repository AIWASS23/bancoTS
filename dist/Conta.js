"use strict";
class Conta {
    constructor(numero, limite = 0) {
        this.numero = numero;
        this.saldo = 0;
        this.debitos = [];
        this.creditos = [];
        this.limite = limite;
    }
    transferir(contaDestino, valor) { }
}
