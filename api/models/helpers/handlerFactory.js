const db = require('../../database/dbConfig');

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
