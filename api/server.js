const server = require('./app');
const x = 2;
const port = 9000;

server.listen(port, () => console.warn('server run on **9000***'));
