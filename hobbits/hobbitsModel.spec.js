const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

beforeEach(async () => {
  await db('hobbits').truncate();
});

describe('Hobbits.insert', () => {
  it('is able to add hobbits to the db!', async () => {
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

  it('is able to insert the correct hobbits', async () => {
    // sanity: checking that trucate works, essentially
    let hobbits = await Hobbits.getAll();
    expect(hobbits).toHaveLength(0);

    // set up
    await Hobbits.insert({ name: 'Aragorn' });
    await Hobbits.insert({ name: 'Sauron' });
    hobbits = await Hobbits.getAll();

    expect(hobbits[0].name).toBe('Aragorn');
    expect(hobbits[1].name).toBe('Sauron');
  });

  it('returns the newly inserted hobbit', async () => {
    const hobbit = await Hobbits.insert({ name: 'Aragorn' });
    expect(hobbit.name).toBe('Aragorn');
  });
});



