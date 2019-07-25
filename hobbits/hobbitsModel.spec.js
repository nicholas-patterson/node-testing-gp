const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

beforeEach(async () => {
  await db('hobbits').truncate();
});

it('is able to add a hobbit to the db!', () => {
  // we write assertions, like
  // foo(5) returns exactly 10 <--- assertions
});
