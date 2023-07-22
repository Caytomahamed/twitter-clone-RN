const userHelper = require('../helpers/userHelperFunctions');
const helperFactory = require('../helpers/handlerFactory');
const bcrypt = require('bcrypt')

/**
 * Model: select all  records in .
 *
 * @returns {object} the record.
 */

exports.findAll = () => userHelper.selectBy();

/**
 * Model: select  records in database By ID.
 *
 * @param {Number} id - use to filter the records.
 * @returns {object} the record.
 */
exports.findById = (id) => helperFactory.getOne('users', 'users.id', id);

/**
 * Model: select  records in database BY FILTER.
 *
 * @param {object} filter - the table filter coditin and wich field we will filter.
 * @returns {object} the record
 */
exports.findOne = (filter) => userHelper.selectBy(filter);

/**
 * Model: create new records in database
 *
 * @param {object} user - the data we need to  create/insert.
 * @returns {object} a new record.
 */
exports.create = (user) => userHelper.createUser(user);

exports.findByIdandUpdate = (id,changes) => helperFactory.updateOne({
    table:"users",
    condition:"id",
    getById:this.findById,
    changes,
    id
})

/**
 * Model: check if password is correct
 *
 * @param {string} password - this the password we checked
 * @param {string} userPassword - this the stored one .
 * @returns {boolean} true if same or false
 */

exports.correctPassword = async (password, userPassword) => {
    return await bcrypt.compare(password,userPassword)
}