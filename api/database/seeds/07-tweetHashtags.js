/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tweetHashtags').del();
  await knex('tweetHashtags').insert([
    { tweetId: 1, hashtagId: 1 },
    { tweetId: 1, hashtagId: 2 },
    { tweetId: 2, hashtagId: 3 },
    { tweetId: 2, hashtagId: 4 },
    { tweetId: 3, hashtagId: 5 },
    { tweetId: 3, hashtagId: 6 },
    { tweetId: 4, hashtagId: 7 },
    { tweetId: 4, hashtagId: 8 },
  ]);
};
