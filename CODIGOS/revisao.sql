CREATE TABLE IF NOT EXISTS clientes(
	clientes_id INT PRIMARY KEY AUTO_INCREMENT, --CRIAÇÃO DA TABELA CLIENTES
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(100), 
    data_cadastro DATE
);

CREATE TABLE IF NOT EXISTS produtos(
	produtos_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),                                --CRIAÇÃO DA TABELA PRODUTOS
    descrição VARCHAR(100),
    preco DECIMAL(10, 2), 
    estoque INT
);

    CREATE TABLE IF NOT EXISTS pedidos(
	pedidos_id INT PRIMARY KEY AUTO_INCREMENT,
    clientes_id INT, 
    FOREIGN KEY (clientes_id) REFERENCES clientes (clientes_id) ,                             
    descrição VARCHAR(100),
    preco DECIMAL(10, 2), 
    estoque INT
);

    CREATE TABLE IF NOT EXISTS itens_pedido(
	itens_id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT, 
    produto_id INT,
    quantidade INT, 
    preco_unidade DECIMAL(10,2),
    FOREIGN KEY (pedido_id) REFERENCES produtos (pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produtos (produto_id)
);

INSERT INTO clientes(nome, email, telefone, data_cadastro)
VALUES ('João Silva', 'joao.silva@email.com', '(11) 98765-4321', '2024-08-22'),
	('Maria Oliveira', 'maria.oliveira@email.com', '(21) 99876-5432', '2024-08-21'),
	('Pedro Santos', 'pedro.santos@email.com', '(31) 97654-3210', '2024-08-20'),
	('Ana Costa', 'ana.costa@email.com', '(41) 96543-2109', '2024-08-19'),
	('Carlos Pereira', 'carlos.pereira@email.com', '(51) 95432-1098', '2024-08-18')

    INSERT INTO clientes(nome, email, telefone, data_cadastro)
VALUES ('João Silva', 'joao.silva@email.com', '(11) 98765-4321', 2024-08-22),
	('Maria Oliveira', 'maria.oliveira@email.com', '(21) 99876-5432', 2024-08-21),
	('Pedro Santos', 'pedro.santos@email.com', '(31) 97654-3210', 2024-08-20),
	('Ana Costa', 'ana.costa@email.com', '(41) 96543-2109', 2024-08-19),
	('Carlos Pereira', 'carlos.pereira@email.com', '(51) 95432-1098', 2024-08-18);

INSERT INTO produtos (nome, descrição, preco, estoque) VALUES
('Cadeira Ergônomica', 'Cadeira com ajuste de altura e apoio lombar', 299.99, 50),
('Mesa de Escritório', 'Mesa com acabamento em madeira e gavetas', 450.00, 20),
('Teclado Mecânico', 'Teclado mecânico com iluminação RGB', 120.75, 75),
('Monitor LED 24"', 'Monitor LED Full HD de 24 polegadas', 750.50, 30),
('Mouse Óptico', 'Mouse óptico com botão de rolagem e ajuste de DPI', 45.99, 100);

INSERT INTO pedidos (id_pedido, id_produto, quantidade, preco_unidade) VALUES
(1, 1, 2, 299.99),   -- Pedido 1, Produto 1, 2 unidades a 299,99 cada
(1, 3, 1, 120.75),   -- Pedido 1, Produto 3, 1 unidade a 120,75 cada
(2, 2, 1, 450.00),   -- Pedido 2, Produto 2, 1 unidade a 450,00 cada
(3, 4, 3, 750.50);   -- Pedido 3, Produto 4, 3 unidades a 750,50 cada

-- Inserindo dados na tabela pedidos
INSERT INTO pedidos (id_cliente, data_pedido, status) VALUES
(1, '2024-08-20', 'Em processamento'),  -- Pedido do cliente 1 em 20 de agosto de 2024
(2, '2024-08-21', 'Enviado'),           -- Pedido do cliente 2 em 21 de agosto de 2024
(3, '2024-08-22', 'Entregue'),          -- Pedido do cliente 3 em 22 de agosto de 2024
(4, '2024-08-23', 'Cancelado');         -- Pedido do cliente 4 em 23 de agosto de 2024

-- Inserindo dados na tabela itens_pedidos
INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unidade) VALUES
(1, 1, 2, 299.99),    -- Pedido 1: 2 unidades do produto 1 (Cadeira Ergônomica) a 299,99 cada
(1, 3, 1, 120.75),    -- Pedido 1: 1 unidade do produto 3 (Teclado Mecânico) a 120,75 cada
(2, 2, 1, 450.00),    -- Pedido 2: 1 unidade do produto 2 (Mesa de Escritório) a 450,00 cada
(3, 4, 3, 750.50);    -- Pedido 3: 3 unidades do produto 4 (Monitor LED 24") a 750,50 cada

SELECT *  
FROM clientes;  --seleciona todas as informações de clientes



SELECT *  
FROM produtos; --seleciona todas as informações de produtos



SELECT pedidos.*, clientes.nome
FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.cliente_id  --Selecione todos os registros da tabela pedidos e associe-os com o nome do cliente.



SELECT itens_pedido.*, pedidos.data_pedido, pedidos.status, produtos.nome, produtos.descricao, produtos.estoque, produtos.preco
FROM itens_pedido
INNER JOIN pedidos ON itens_pedido.pedido_id = pedidos.pedido_id
INNER JOIN produtos ON itens_pedido.produto_id = produtos.produto_id; --Selecione todos os registros da tabela itens_pedido e associe-os com os detalhes do pedido e do produto.



SELECT pedido_id, status, data_pedido
FROM  pedidos
WHERE cliente_id = 1;  --seleciona todos os pedidos feito pelo cliente


