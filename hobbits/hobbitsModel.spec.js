const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

beforeEach(async () => {
  await db('hobbits').truncate();
});

describe('Hobbits.insert', () => {
  it('is able to add a hobbit to the db!', async () => {
    // sanity: checking that trucate works, essentially
    let hobbits = await Hobbits.getAll();
    expect(hobbits).toHaveLength(0);

    // set up
    await Hobbits.insert({ name: 'Aragorn' });
    await Hobbits.insert({ name: 'Sauron' });
    hobbits = await Hobbits.getAll();

    // assertion
    expect(hobbits).toHaveLength(2);
  });
});



