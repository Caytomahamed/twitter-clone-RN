/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('hashtags').del();
  await knex('hashtags').insert([
    { id: 1, text: 'hiking' },
    { id: 2, text: 'nature' },
    { id: 3, text: 'webdevelopment' },
    { id: 4, text: 'javascript' },
    { id: 5, text: 'techconference' },
    { id: 6, text: 'networking' },
    { id: 7, text: 'puppylove' },
    { id: 8, text: 'dogsofinstagram' },
  ]);
};
