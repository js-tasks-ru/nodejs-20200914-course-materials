const books = require('./../db/data.json');

module.exports = {
  getAll(ctx, next) {
    ctx.body = books;
  },

  getById(ctx, next) {
    const {id} = ctx.params

    const book = books.find(book => book.id === parseInt(id, 10));

    if (!book) {
      ctx.throw(404);
    }

    ctx.body = book;
  },

  createBook(ctx, next) {
    const {author, title} = ctx.request.body
    const book = {id: books.length, author, title};
    books.push(book);

    ctx.body = book;
    ctx.status = 201;
  }
}
