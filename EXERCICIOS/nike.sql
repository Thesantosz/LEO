CREATE TABLE IF NOT EXISTS produtos(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nome  VARCHAR(100) NOT NULL,
    categoria  VARCHAR(50) NOT NULL,
    cor VARCHAR(100),
    tamanhos  VARCHAR(2),
    preço  DECIMAL(10,2) NOT NULL
    )

    ALTER TABLE produtos
 ADD descrição VARCHAR(1000),
 ADD avaliação VARCHAR(5)
    
    
 INSERT INTO produtos(nome, categoria, cor, tamanhos, preço, descrição, avaliação)
VALUES 	('Nike Air Max 270', 'corrida', 'Preto/Vermelho', '38, 39, 40, 42',	549.90,	'Tênis de corrida com  amortecimento Air Max', 4.7);

INSERT INTO produtos (nome, categoria, cor, tamanhos, preço, descrição, avaliação)
VALUES ('Nike React Infinity Run 2', 'Corrida',	'Azul',	'36, 37, 38, 39, 40',	599.90,	'Tênis de corrida com tecnologia React',	4.8),
       ('Nike Air Force 1',	'Casual',	'Branco',	'38, 39, 40, 41, 42',	449.90,	'Tênis casual icônico com sola robusta',	4.5),
       ('Nike Free RN 5.0',	'Corrida',	'Cinza',	'37, 38, 39, 40, 41',	399.90,	'Tênis de corrida leve e flexível',	4.4),
       ( 'Nike Joyride Run Flyknit', 'Casual', 'Rosa', '36, 37, 38, 39, 40', 699.90, 'Tênis com tecnologia Joyride para amortecimento', 4.6 ),
('Nike Air Zoom Pegasus 38', 'Corrida', 'Azul Claro', '37, 38, 39, 40, 41', 549.90, 'Tênis de corrida versátil e confortável', 4.9 ),
( 'Nike Air Zoom Structure 23', 'Corrida', 'Preto/Laranja', '38, 39, 40, 41, 42', 479.90, 'Tênis de corrida com suporte e estabilidade', 4.3 ),
( 'Nike Air Max 97', 'Casual', 'Prata', '37, 38, 39, 40, 41', 599.90, 'Tênis com design futurista e amortecimento Air Max', 4.8 ),
( 'Nike Blazer Mid 77 Vintage', 'Casual', 'Verde', '38, 39, 40, 41, 42', 349.90, 'Tênis casual com estilo retrô', 4.2),
( 'Nike Revolution 5', 'Corrida', 'Preto', '36, 37, 38, 39, 40', 299.90, 'Tênis versátil para corrida e atividades diárias', 4.0 ),
( 'Nike Air Zoom Freak 3', 'Basquete', 'Vermelho', '37, 38, 39, 40, 41', 649.90, 'Tênis de basquete com suporte e tração', 4.5 );

ALTER TABLE produtos
ADD semEstoque  VARCHAR(1)

UPDATE produtos
SET semEstoque = 'F'           

UPDATE produtos
SET semEstoque = 'V'              
WHERE idProduto = 2



