import { Component } from '@angular/core';

interface Pergunta {
  id: number;
  texto: string;
  alternativas: string[];
  resposta: number;
  selectedOption?: number;
}

@Component({
  selector: 'app-extra-simulado-bd',
  templateUrl: './extra-simulado-bd.component.html',
  styleUrls: ['./extra-simulado-bd.component.css']
})
export class ExtraSimuladoBDComponent {
    perguntas: Pergunta[] = [
      {
        id: 1,
        texto: ' Qual comando você usaria para encontrar todos os produtos na categoria "Roupas"?',
        alternativas: ['db.produtos.find({ categoria: "Roupas" })',
        'db.produtos.find({ categoria: "Roupas" }).findAll()',
        'db.produtos.find({ categoria: "Roupas" }).get()',
        'db.produtos.select({ categoria: "Roupas" })'],
        resposta: 0 // A - 1
      },
      {
        id: 2,
        texto: 'Como você ordenaria os produtos por preço em ordem decrescente?',
        alternativas: ['db.produtos.find().sort({ preco: -1 })',
        'db.produtos.find().sort({ preco: 1 })',
        'db.produtos.find().orderBy({ preco: "desc" })',
        'db.produtos.find().sort({ order: "desc", field: "preco" })'],
        resposta: 1 // B - 2
      },
      {
        id: 3,
        texto: 'Qual comando retornaria apenas os 2 primeiros produtos na coleção?',
        alternativas: ['db.produtos.find().first(2)',
        'db.produtos.find().first(2)',
        'db.produtos.find().top(2)',
        'db.produtos.find().limit(2)'],
        resposta: 3 // D - 4
      },
      {
        id: 4,
        texto: 'Como você pula os 3 primeiros produtos e retorna os restantes?',
        alternativas: ['db.produtos.find().jump(3) ',
        'db.produtos.find().ignore(3)',
        'db.produtos.find().skip(3)',
        'db.produtos.find().offset(3)'],
        resposta: 2 // C - 3 / era a A no pdf
      },
      {
        id: 5,
        texto: 'Qual comando você usaria para contar quantos produtos têm preço maior que 50?',
        alternativas: ['db.produtos.find({ preco: { $gt: 50 } }).count()',
        'db.produtos.find({ preco: { $gt: 50 } }).length()',
        'db.produtos.find({ preco: { $gt: 50 } }).size()',
        'db.produtos.find({ preco: { $gt: 50 } }).total()'],
        resposta: 0 // A - 1
      },
      {
        id: 6,
        texto: 'Quais produtos têm preço entre 20 e 50, ordenados por preço em ordem crescente?',
        alternativas: ['db.produtos.find({ preco: { $gt: 20, $lt: 50 } }).sort({ preco: 1 })',
        'db.produtos.find({ preco: { $gte: 20, $lte: 50 } }).sort({ preco: -1 })',
        'db.produtos.find({ preco: { $gte: 20, $lte: 50 } }).sort({ preco: 1 })',
        'db.produtos.find({ preco: { $gt: 20, $lt: 50 } }).sort({ preco: -1 })'],
        resposta: 2 // C - 3
      },
      {
        id: 7,
        texto: 'Qual é a saída do comando db.produtos.find().skip(1).limit(2)?',
        alternativas: ['O segundo e o terceiro produtos.',
        'O primeiro e o segundo produtos.',
        'O primeiro e o terceiro produtos.',
        'O terceiro e o quarto produtos.'],
        resposta: 0 // A - 1
      },
      {
        id: 8,
        texto: 'Como você encontraria o número total de documentos na coleção "produtos"?',
        alternativas: ['db.produtos.find().total() ',
        'db.produtos.find().size()',
        'db.produtos.find().length()',
        'db.produtos.find().count()'],
        resposta: 3 // D - 4 / era a A no pdf
      },
      {
        id: 9,
        texto: 'Quais produtos pertencem à categoria "Calçados" e têm preço maior que 50, ordenados por nome em ordem alfabética?',
        alternativas: [' db.produtos.find({ categoria: "Calçados", preco: { $gt: 50 } }).sort({ nome: 1})',
        'db.produtos.find({ categoria: "Calçados", preco: { $gt: 50 } }).sort({ nome: 1})',
        'db.produtos.find({ categoria: "Calçados", preco: { $gte: 50 } }).sort({ nome: 1})',
        'db.produtos.find({ categoria: "Calçados", preco: { $gte: 50 } }).sort({ nome: -1})'],
        resposta: 0 // A - 1
      },
      {
        id: 10,
        texto: 'Como você retornaria apenas os produtos da coleção sem aplicar nenhum filtro?',
        alternativas: ['db.produtos.find({})',
        'db.produtos.find().all()',
        'db.produtos.find().filter()',
        'db.produtos.find().retrieve()'],
        resposta: 0 // A - 1
      },
      {
        id: 11,
        texto: 'Quais produtos têm preço menor que 30 e pertencem à categoria "Roupas"?',
        alternativas: ['db.produtos.find({ preco: { $lt: 30 }, categoria: "Roupas" })',
        'db.produtos.find({ preco: { $lt: 30, categoria: "Roupas" } })',
        'db.produtos.find({ preco: { $lte: 30 }, categoria: "Roupas" })',
        'db.produtos.find({ preco: { $lte: 30, categoria: "Roupas" } })'],
        resposta: 0 // A - 1
      },
      {
        id: 12,
        texto: 'Como você contaria quantos produtos têm preço menor que 50 e pertencem à categoria "Acessórios"?',
        alternativas: ['db.produtos.find({ preco: { $lt: 50, categoria: "Acessórios" } }).length()',
        'db.produtos.find({ preco: { $lt: 50 }, categoria: "Acessórios" }).count()',
        'db.produtos.find({ preco: { $gt: 50 }, categoria: "Acessórios" }).size()',
        'db.produtos.find({ preco: { $gt: 50, categoria: "Acessórios" } }).countl()'],
        resposta: 1 // B - 2 / Trocada era a A no pdf
      },
      {
        id: 13,
        texto: ')Qual é a saída do comando: db.produtos.find({},{_id:0,nome:1}).skip(2).limit(2).sort({ nome: 1 })',
        alternativas: ['[{ "nome": "Shorts" }, { "nome": "Boné" }]',
        '[{ "nome": "Tênis" }, { "nome": "Shorts" }]',
        '[{ "nome": "Sapato" }, { "nome": "Shorts" }]',
        '[{ "nome": "Camiseta" }, { "nome": "Tênis" }]'],
        resposta: 2 // C - 3 / Trocada era a A no pdf
      },
      {
        id: 14,
        texto: 'Qual é a saída do comando: db.produtos.find({},{_id:0,preco:1}).skip(1).limit(3).sort({ preco: -1 })',
        alternativas: ['[{ "preco": 20 }, { "preco": 30 }, { "preco": 80 }]',
        '[{ "preco": 80 }, { "preco": 20 }, { "preco": 30 }]',
        '[{ "preco": 30 }, { "preco": 80 }, { "preco": 20 }]',
        '[{ "preco": 80 }, { "preco": 30 }, { "preco": 20 }]'],
        resposta: 3 // D - 4 / Trocada era a A no pdf
      },
      {
        id: 15,
        texto: 'Como você retornaria a quantidade de produtos com preço maior que 50 e limitaria o resultado a 2 documentos?',
        alternativas: ['db.produtos.find({ preco: { $gt: 50 } }).limit(2).size()',
        'db.produtos.find({ preco: { $gt: 50 } }).limit(2).count()',
        'db.produtos.find({ preco: { $gt: 50 } }).count().limit(2)',
        'db.produtos.find({ preco: { $gt: 50 } }).size().limit(2)'],
        resposta: 1 // B - 2 / Trocada era a A no pdf
      }
    ];

    dados = [[
      {
      "_id": 1,
      "nome": "Camiseta",
      "preco": 20,
      "categoria": "Roupas"
      },
      {
      "_id": 2,
      "nome": "Tênis",
      "preco": 80,
      "categoria": "Calçados"
      },
      {
      "_id": 3,
      "nome": "Shorts",
      "preco": 30,
      "categoria": "Roupas"
      },
      {
      "_id": 4,
      "nome": "Boné",
      "preco": 15,
      "categoria": "Acessórios"
      },
      {
      "_id": 5,
      "nome": "Sapato",
      "preco": 100,
      "categoria": "Calçados"
      }
      ]
      ]

    exibirRespostas = false;

    alternarRespostas(): void {
      this.exibirRespostas = !this.exibirRespostas;
    }

    verificarRespostas(): void {
      let acertos = 0;
      for (const pergunta of this.perguntas) {
        if (typeof pergunta.selectedOption === 'number' && pergunta.resposta === pergunta.selectedOption) {
          acertos++;
        }
      }
      alert(`Você acertou ${acertos} de ${this.perguntas.length} perguntas.`);
    }
}
