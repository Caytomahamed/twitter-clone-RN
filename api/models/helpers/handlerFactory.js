const db = require('../../database/dbConfig');
const bcrypt = require('bcrypt');

/**
 * HandleHepler: get a record in database
 * @exports
 *
 * @param {string} table - the table that insert to record
 * @param {object} newData - this record data
 * @param {string} column - column use for fillter
 * @returns {object} the record
 */
exports.getAll = async ({ table }) => {
  return await db(`${table}`);
};

/**
 * HandleHepler: get a record in database
 * @exports
 *
 * @param {string} table - the table that insert to record
 * @param {object} newData - this record data
 * @param {string} column - column use for fillter
 * @returns {object} the record
 */
exports.getOne = async ({ table, column, id }) => {
  console.log(`${table} ${column} ${id}`);
  return await db(`${table}`).where(`${column}`, id);
};

/**
 * HandleHepler: create new record in database
 * @exports
 *
 * @param {string} table - the table that insert to record
 * @param {object} newData - this record data
 * @param {string} column - column use for fillter
 * @returns {object} the new record
 */
exports.createOne = async ({ table, newData, column }) => {
  const [id] = await db(`${table}`).insert(newData);
  return this.getOne(table, column, id);
};
/**
 * HandleHepler: update record in database
 * @exports
 *
 * @param {string} table - the table that update to record
 * @param {string} condition - this record data
 * @param {Function} getById - column use for fillter
 * @param {object} changes - new data
 * @param {number} id - id of the document
 * @returns {object} the new record
 */
exports.updateOne = async ({ table, condition, getById, changes, id }) => {
  console.log("🧣",changes);
  if (changes.password) {
    changes.password = bcrypt.hashSync(changes.password, 12);
  }
  await db(`${table}`).where(`${condition}`, id).update(changes);
  return getById(id);
};
