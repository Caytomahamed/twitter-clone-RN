/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('follows').del();
  await knex('follows').insert([
    { id: 1, followerUserId: 1, followedUserId: 2 },
    { id: 2, followerUserId: 2, followedUserId: 1 },
  ]);
};
