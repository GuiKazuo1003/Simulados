import { Component } from '@angular/core';

interface Pergunta {
  id: number;
  texto: string;
  alternativas: string[];
  resposta: number;
  selectedOption?: number;
}

interface InformacaoAntesDasPerguntas  {
  id: number;
  texto: string;
}

@Component({
  selector: 'app-simulado-bd',
  templateUrl: './simulado-bd.component.html',
  styleUrls: ['./simulado-bd.component.css']
})
export class SimuladoBDComponent {
  perguntas: Pergunta[] = [
    {
      id: 1,
      texto: 'O que significa NoSQL?',
      alternativas: ['Notable SQL.',
      'New SQL.',
      'Non-Structured Query Language.',
      'Not Only SQL.'],
      resposta: 3 // D - 4
    },
    {
      id: 2,
      texto: 'O MongoDB é um exemplo de qual tipo de banco de dados?',
      alternativas: ['Banco de Dados Relacional.',
      'Banco de Dados de Gráfico.',
      'Banco de Dados NoSQL.',
      'Banco de Dados em Memória.'],
      resposta: 2 // C - 3
    },
    {
      id: 3,
      texto: 'Qual das seguintes afirmações sobre o MongoDB é verdadeira?',
      alternativas: ['Utiliza esquemas rígidos baseados em tabelas.',
      'Armazena dados em tabelas altamente normalizadas.',
      ' Usa documentos JSON/BSON para armazenar dados.',
      'Suporta apenas consultas SQL tradicionais.'],
      resposta: 2 // C - 3
    },
    {
      id: 4,
      texto: 'Em um contexto de banco de dados NoSQL, o que é um "documento"?',
      alternativas: ['Uma planilha de dados.',
      'Um registro em uma tabela.',
      'Um objeto que armazena dados em formato chave-valor.',
      'Uma estrutura que armazena dados em formato JSON/BSON.'],
      resposta: 3 // D - 4
    },
    {
      id: 5,
      texto: 'Qual é uma das principais vantagens do MongoDB em relação aos bancos de dados relacionais?',
      alternativas: ['Suporte a linguagem SQL padrão.',
      'Esquemas flexíveis e dinâmicos.',
      'Restrição de escalabilidade horizontal.',
      ' Ausência de suporte a índices.'],
      resposta: 1 // B - 2
    },
    {
      id: 6,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      'saveOne'],
      resposta: 3 // D - 4
      //resposta: 2 C - 3
      //resposta: 1 B - 2
      //resposta 0 A - 1
    },
    {
      id: 7,
      texto: 'Qual método é usado para inserir vários documentos em uma coleção de uma vez?',
      alternativas: ['addMany',
      'insertMany',
      'createMany',
      'saveMany'],
      resposta: 1 // B - 2
    },
    {
      id: 8,
      texto: 'Qual método é usado para atualizar um único documento em uma coleção?',
      alternativas: ['modifyOne',
      'updateOne',
      'editOne',
      'changeOne'],
      resposta: 1 // B - 2
    },
    {
      id: 9,
      texto: 'Qual método é usado para atualizar vários documentos em uma coleção?',
      alternativas: ['modifyMany',
      'updateMany',
      'editMany',
      'changeMany'],
      resposta: 1 // B - 2
    },
    {
      id: 10,
      texto: 'Qual método é usado para encontrar documentos que correspondam a um critério específico em uma coleção?',
      alternativas: ['search',
      'query',
      'match',
      'find'],
      resposta: 3 // D - 4
    },
    {
      id: 11,
      texto: 'Qual método é usado para remover um único documento de uma coleção?',
      alternativas: ['removeOne',
      'deleteOne',
      'discardOne',
      'eraseOne'],
      resposta: 1 // B - 2
    },
    {
      id: 12,
      texto: 'Qual método é usado para remover vários documentos de uma coleção?',
      alternativas: ['removeMany',
      'deleteMany',
      'discardMany',
      'eraseMany'],
      resposta: 1 // B - 2
    },
    {
      id: 13,
      texto: 'O que o método findOne() faz em uma coleção MongoDB?',
      alternativas: ['Insere um novo documento na coleção.',
      'Atualiza um único documento na coleção',
      'Encontra o primeiro documento que corresponde a um critério',
      'Remove o primeiro documento que corresponde a um critério'],
      resposta: 2 // C - 3
    },
    {
      id: 14,
      texto: ') Qual método é usado para limitar o número de documentos retornados por uma consulta?',
      alternativas: ['limit',
      'count',
      'size',
      'find'],
      resposta: 0 // A - 1
    },
    {
      id: 15,
      texto: 'Como você pode ordenar os resultados de uma consulta em ordem crescente no MongoDB?',
      alternativas: ['sort(1)',
      'sort(ascending)',
      'sort(ascending: true)',
      'sort({campo: 1})'],
      resposta: 3 // D - 4
    },
    {
      id: 16,
      texto: 'Qual dos seguintes tipos de dados é frequentemente usado para representar dados no MongoDB?',
      alternativas: ['XML',
      'CSV',
      'JSON/BSON',
      'YAML'],
      resposta: 2 // C - 3
    },
    {
      id: 17,
      texto: ' O que significa "BSON" em relação ao MongoDB?',
      alternativas: ['Binary Structured Object Notation',
      'Basic Structured Object Notation',
      'Binary Serialized Object Notation',
      'Binary JSON'],
      resposta: 3 // D - 4
    },
    {
      id: 18,
      texto: 'Qual é a diferença entre deleteOne e deleteMany no MongoDB?',
      alternativas: ['deleteOne remove um único documento, enquanto deleteMany remove todos os documentos.',
      'deleteOne remove todos os documentos, enquanto deleteMany remove um único documento.',
      'Ambos os métodos são equivalentes e removem um único documento.',
      'Ambos os métodos são equivalentes e removem todos os documentos.'],
      resposta: 0 // A - 1
    },
    {
      id: 19,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 20,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 21,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 22,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 23,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 24,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 25,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 26,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 27,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 28,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 29,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 30,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 31,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 32,
      texto: 'Qual método é usado para inserir um único documento em uma coleção',
      alternativas: ['addOne',
      'insertOne',
      'createOne',
      ' saveOne'],
      resposta: 3 // D - 4
    },
    {
      id: 33,
      texto: 'Qual é o objetivo do arquivo "package.json" em um projeto NodeJS?',
      alternativas: ['Armazenar imagens e arquivos estáticos.',
      'Definir as configurações do servidor MongoDB.',
      'Gerenciar as dependências do projeto e scripts de inicialização.',
      'Configurar as variáveis de ambiente do sistema.'],
      resposta: 2 // C - 3
    },
    {
      id: 34,
      texto: 'O que é uma API RESTful?',
      alternativas: ['Um banco de dados relacional.',
      'Um conjunto de diretrizes para o desenvolvimento de APIs em Ruby.',
      'Um estilo arquitetural para projetar redes de computadores.',
      'Um conjunto de princípios de design de API baseados em HTTP.'],
      resposta: 3 // D - 4
    },
    {
      id: 35,
      texto: ' O que é uma rota em um aplicativo Node.js?',
      alternativas: ['Um caminho físico em um servidor',
      'Um local onde os arquivos de imagem são armazenados.',
      'Um endpoint definido para atender a uma solicitação HTTP específica.',
      'Uma função JavaScript incorporada no servidor.'],
      resposta: 2 // C - 3
    },
    {
      id: 36,
      texto: ' Qual é a principal diferença entre uma base de dados SQL e uma base de dados NoSQL, como o MongoDB?',
      alternativas: ['SQL é mais adequado para dados não estruturados.',
      'NoSQL usa consultas SQL para acessar dados.',
      'SQL é baseado em tabelas e relacionamentos, enquanto NoSQL é flexível e não requer um esquema fixo.',
      'NoSQL é mais lento em termos de desempenho do que SQL.'],
      resposta: 2 // C - 3
    },
    {
      id: 37,
      texto: 'Qual pacote do Node.js é amplamente utilizado para criar aplicativos web e APIs RESTful?',
      alternativas: ['mongodb',
      'express',
      'rest',
      'dotenv'],
      resposta: 1 // B - 2
    },
    {
      id: 38,
      texto: 'Qual é a principal finalidade do pacote "mongodb" em um aplicativo Node.js?',
      alternativas: ['Gerenciar variáveis de ambiente no MongoDB.',
      'Implementar autenticação de usuário no MongoDB.',
      ' Facilitar a conexão e interação com um banco de dados MongoDB.',
      ' Realizar validações de entrada de dados no MongoDB.'],
      resposta: 2 // C - 3
    },
    {
      id: 39,
      texto: 'O que o pacote "dotenv" é comumente usado para fazer em um projeto Node.js?',
      alternativas: ['Manipular solicitações HTTP.',
      'Configurar variáveis de ambiente a partir de um arquivo ".env"',
      'Executar tarefas de validação de dados.',
      'Gerenciar dependências do projeto.'],
      resposta: 1 // B - 2
    },
    {
      id: 40,
      texto: 'Qual é o principal propósito do "nodemon" em um ambiente de desenvolvimento Node.js?',
      alternativas: ['Realizar testes automatizados.',
      'Monitorar alterações no código-fonte e reiniciar o servidor automaticamente.',
      'Controlar a instalação de pacotes',
      'Gerenciar rotas em uma aplicação Express'],
      resposta: 1 // B - 2
    },
    {
      id: 41,
      texto: ' Qual é a principal função do pacote "express-validator" em um aplicativo Express.js?',
      alternativas: ['Criar um servidor Express.',
      'Realizar validação de entrada de dados, como validação de formulários.',
      'Realizar autenticação de usuário.',
      'Implementar autenticação JWT'],
      resposta: 1 // B - 2
    },
    {
      id: 42,
      texto: ' O que significa a arquitetura REST no desenvolvimento de APIs web?',
      alternativas: ['Representational State Transfer, um estilo arquitetural que define como os recursos devem ser acessados e manipulados.',
      'Representational Security Test, uma técnica de segurança para proteger APIs.',
      'Representational Database Structure, um modelo de banco de dados.',
      'Representational Object-Oriented Design, um padrão de projeto em programação orientada a objetos.'],
      resposta: 0 // A - 1
    },
    {
      id: 43,
      texto: ' Quais são os principais métodos HTTP usados em uma arquitetura REST para realizar operações em recursos?',
      alternativas: ['GET, PUT, POST, DELETE',
      'CREATE, UPDATE, DELETE, SELECT',
      'INSERT, UPDATE, REMOVE, QUERY',
      'REQUEST, SEND, RECEIVE, DELETE'],
      resposta: 0 // A - 1
    },
    {
      id: 44,
      texto: 'O que o comando "npm i" faz em um projeto Node.js?',
      alternativas: ['Inicializa um novo projeto.',
      'Instala o Node.js no sistema.',
      'Instala as dependências do projeto listadas no arquivo "package.json".',
      ' Remove todas as dependências do projeto.'],
      resposta: 2 // C - 3
    },
    {
      id: 45,
      texto: ' Considerando o projeto desenvolvido em aula, o que o comando "import rotasPrestadores from ´./routes/prestador.js´" está fazendo no código? (foi utilizado crases no lugar das aspas simples)',
      alternativas: ['Importando um arquivo JSON.',
      'Importando um módulo chamado "rotasPrestadores" de um arquivo chamado "prestador.js".',
      'Exportando um módulo chamado "rotasPrestadores" para um arquivo chamado "prestador.js".',
      'Definindo uma variável chamada "rotasPrestadores".'],
      resposta: 1 // B - 2
    },
    {
      id: 46,
      texto: 'Dentro do projeto, o que acontece quando uma solicitação é feita para uma rota que não corresponde a nenhuma rota definida no código?',
      alternativas: ['A solicitação é processada normalmente.',
      'O servidor retorna um erro 500.',
      'O servidor retorna um erro 404 com uma mensagem de rota não encontrada.',
      'O servidor redireciona a solicitação para a rota raiz ("/").'],
      resposta: 2 // C - 3
    },
    {
      id: 47,
      texto: ' Dentro do projeto, qual é o propósito do trecho de código "app.use(`/`,express.static(`public`))"? (foi utilizado crases no lugar das aspas simples)',
      alternativas: ['Definir uma rota raiz para o aplicativo.',
      'Servir arquivos estáticos localizados na pasta "public".',
      'Redirecionar todas as solicitações para a página inicial.',
      'Criar uma nova instância do Express.js'],
      resposta: 1 // B - 2
    },
    {
      id: 48,
      texto: ' Como você instala o Express.js em um projeto Node.js usando o npm?',
      alternativas: ['npm i express.js',
      'npm add express',
      'createOne',
      'npm i express'],
      resposta: 3 // D - 4 
    },
    {
      id: 49,
      texto: 'Para o que é usado o middleware express.json() no Express?',
      alternativas: ['Definir rotas.',
      'Servir arquivos estáticos.',
      'Fazer o parse de dados JSON em solicitações HTTP.',
      'Criar um servidor HTTP.'],
      resposta: 2 // C - 3
    },
    {
      id: 50,
      texto: 'Qual método HTTP é usado para atualizar um recurso existente no Express.js?',
      alternativas: ['POST',
      'PUT',
      'GET',
      'DELETE'],
      resposta: 1 // B - 2
    },
    {
      id: 51,
      texto: 'Qual método HTTP é usado para atualizar um recurso existente no Express.js?',
      alternativas: ['POST',
      'PUT',
      'GET',
      'DELETE'],
      resposta: 1 // B - 2
    }
  ];
  

  exibirRespostas = false;


// método que exibe ou oculta as respostas
alternarRespostas(): void {
  this.exibirRespostas = !this.exibirRespostas;
}


  perguntasAleatorias: Pergunta[] = [];
  perguntasExcluidas: number[] = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 51];
  perguntasParaResponderNovamente: Pergunta[] = [];

  exibirImagem: boolean = false;


  mostrarPerguntasExcluidas(): void {
    // Filtrar as perguntas com base nos IDs das perguntas excluídas
    this.exibirImagem = true;
    this.perguntasParaResponderNovamente = this.perguntas.filter((pergunta) =>
      this.perguntasExcluidas.includes(pergunta.id)
    );
    
  }

  ngOnInit(): void {
    this.perguntasAleatorias = this.perguntas.sort(() => 0.5 - Math.random()).slice(0, 12);
  }
  gerarPerguntas(): void {
      // Filtrar perguntas excluídas antes do sorteio aleatório
    const perguntasDisponiveis = this.perguntas.filter((pergunta) => !this.perguntasExcluidas.includes(pergunta.id));

      // Verifique se há perguntas suficientes disponíveis
    if (perguntasDisponiveis.length >= 12) {
      this.perguntasAleatorias = perguntasDisponiveis.sort(() => 0.5 - Math.random()).slice(0, 12);
    } else {
      // Não há perguntas suficientes após a exclusão, você pode lidar com isso de acordo com sua lógica
      console.log('Não há perguntas suficientes disponíveis após a exclusão.');
    }
  }
  gerarPerguntas1(): void {
    this.perguntasAleatorias = this.perguntas.sort(() => 0.5 - Math.random()).slice(0, 1);
  }
  verificarRespostas(): void {
    let acertos = 0;
    for (const pergunta of this.perguntasAleatorias) {
      if (typeof pergunta.selectedOption === 'number' && pergunta.resposta === pergunta.selectedOption) {
        acertos++;
      }
    }
    alert(`Você acertou ${acertos} de ${this.perguntasAleatorias.length} perguntas.`);
  }

}

