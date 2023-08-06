const db = require('../../database/dbConfig');
const bcrypt = require('bcrypt');

/**
 * select all records in database
 *
 * @returns {object} the all records
 */
const select = () => {
  return db('users')
    .join('roles as r', 'users.roleId','=', 'r.id')
    .select(
      'users.id as id',
      'username',
      'users.name',
      'email',
      'password',
      'profilePicture',
      'bio',
      'birthdate',
      'passwordChangeAt',
      'r.name as role',
      'created_at',
      'updated_at'
    );
};

/**
 * filter record in database
 * @exports
 *
 * @param {object} filter - this filter condition and field/column
 * @returns {object} the filter record
 */
exports.selectBy = async (filter) => {
  if (filter) {
    return select().where(`${filter.condition}`, filter.field);
  }
  return select();
};

/**
 * select  record in database by Id
 * @exports
 *
 * @param {number} id - this id condition to get a row
 * @returns {object} the  record has this id
 */
exports.selectById = async (id) => {
  return select().where(`users.id`, id);
};

/**
 * create new record in database
 * @exports
 * @param {object} newData - this record data
 * @returns {object} the new record
 */
exports.createUser = async (user) => {
  // const hash = bcrypt.hashSync(user.password, 12);
 
  const [id] = await db('users').insert({
    email: user.email,
    name:user.name,
    birthdate:user.birthdate
  });

  return this.selectById(id);
};
