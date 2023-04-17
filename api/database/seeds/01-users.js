/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('roles').del();
  await knex('roles').insert([{ name: 'admin' }, { name: 'user' }]);
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      username: 'john_doe',
      email: 'john_doe@example.com',
      password: 'password123',
      profilePicture:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
      bio: 'Tech enthusiast | Basketball fan 🏀 | Foodie 🍔🍟',
      name: 'John Doe',
      birthdate: '1990-01-01',
    },
    {
      id: 2,
      username: 'jane_doe',
      email: 'jane_doe@example.com',
      password: 'password123',
      profilePicture:
        'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
      bio: 'Coffee lover ☕️ | Travel enthusiast ✈️ | Bookworm 📚',
      name: 'Jane Doe',
      birthdate: '1995-05-15',
    },
  ]);
};
