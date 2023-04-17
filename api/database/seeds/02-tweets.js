/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tweets').del();
  await knex('tweets').insert([
    {
      id: 1,
      userId: 1,
      content: 'Just finished a long hike in the mountains! #hiking #nature',
      likes: 10,
      retweets: 2,
    },
    {
      id: 2,
      userId: 2,
      content:
        'Working on a new project using React and Node.js. #webdevelopment #javascript',
      likes: 5,
      retweets: 1,
    },
    {
      id: 3,
      userId: 1,
      content:
        'Excited to attend the upcoming tech conference! #techconference #networking',
      likes: 2,
      retweets: 0,
    },
    {
      id: 4,
      userId: 2,
      content:
        'I adopted a new puppy today! Meet Luna. #puppylove #dogsofinstagram',
      likes: 15,
      retweets: 3,
    },
  ]);
};
