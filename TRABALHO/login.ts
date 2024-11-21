let ask = require('readline-sync')

interface Login{
escolha()
login()
menu()
cadastro()
FAQ(duvida);
}


class Login implements Login{

    cadastro(){}
    FAQ(duvida){

    console.log(`--------------------------------------------------- PERGUNTAS FREQUENTES ---------------------------------------------------
    
1. Como faço login na minha conta bancária online?
2.Esqueci minha senha. Como posso recuperá-la?
3.O que fazer se minha conta for bloqueada ou suspensa?
4.Como posso verificar o saldo e histórico de transações da minha conta?
5.Como realizar transferências entre contas ou para terceiros pelo site?
6.O que fazer se eu suspeitar de atividade fraudulenta na minha conta?

Digite SAIR para voltar
`)

let loop = true

while(loop = true){

switch(duvida){

    case 1 || 'Como faço login na minha conta bancária online?':
    console.log('Acesse o menu interativo e crie a sua Conta Bancária.')
    break

    case 2 || 'Esqueci minha senha. Como posso recuperá-la?':
    console.log('Sinto muito, nosso Banco é inicial...seu dinheiro agora é nosso! Obrigado')
    break

    case 3 || 'O que fazer se minha conta for bloqueada ou suspensa?':
    console.log('Se for chorar, manda áudio! nós não nos responsabilizamos por contas bloqueadas ou suspensas.');
    break

    case 4 || 'Como posso verificar o saldo e histórico de transações da minha conta?':
    console.log('Acesse o menu interativo e escolha a opção 6.');
    break

    case 5 || 'Como realizar transferências entre contas ou para terceiros pelo site?':
    console.log('Acesse o menu interativo e selecione a opção 4.');
    break

    case 6 || 'O que fazer se eu suspeitar de atividade fraudulenta na minha conta?':
        console.log('Ligue para a nossa central de atendimento pelo numero de 4002-8922, lá será consultado seus dados e resolveremos seu problema')
    break
        
    case `SAIR` || 'sair || Sair':
    loop = false
    break
}
    
    
    
}
    }

    menu(){
        
        console.log(`${console.clear()}                                       ---------------------------------------------------------------------\n
                                                                        SEJA BEM VINDO\n
                                                                              AO\n
                                                                        BANCO BANRISUL\n
                                           ---------------------------------------------------------------------
                                           
                                                                   FAÇA SEU LOGIN - 1
                                                                   NOVO CADASTRO - 2
                                                                   
                        FAQ - 3`
                                                                   
                        )
    }
}
            
        

    

    let novoLogin = new Login()
    
    let continua = true

    while(continua){

        novoLogin.menu()

        let perguntaEscolha = ask.question('ESCOLHA UMA OPÇÃO: ')

        switch(perguntaEscolha){

            case 1:
                novoLogin.login()
            break
            case 2: 
                novoLogin.cadastro()
            break
            case 3: 
            let duvida = ask.question('Qual sua dúvida?')
                novoLogin.FAQ(duvida)
            break
            default:
            console.log('escolha uma opção válida!')
        }
    }

