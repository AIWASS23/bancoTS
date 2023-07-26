class Debito {
  valor: number;
  data: Date;
  conta: Conta; 
  
  constructor(valor: number, data: Date, conta: Conta) {
    this.valor = valor;
    this.data = data;
    this.conta = conta;
  }
}