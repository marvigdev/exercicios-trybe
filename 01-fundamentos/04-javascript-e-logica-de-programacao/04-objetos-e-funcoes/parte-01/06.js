let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

const { nome, sobrenome, idade, livrosFavoritos } = leitor;
console.log(
  `O livro favorito de ${nome} ${sobrenome} se chama '${livrosFavoritos[0].titulo}'`
);
