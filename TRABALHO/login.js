var ask = require('readline-sync');
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.cadastro = function () { };
    Login.prototype.FAQ = function (duvida) {
        console.log("--------------------------------------------------- PERGUNTAS FREQUENTES ---------------------------------------------------\n    \n1. Como fa\u00E7o login na minha conta banc\u00E1ria online?\n2.Esqueci minha senha. Como posso recuper\u00E1-la?\n3.O que fazer se minha conta for bloqueada ou suspensa?\n4.Como posso verificar o saldo e hist\u00F3rico de transa\u00E7\u00F5es da minha conta?\n5.Como realizar transfer\u00EAncias entre contas ou para terceiros pelo site?\n6.O que fazer se eu suspeitar de atividade fraudulenta na minha conta?\n\nDigite SAIR para voltar\n");
        var loop = true;
        while (loop = true) {
            switch (duvida) {
                case 1 || 'Como faço login na minha conta bancária online?':
                    console.log('Acesse o menu interativo e crie a sua Conta Bancária.');
                    break;
                case 2 || 'Esqueci minha senha. Como posso recuperá-la?':
                    console.log('Sinto muito, nosso Banco é inicial...seu dinheiro agora é nosso! Obrigado');
                    break;
                case 3 || 'O que fazer se minha conta for bloqueada ou suspensa?':
                    console.log('Se for chorar, manda áudio! nós não nos responsabilizamos por contas bloqueadas ou suspensas.');
                    break;
                case 4 || 'Como posso verificar o saldo e histórico de transações da minha conta?':
                    console.log('Acesse o menu interativo e escolha a opção 6.');
                    break;
                case 5 || 'Como realizar transferências entre contas ou para terceiros pelo site?':
                    console.log('Acesse o menu interativo e selecione a opção 4.');
                    break;
                case 6 || 'O que fazer se eu suspeitar de atividade fraudulenta na minha conta?':
                    console.log('Ligue para a nossa central de atendimento pelo numero de 4002-8922, lá será consultado seus dados e resolveremos seu problema');
                    break;
                case "SAIR" || 'sair || Sair':
                    loop = false;
                    break;
            }
        }
    };
    Login.prototype.menu = function () {
        console.log("".concat(console.clear(), "                                       ---------------------------------------------------------------------\n\n                                                                        SEJA BEM VINDO\n\n                                                                              AO\n\n                                                                        BANCO BANRISUL\n\n                                           ---------------------------------------------------------------------\n                                           \n                                                                   FA\u00C7A SEU LOGIN - 1\n                                                                   NOVO CADASTRO - 2\n                                                                   \n                        FAQ - 3"));
    };
    return Login;
}());
var novoLogin = new Login();
var continua = true;
while (continua) {
    novoLogin.menu();
    var perguntaEscolha = ask.question('ESCOLHA UMA OPÇÃO: ');
    switch (perguntaEscolha) {
        case 1:
            novoLogin.login();
            break;
        case 2:
            novoLogin.cadastro();
            break;
        case 3:
            var duvida = ask.question('Qual sua dúvida?');
            novoLogin.FAQ(duvida);
            break;
        default:
            console.log('escolha uma opção válida!');
    }
}
