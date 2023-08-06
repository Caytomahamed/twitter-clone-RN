const db = require('../../database/dbConfig');
const bcrypt = require('bcrypt');
const email = require('../../utils/email');
const AppError = require('../../utils/appError');

/**
 * select all records in database
 *
 * @returns {object} the all records
 */
const select = () => {
  return db('users')
    .join('roles as r', 'users.roleId', '=', 'r.id')
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
exports.selectBy = async filter => {
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
exports.selectById = async id => {
  return select().where(`users.id`, id);
};

/**
 * create new record in database
 * @exports
 * @param {object} newData - this record data
 * @returns {object} the new record
 */
exports.createUser = async user => {
  // const hash = bcrypt.hashSync(user.password, 12);

  const [id] = await db('users').insert({
    email: user.email,
    name: user.name,
    birthdate: user.birthdate,
  });

  return this.selectById(id);
};

const generateVerificationCode = () => {
  return Math.floor(Math.random() * 999999 + 100000);
};

const checkVerificationCodeExpire = expiredTime => {
  const timeNow = new Date().getTime();
  return timeNow > expiredTime.getTime() + 10 * 60 + 1000; // +10min
};

// send verification code

exports.sendVerificationCode = async (user,next) => {
  try {
    if (!checkVerificationCodeExpire(newUser.created_at)) {
      return next(
        new AppError(
          'Your verification code Expired.Please Try again or Resent!',
          401
        )
      );
    }
    const code = generateVerificationCode();
    const options = {
      email: user.email,
      subject: 'Account Verification Code (valid for 10 min)',
      message: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Account Verification Code</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 4px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          h1 {
            color: #333333;
            margin-top: 0;
          }

          p {
            color: #666666;
            line-height: 1.5;
          }

          .verification-code {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 4px;
            font-size: 18px;
            margin-bottom: 20px;
          }

          .button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 16px;
          }

          .button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Account Verification Code - Action Required</h1>
          <p>Dear ${user.name},</p>
          <p>Thank you for choosing our platform! To ensure the security of your account, we are implementing an additional layer of protection by introducing an account verification process.</p>
          <p>As part of this process, we have generated a unique verification code for you:</p>
          <div class="verification-code">${code}</div>
          <p>Please use this code to complete the verification process and gain full access to your account.</p>
          <p>Please note that the verification code is time-sensitive and will expire after 10 min. If the code expires, you will need to request a new one.</p>
          <p>If you did not initiate this verification process, please contact our support team immediately at twitter@example.tw. We take account security seriously and will investigate any suspicious activity promptly.</p>
          <p>Thank you for your cooperation in helping us maintain a secure environment for all our users.</p>
          <p>Best regards,<br>twitter clone</p>
          <p>twitter@example.tw</p>
        </div>
      </body>
      </html>`,
    };
    await email.sendEmail(options);
  } catch (error) {
    return next(
      new AppError(
        'There was an error sending the email. Try again later!',
        500
      )
    );
  }
};
