"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// menu.ts
var Banco_1 = require("./Banco");
var Banco_2 = require("./Banco");
// Lista de contas bancárias
var contas = [];
var menu = true; // Controle do menu
var user = null; // Conta atual selecionada
// Função para criar uma nova conta bancária
function criarConta(tipo) {
    console.clear();
    var id = Banco_1.rl.questionInt("Insira o ID do usuário: ");
    var nome = Banco_1.rl.question("Insira o nome do usuário: ");
    var email = Banco_1.rl.question("Insira o email do usuário: ");
    var senha = Banco_1.rl.questionInt("Insira a senha do usuário: ");
    var saldo = Banco_1.rl.questionInt("Insira o saldo inicial do usuário: ");
    if (tipo === "corrente") {
        var conta = new Banco_2.ContaCorrente(id, nome, email, senha, saldo);
        console.log("Conta Corrente criada para ".concat(nome, " com saldo de R$").concat(saldo, "."));
        return conta;
    }
    else if (tipo === "poupanca") {
        var conta = new Banco_2.ContaPoupanca(id, nome, email, senha, saldo);
        console.log("Conta Poupan\u00E7a criada para ".concat(nome, " com saldo de R$").concat(saldo, "."));
        return conta;
    }
    else {
        throw new Error("Tipo de conta inválido.");
    }
}
// Função para entrar na conta existente
function EntrarNaConta() {
    if (contas.length === 0) {
        console.log("Nenhuma conta cadastrada.");
        return null;
    }
    var id = Banco_1.rl.questionInt("Insira o ID da conta: ");
    var senha = Banco_1.rl.questionInt("Insira a senha da conta: ");
    for (var _i = 0, contas_1 = contas; _i < contas_1.length; _i++) {
        var conta = contas_1[_i];
        if (conta.Id === id && conta.Senha === senha) {
            console.log("Bem-vindo(a), ".concat(conta.Nome, "!"));
            return conta;
        }
    }
    console.log("ID ou senha incorretos.");
    return null;
}
// Função FAQ para tratar dúvidas frequentes dos usuários
function FAQ() {
    console.clear();
    // Exibe as perguntas frequentes disponíveis para o usuário
    console.log(" \n        ---------------------------------------------------------------------------------------------\n        ------------------------------ PERGUNTAS FREQUENTES -----------------------------------------\n        ---------------------------------------------------------------------------------------------\n        - 1. COMO FA\u00C7O LOGIN NA MINHA CONTA BANC\u00C1RIA ONLINE ?                                       -\n        - 2. ESQUECI MINHA SENHA. COMO POSSO RECUPERA-L\u00C1 ?                                          -\n        - 3. O QUE FAZER SE MINHA CONTA FOR BLOQUEADA OU SUSPENSA ?                                 -\n        - 4. COMO POSSO VERIFICAR O SALDO E HIST\u00D3RICO DE TRANSA\u00C7\u00D5ES DA MINHA CONTA ?                -\n        - 5. COMO REALIZAR TRANSFER\u00CANCIAS ENTRE CONTAS OU PARA TERCEIROS PELO SITE ?                -\n        - 6. O QUE FAZER SE EU SUSPEITAR DE ATIVIDADE FRAUDELENTA NA MINHA CONTA ?                  -\n        ---------------------------------------------------------------------------------------------\n        ---------------------------- DIGITE \"SAIR\" PARA VOLTAR --------------------------------------\n        ---------------------------------------------------------------------------------------------");
    // Variável de controle para o loop
    var loop = true;
    // Loop para manter o usuário no FAQ até que ele escolha sair
    while (loop) {
        // Captura a dúvida do usuário
        var duvida = Banco_1.rl.question("Digite o numero da sua duvida ou 'SAIR' para voltar: ");
        console.clear();
        // Usamos switch para tratar as diferentes dúvidas do usuário
        switch (duvida) {
            // Caso a dúvida seja sobre como fazer login na conta bancária online
            case "1":
            case " COMO FAÇO LOGIN NA MINHA CONTA BANCÁRIA ONLINE ?":
                console.clear();
                console.log(" \n                1 - \u27B1 Quando estiver no menu inicial do sistema, escolha a op\u00E7\u00E3o para \"Entrar na Conta\".\n                2 - \u2714 Voc\u00EA ser\u00E1 solicitado a inserir o ID da sua conta e a senha correspondente.\n                3 - \u2714 O sistema verifica se o ID e a senha inseridos correspondem a uma conta existente. \n                Se estiverem corretos, voc\u00EA ser\u00E1 autenticado e poder\u00E1 acessar as funcionalidades da sua conta.\n                4 - \u2714 Se o login for bem-sucedido, uma mensagem de boas-vindas com o seu nome ser\u00E1 exibida, \n                indicando que voc\u00EA entrou na conta com sucesso.");
                break;
            // Caso a dúvida seja sobre a recuperação de senha
            case "2":
            case "ESQUECI MINHA SENHA. COMO POSSO RECUPERA-LÁ ?":
                console.clear();
                console.log("Sinto muito, nosso Banco \u00E9 inicial....seu dinheiro agora \u00E9 nosso! Obrigado.");
                break;
            // Caso a dúvida seja sobre conta bloqueada ou suspensa
            case "3":
            case "O QUE FAZER SE MINHA CONTA FOR BLOQUEADA OU SUSPENSA ?":
                console.clear();
                console.log("Se for chorar, manda áudio! Nós não nos responsabilizamos por contas bloqueadas ou suspensas.");
                break;
            // Caso a dúvida seja sobre como verificar saldo e histórico de transações
            case "4":
            case " COMO POSSO VERIFICAR O SALDO E HISTÓRICO DE TRANSAÇÕES DA MINHA CONTA ?":
                console.clear();
                console.log(" \n                    1 - \u27B1 No menu banc\u00E1rio, selecione a op\u00E7\u00E3o 2. Entrar na Conta.\n                    2 - \u2714 Insira o ID da conta e a senha.\n                    3 - \u2714 No menu da conta, selecione a op\u00E7\u00E3o 1. \n                    Ver Extrato para visualizar o saldo e o hist\u00F3rico de transa\u00E7\u00F5es.");
                break;
            // Caso a dúvida seja sobre como realizar transferências
            case "5":
            case " COMO REALIZAR TRANSFERÊNCIAS ENTRE CONTAS OU PARA TERCEIROS PELO SITE ?":
                console.clear();
                console.log(" \n                    1 - \u27B1 No menu banc\u00E1rio, selecione a op\u00E7\u00E3o 2. Entrar na Conta.\n                    2 - \u2714 Insira o ID da conta e a senha.\n                    3 - \u2714 No menu da conta, selecione a op\u00E7\u00E3o 4. Transfer\u00EAncia.\n                    4 - \u2714 Insira o valor da transfer\u00EAncia.\n                    5 - \u2714 Insira o ID da conta de destino. (O sistema verificar\u00E1 se a conta de destino existe.)\n                    6 - \u2714 O sistema realizar\u00E1 a transfer\u00EAncia e atualizar\u00E1 o seu saldo e o hist\u00F3rico de transa\u00E7\u00F5es.");
                break;
            // Caso a dúvida seja sobre atividades fraudulentas
            case "6":
            case "O QUE FAZER SE EU SUSPEITAR DE ATIVIDADE FRAUDELENTA NA MINHA CONTA ?":
                console.clear();
                console.log("Ligue para a central de atendimento do banco pelo n\u00FAmero 4002-8922. \n                    Informe o problema e forne\u00E7a os detalhes necess\u00E1rios para que a equipe possa investigar a situa\u00E7\u00E3o.");
                break;
            // Caso o usuário queira sair do FAQ
            case "SAIR":
            case "sair":
            case "Sair":
                loop = false;
                console.log("Saindo do FAQ...");
                break;
            // Caso a entrada do usuário não corresponda a nenhuma opção válida
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}
// Função para exibir o menu inicial
function menuInicial() {
    var continuar = true;
    console.clear();
    while (continuar) {
        console.log(" \n        -----------------------------------\n        ------------ BANRISUL -------------\n        -----------------------------------\n        - 1. ACESSAR BANRISUL             -\n        - 2. INFORMA\u00C7\u00D5ES DO BANRISUL      -\n        - 3. AJUDA                        -\n        - 4. SAIR                         -\n        -----------------------------------");
        var opcao = Banco_1.rl.questionInt("Escolha uma opcao: ");
        switch (opcao) {
            case 1:
                console.log("\nEntrando No Banrisul...");
                menuBancario();
                break;
            case 2:
                console.clear();
                console.log("\n O Banrisul oferece serviços de contas correntes e poupanças.");
                break;
            case 3:
                console.log("\nEntrando em contato com o FAQ...");
                FAQ();
                break;
            case 4:
                console.log("\nSaindo do sistema...");
                continuar = false;
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.");
        }
    }
}
// Função para exibir o menu bancário
function menuBancario() {
    var continuar = true;
    console.clear();
    while (continuar) {
        console.log("        ------------------------------------\n        ----------- MENU BANRISUL ----------\n        ------------------------------------\n        - 1. CRIAR NOVA CONTA              -\n        - 2. ENTRAR NA CONTA               -\n        - 3. AJUDA                         -\n        - 4. VOLTAR AO MENU INICIAL        -\n        ------------------------------------");
        var opcao = Banco_1.rl.questionInt("Escolha uma opcao: ");
        switch (opcao) {
            case 1:
                var tipo = Banco_1.rl
                    .question("Tipo de conta (corrente/poupanca): ")
                    .toLowerCase();
                var novaConta = criarConta(tipo);
                contas.push(novaConta);
                console.clear();
                break;
            case 2:
                user = EntrarNaConta();
                if (user) {
                    menuConta(user);
                }
                break;
            case 3:
                console.log("Para mais informações, contate o suporte.");
                break;
            case 4:
                console.log("Voltando ao menu inicial...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
// Função para exibir o menu da conta
function menuConta(user) {
    var continuar = true;
    console.clear();
    var _loop_1 = function () {
        console.log("        ------------------------------------\n        ------------ MENU CONTA ------------\n        ------------------------------------\n        - 1. VER EXTRATO                   -\n        - 2. REALIZAR DEP\u00D3SITO             -\n        - 3. REALIZAR SAQUE                -\n        - 4. TRANSFER\u00CANCIA                 -\n        - 5. APLICAR JUROS (POUPAN\u00C7A)      -\n        - 6. SAIR DA CONTA                 -\n        ------------------------------------");
        var opcao = Banco_1.rl.questionInt("Escolha uma opcao: ");
        switch (opcao) {
            case 1:
                user.GerarExtrato();
                break;
            case 2:
                var valorDeposito = Banco_1.rl.questionInt("Valor do depósito: ");
                user.Depositar(valorDeposito);
                break;
            case 3:
                var valorSaque = Banco_1.rl.questionInt("Valor do saque: ");
                user.Sacar(valorSaque);
                break;
            case 4:
                var valorTransferencia = Banco_1.rl.questionInt("Valor da transferência: ");
                var idDestino_1 = Banco_1.rl.questionInt("ID da conta de destino: ");
                var contaDestino = contas.find(function (conta) { return conta.Id === idDestino_1; });
                if (contaDestino) {
                    user.Transferir(valorTransferencia, contaDestino);
                }
                else {
                    console.log("Conta de destino não encontrada.");
                }
                break;
            case 5:
                if (user instanceof Banco_2.ContaPoupanca) {
                    var taxa = Banco_1.rl.questionFloat("Taxa de juros (%): ");
                    user.AplicarJuros(taxa);
                }
                else {
                    console.log("Essa opção está disponível apenas para contas poupança.");
                }
                break;
            case 6:
                console.log("Saindo da conta...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    };
    while (continuar) {
        _loop_1();
    }
}
// Função para pressionar Enter e continuar
function pressionarEnterParaContinuar() {
    Banco_1.rl.question("Pressione Enter para continuar...");
}
console.clear();
pressionarEnterParaContinuar();
// Iniciar o sistema com o menu inicial
menuInicial();
