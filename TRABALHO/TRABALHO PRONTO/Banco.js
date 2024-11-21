"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = exports.ContaCorrente = exports.ContaBancaria = exports.rl = void 0;
exports.rl = require("readline-sync");
// Classe base ContaBancaria 
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(Id, Nome, Email, Senha, Saldo) {
        this.Id = Id;
        this.Nome = Nome;
        this.Email = Email;
        this.Senha = Senha;
        this.Saldo = Saldo;
        this.Historico = []; // Inicializa o histórico de transações como um array vazio
    }
    // Métodos abstratos que serão implementados nas classes derivadas (ContaCorrente e ContaPoupanca)
    ContaBancaria.prototype.Depositar = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaBancaria.prototype.Sacar = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaBancaria.prototype.Transferir = function (valor, contaDestino) {
        throw new Error("Method not implemented.");
    };
    // Método para gerar e exibir um extrato bancário detalhado
    ContaBancaria.prototype.GerarExtrato = function () {
        console.log("===== EXTRATO BANCÁRIO DETALHADO =====");
        console.log("Conta: ".concat(this.Nome, " (ID: ").concat(this.Id, ")")); // Mostra o nome e ID do titular da conta
        console.log("Saldo Inicial: R$".concat(this.Saldo.toFixed(2))); // Mostra o saldo inicial da conta
        console.log("------------------------------------------------------");
        // Itera sobre o histórico de transações e Mostra cada uma
        this.Historico.forEach(function (transacao, index) {
            console.log("".concat(index + 1, ". ").concat(transacao)); // Mostra a transação com seu índice
        });
        console.log("------------------------------------------------------");
        console.log("Saldo Final: R$".concat(this.Saldo.toFixed(2))); // Mostra o saldo final da conta
    };
    ContaBancaria.prototype.SaldoAtual = function () {
        return this.Saldo; // Retorna o saldo atual da conta
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
// Classe ContaCorrente, que herda de ContaBancaria e implementa a interface ICorrente
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.DepositarCorrente = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaCorrente.prototype.SacarCorrente = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaCorrente.prototype.TransferirCorrente = function (valor, contaDestino) {
        throw new Error("Method not implemented.");
    };
    // Método para depositar um valor na conta corrente
    ContaCorrente.prototype.Depositar = function (valor) {
        // Valida se o valor do depósito é positivo
        if (valor <= 0)
            throw new Error("O valor do depósito deve ser positivo.");
        this.Saldo += valor; // Adiciona o valor ao saldo atual
        // Adiciona a transação ao histórico
        this.Historico.push("Dep\u00F3sito: R$".concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2)));
        // Mostra a confirmação do depósito
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado. Novo saldo: R$").concat(this.Saldo.toFixed(2)));
    };
    // Método para sacar um valor da conta corrente
    ContaCorrente.prototype.Sacar = function (valor) {
        // Valida se o valor do saque é positivo
        if (valor <= 0)
            throw new Error("O valor do saque deve ser positivo.");
        // Verifica se há saldo suficiente para o saque 
        if (valor > this.Saldo)
            throw new Error("Saldo insuficiente.");
        this.Saldo -= valor; // Subtrai o valor do saldo atual
        // Adiciona a transação ao histórico
        this.Historico.push("Saque: R$".concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2)));
        // Mostra a confirmação do saque
        console.log("Saque de R$".concat(valor.toFixed(2), " realizado. Novo saldo: R$").concat(this.Saldo.toFixed(2)));
    };
    // Método para transferir um valor para outra conta bancária
    ContaCorrente.prototype.Transferir = function (valor, contaDestino) {
        // Valida se o valor da transferência é positivo
        if (valor <= 0)
            throw new Error("O valor da transferência deve ser positivo.");
        // Verifica se há saldo suficiente para a transferência
        if (valor > this.Saldo)
            throw new Error("Saldo insuficiente para transferência.");
        this.Sacar(valor); // Realiza o saque do valor na conta de origem
        contaDestino.Depositar(valor); // Realiza o depósito do valor na conta de destino
        this.Historico.push("Transfer\u00EAncia para ".concat(contaDestino.Nome, ": R$").concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2))); // Adiciona a transação ao histórico
        // Mostra a confirmação da transferência
        console.log("Transfer\u00EAncia de R$".concat(valor.toFixed(2), " realizada para ").concat(contaDestino.Nome, "."));
    };
    return ContaCorrente;
}(ContaBancaria));
exports.ContaCorrente = ContaCorrente;
// Classe ContaPoupanca, que herda de ContaBancaria e implementa a interface IPoupanca
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.DepositarPoupanca = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaPoupanca.prototype.SacarPoupanca = function (valor) {
        throw new Error("Method not implemented.");
    };
    ContaPoupanca.prototype.TransferirPopanca = function (valor, contaDestino) {
        throw new Error("Method not implemented.");
    };
    // Método para depositar um valor na conta poupança
    ContaPoupanca.prototype.Depositar = function (valor) {
        // Valida se o valor do depósito é positivo
        if (valor <= 0)
            throw new Error("O valor do depósito deve ser positivo.");
        this.Saldo += valor; // Adiciona o valor ao saldo atual
        // Adiciona a transação ao histórico
        this.Historico.push("Dep\u00F3sito: R$".concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2)));
        // Mostra a confirmação do depósito
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado. Novo saldo: R$").concat(this.Saldo.toFixed(2)));
    };
    // Método para sacar um valor da conta poupança
    ContaPoupanca.prototype.Sacar = function (valor) {
        // Valida se o valor do saque é positivo
        if (valor <= 0)
            throw new Error("O valor do saque deve ser positivo.");
        // Verifica se há saldo suficiente para o saque 
        if (valor > this.Saldo)
            throw new Error("Saldo insuficiente.");
        this.Saldo -= valor; // Subtrai o valor do saldo atual
        // Adiciona a transação ao histórico
        this.Historico.push("Saque: R$".concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2)));
        // Mostra a confirmação do saque
        console.log("Saque de R$".concat(valor.toFixed(2), " realizado. Novo saldo: R$").concat(this.Saldo.toFixed(2)));
    };
    // Método para transferir um valor para outra conta bancária
    ContaPoupanca.prototype.Transferir = function (valor, contaDestino) {
        // Valida se o valor da transferência é positivo
        if (valor <= 0)
            throw new Error("O valor da transferência deve ser positivo.");
        // Verifica se há saldo suficiente para a transferência
        if (valor > this.Saldo)
            throw new Error("Saldo insuficiente para transferência.");
        this.Sacar(valor); // Realiza o saque do valor na conta de origem
        contaDestino.Depositar(valor); // Realiza o depósito do valor na conta de destino
        this.Historico.push("Transfer\u00EAncia para ".concat(contaDestino.Nome, ": R$").concat(valor.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2))); // Adiciona a transação ao histórico
        // Mostra a confirmação da transferência
        console.log("Transfer\u00EAncia de R$".concat(valor.toFixed(2), " realizada para ").concat(contaDestino.Nome, "."));
    };
    // Método para aplicar juros ao saldo da conta poupança
    ContaPoupanca.prototype.AplicarJuros = function (taxa) {
        // Valida se a taxa de juros é positiva
        if (taxa <= 0)
            throw new Error("A taxa de juros deve ser positiva.");
        // Calcula o valor dos juros com base no saldo e na taxa fornecida
        var juros = this.Saldo * (taxa / 100);
        this.Saldo += juros; // Adiciona os juros ao saldo atual
        // Adiciona a transação de juros ao histórico
        this.Historico.push("Juros aplicados: R$".concat(juros.toFixed(2), " - Saldo: R$").concat(this.Saldo.toFixed(2)));
        // Mostra a confirmação da aplicação de juros 
        console.log("Juros de R$".concat(juros.toFixed(2), " aplicados. Novo saldo: R$").concat(this.Saldo.toFixed(2)));
    };
    return ContaPoupanca;
}(ContaBancaria));
exports.ContaPoupanca = ContaPoupanca;
