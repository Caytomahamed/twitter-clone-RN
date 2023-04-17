/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('retweets').del();
  await knex('retweets').insert([
    { id: 1, userId: 2, tweetId: 1 },
    { id: 2, userId: 1, tweetId: 2 },
    { id: 3, userId: 2, tweetId: 4 },
  ]);
};
