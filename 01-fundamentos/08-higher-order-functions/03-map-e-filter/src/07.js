const books = require('./books');

function authorWith3DotsOnName() {
  // Encontra na string tudo que inicia com uma letra em maiúsculo seguido de um ponto.
  const regex = new RegExp('([A-Z][.])', 'g');

  const foundBook = books.find((book) => {
    // Array com todas as letras seguidas de ponto encontradas no nome
    const foundInitials = book.author.name.match(regex);

    // Verifica se o nome do autor inicia com os valores do array
    return book.author.name.startsWith(foundInitials.join(' '));
  });

  return foundBook.name;
}

module.exports = authorWith3DotsOnName;
