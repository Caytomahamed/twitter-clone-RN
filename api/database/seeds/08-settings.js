/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('settings').del();
  await knex('settings').insert([
    {
      id: 1,
      userId: 1,
      darkMode: true,
      notifications: true,
    },
  ]);
};
