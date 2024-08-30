CREATE IF NOT EXISTS clientes (     --se a tabela nao existir ela sera criada
    idCliente INT PRIMARY KEY AUTO_INCREMENT, --AUTO_INCREMENT coloca automaticamente a numeracação
    nome VARCHAR (100),
    telefone VARCHAR(100),
);

---------------------------------------------------------------------------------------------------------------------

ALTER TABLE clientes 
    ADD email VARCHAR (100);  -- esta adicionando algo para a tabela

---------------------------------------------------------------------------------------------------------------------

ALTER TABLE clientes
    MODIFY email TEXT;   -- Ira alterar uma tabela ja criada e modificar o tipo de uma coluna

---------------------------------------------------------------------------------------------------------------------

ALTER TABLE clientes
     CHANGE COLUMN email emailCliente VARCHAR(100) ;            --Muda o nome e tambem o tipo da coluna 

---------------------------------------------------------------------------------------------------------------------

ALTER TABLE clientes
    DROP COLUMN telefone;                   -- REMOVER UMA COLUNA

---------------------------------------------------------------------------------------------------------------------

ALTER TABLE clientes
    RENAME TO Clientes;                 --RENOMEIA O NOME DA CALUNA

---------------------------------------------------------------------------------------------------------------------

DROP TABLE clientes;             --DELETA A TABELA 

---------------------------------------------------------------------------------------------------------------------

INSERT INTO Clientes (idCliente, nome, emailCliente)          --INSERE DADOS EM UMA TABELA 
VALUES (1, 'João Silva', 'joao.silva@email.com');

---------------------------------------------------------------------------------------------------------------------

UPDATE Clientes
SET emailCliente = 'novo.email@gmail.com'               -- ATUALIZA DADOS DE UMA COLUNA
WHERE idCliente = 1; -- condição

---------------------------------------------------------------------------------------------------------------------

DELETE  FROM Clientes                         --DELETA DADOS EM UMA TABELA
WHERE idCliente = 1;

---------------------------------------------------------------------------------------------------------------------

SELECT idCliente, nome, emailCliente                 --CONSULTA SIMPLES- retorna todos os dados da tabela 
FROM Clientes;
WHERE idCliente = 2

---------------------------------------------------------------------------------------------------------------------

SELECT *                -- IRA MOSTRAR TODOS OS DADOS DA TABELA por conta do *    
FROM Clientes;

---------------------------------------------------------------------------------------------------------------------

SELECT emailCliente
FROM Clientes 
WHERE idCliente IN (1, 2, 3);                     -- IRA RETORNAR O VALOR NO LOCAL ESCOLHIDO

---------------------------------------------------------------------------------------------------------------------

SELECT idCliente, nome, emailCliente            -- CONSULTA COM ORDENAÇÃO- retorna dados ordenados (nomes)
FROM Clientes
ORDER BY nome ASC; -- OU DESC  (decrescente)

---------------------------------------------------------------------------------------------------------------------

SELECT nome           -- CONSULTA COM SIMPLES COM ORDENAÇÃO- retorna os dados com as informações iguais na propriedade dada
FROM Clientes
WHERE email = 'guarana@gmail.com'
ORDER BY idCliente DESC


---------------------------------------------------------------------------------------------------------------------

SELECT *
FROM Clientes                    --RETORNA AS INFORMAÇÕES COM LIMITE DADO 
LIMIT 3;

---------------------------------------------------------------------------------------------------------------------

SELECT DISTINCT email                           --RETORNA VALORES UNICOS
FROM Clientes; 

---------------------------------------------------------------------------------------------------------------------

CREATE TABLE Pedidos (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,              --CRIAÇÃO DE UMA TABELA 
    idCliente INT, 
    numeroPedido VARCHAR(50),
    valorTotal DECIMAL (10,2),
    dataPedido DATE,
    FOREIGN KEY (idCliente) REFERENCES Clientes (idCliente)            -- CHAVE ESTRANGEIRA 
)

---------------------------------------------------------------------------------------------------------------------

INSERT IGNORE INTO Pedidos (idCliente, numeroPedido, valorTotal, dataPedido)
VALUES  (1,  'PED-001', 150.00, '2024-07-12'),
        (1,  'PED-002', 250.00, '2024-07-12'),
        (1,  'PED-003', 180.00, '2024-07-13');

-----------------------------------------------------------------------------------------------------------------------

SELECT SUM(valorTotal) 
FROM Pedidos;                                  ----SOMA O VALOR TOTAL DOS PEDIDOS.

----------------------------------------------------------------------------------------------------------------------

SELECT SUM(valorTotal) AS Total          --RETORNA COM UM TITULO ESCOLHIDO DEPOIS DO AS
FROM Pedidos;                                 ----SOMA O VALOR TOTAL DOS PEDIDOS.

---------------------------------------------------------------------------------------------------------------------

SELECT AVG(valorTotal) AS ValorMedio
FROM Pedidos;                           --CALCULA O VALOR MÉDIO

---------------------------------------------------------------------------------------------------------------------

SELECT MAX(numeroPedido) AS PedidoComValorMaisAlto
FROM Pedidos;                                        --ENCONTRA O PEDIDO COM O NUMERO MAIS ALTO EM ORDEM ALFABÉTICA

----------------------------------------------------------------------------------------------------------------------

SELECT MIN(numeroPedido) AS PedidoComValorMaisBaixo
FROM Pedidos;                                         --    ENCONTRA O PEDIDO COM O NUMERO MAIS BAIXO EM ORDEM ALFABETICA

----------------------------------------------------------------------------------------------------------------------

SELECT Clientes.idCliente, Clientes.nome, Clientes.email, Pedidos.numeroPedido, Pedidos.valorTotal
FROM Clientes
INNER JOIN Pedidos ON Clientes.idCliente = Pedidos.idCliente;  --SELECIONA clientes e seus pedidos correspondentes usando 
                                                             --uma junção entre  a tabela Clientes e Pedidos. Neste exemplo,
                                                             --INNER JOIN combina registros de ambas as tabelas onde  existem 
                                                             --correspondencia
                                                             --entre os campos idCliente.

----------------------------------------------------------------------------------------------------------------------

SELECT Clientes.idCliente, Clientes.nome, Pedidos.numeroPedido --Seleciona todos os clientes, incluindo aqueles que não tem 
FROM Clientes                                                  --pedidos correspondentes. LEFT JOIN retorna todos os registros da 
LEFT JOIN Pedidos ON Clientes.idCliente = Pedidos.idCliente;    --tabela á esquerda(Clientes), e os registros correspondentes da
                                                                --tabela á direita (Pedidos). Se não houver corresponcia, são 
                                                                --retornados NULLs para os campos da tabela á direita.

----------------------------------------------------------------------------------------------------------------------

SELECT Clientes.idCliente, Clientes.nome, Pedidos.numeroPedido, Pedido.valorTotal
FROM Clientes
INNER JOIN Pedidos ON Clientes.idCliente = Pedidos.idCliente
WHERE Pedidos.valorTotal > 200;                        --Ira retornar as informações que tem maior valor que a condição solicitada.

----------------------------------------------------------------------------------------------------------------------

SELECT COUNT(*)
FROM Pedidos;                                                     --Conta o numero total de pedidos.

----------------------------------------------------------------------------------------------------------------------

SELECT Clientes.nome, COUNT(Pedidos.idPedido) 
AS totalPedidos
FROM Clientes
INNER JOIN Pedidos ON Clientes.idCliente = Pedidos.idCliente
GROUP BY
    Clientes.nome;


-------------------------------------------------------------------------------------------------------------

SELECT ----selecionar

AS --Renomear o nome do valor devolvido

FROM --de onde ele vai pegar a informação

INNER JOIN xxxx ON xxxxxx = xxxxx   --Linkar tabelas

GROUP BY --ele agrupa as informação 

SUM --- Soma 

MAX --valor maior

MIN -- menor valor

DROP TABLE --deletar tabela

NOT NULL --NAO PODE SER NULO

BETWEEN --da valores entre as exigencias inseridas