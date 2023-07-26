abstract class Conta {
  numero: string;
  saldo: number;
  debitos: Debito[];
  creditos: Credito[];
  limite: number;


  constructor(numero: string, limite: number = 0) {
    this.numero = numero;
    this.saldo = 0;
    this.debitos = [];
    this.creditos = [];
    this.limite = limite;
  }

  abstract depositar(valor: number): void 
  abstract sacar(valor: number): void 
  abstract calcularSaldo(): number

  transferir(contaDestino: Conta, valor: number): void {}
}
