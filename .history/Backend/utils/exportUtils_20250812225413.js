const { Parser } = require('json2csv');

function transactionsToCSV(transactions) {
  const fields = ['id','type','status','borrowedAt','returnedAt','User.name','Book.title'];
  const opts = { fields };
  const parser = new Parser(opts);
  // map nested to flat
  const rows = transactions.map(t => ({
    id: t.id,
    type: t.type,
    status: t.status,
    borrowedAt: t.borrowedAt,
    returnedAt: t.returnedAt,
    'User.name': t.User?.name,
    'Book.title': t.Book?.title
  }));
  return parser.parse(rows);
}

module.exports = { transactionsToCSV };
