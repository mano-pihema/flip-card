export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    { id: 1, word: 'ika', answer: 'fish' },
    { id: 2, word: 'waka', answer: 'boat' },
    { id: 3, word: 'toru', answer: '3' },
  ])
}
