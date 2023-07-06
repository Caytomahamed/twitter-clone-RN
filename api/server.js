require("dotenv").config({path : './.env'});

// NOTE: UncaughtException accurs inside middleware in production mode error become a global erro
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🔥 Shutting down...');
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

const server = require('./app.js');
const port = process.env.PORT || 9090;
server.listen(port, () => console.warn(`server run on **${port}***`));

// unhandledRejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION! 🔥 Shutting down...');
  console.log(err.name, err.message, err.stack);

  listenServer.close(() => {
    process.exit(1);
  });
});
