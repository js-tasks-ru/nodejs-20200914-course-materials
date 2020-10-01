const Koa = require('koa');

const bootstrap = require('./middleware');

/**
 * Return a list of books
 * GET /books
 *
 * Return a book by ID
 * GET /books/:id
 *
 * Create a new book
 * POST /books
 *
 * Update a book
 * PUT /books/:id
 *
 * Delete a book
 * DELETE /books/:id
 */

const app = new Koa();

bootstrap(app);

app.listen(3000);
