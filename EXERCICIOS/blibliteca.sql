CREATE TABLE IF NOT EXISTS Livros(
    idLivro INT PRIMARY KEY AUTO AUTO_INCREMENT,
    Nome VARCHAR(100),
    Autor VARCHAR(100),
    Idioma VARCHA(100),
    Gênero VARCHAR(100),  
    Descrição VARCHAR(100),
    Preço DECIMAL(10,2)
);

INSERT INTO Livros(Nome, Autor, Idioma, Gênero, Descrição, Preço)
VALUES ('A Sombra do Horizonte', 'Mariana Silva', 'Português', 'Fantasia, Aventura', 'Em um mundo onde o sol nunca se põe, um jovem órfão descobre um portal para uma dimensão mágica cheia de criaturas fantásticas e perigos inimagináveis.', 28.90),
    ('Whispers of the Soul', 'David Roberts', 'Inglês', 'Romance Contemporâneo', 'Dois estranhos se conectam através de cartas anônimas, revelando segredos profundos e desafiando o destino em uma história de amor que transcende o tempo.', 14.99),
    ('O Código da Serpente', 'Luciana Costa', 'Português', 'Mistério, Suspense', 'Um detetive cético investiga uma série de assassinatos enigmáticos que parecem estar ligados a uma antiga sociedade secreta e a uma profecia macabra.', 32.50),
    ('Silent Echoes', 'Michael Johnson', 'Inglês', 'Suspense Psicológico', 'Uma mulher atormentada por vozes do passado é levada a uma jornada de autodescoberta e redenção quando decide enfrentar seus próprios demônios interiores.', 19.95),
    ('As Rosas do Inverno', 'Carolina Santos', 'Português', 'Romance Histórico', 'Em meio à Revolução Francesa, uma aristocrata apaixonada por um revolucionário enfrenta o caos político e a luta pela liberdade e pelo amor verdadeiro.', 25.99),
    ('Beyond the Stars', 'Nathan White', 'Inglês', 'Ficção Científica', 'Em uma galáxia distante, uma nave espacial perdida busca um novo lar enquanto enfrenta ameaças alienígenas e dilemas éticos que desafiam a humanidade.', 22.50),
    ('A Maldição da Mansão Esquecida', 'Sofia Martins', 'Português', 'Suspense, Terror', 'Um grupo de amigos decide passar a noite em uma mansão abandonada, apenas para descobrir que ela é assombrada por uma presença maligna e vingativa.', 27.75),
    ('Echoes of Time', 'Gabriel Wright', 'Inglês', 'Ficção Histórica', 'Dois amantes separados pelo destino são reunidos através das eras por uma pintura misteriosa que guarda segredos de uma linhagem ancestral.', 24.99),
    ('O Guardião das Sombras', 'Rafael Oliveira', 'Português', 'Fantasia Urbana', 'Um jovem acidentalmente adquire poderes de um antigo guardião das sombras e é arrastado para uma guerra entre facções sobrenaturais que lutam pelo controle da cidade.', 30.00),
    ('The Art of Reflection', 'Emily Adams', 'Inglês', 'Não Ficção, Autobiografia', 'Uma artista compartilha suas reflexões sobre a vida, a arte e a jornada pessoal de autodescoberta que a levou a se tornar uma das mais renomadas pintoras contemporâneas.', 18.50);