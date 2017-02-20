let app = require('./src/app.js');
let http = require('http');
let logger = require('./src/utils/logger.js');

const port = 3000;
app.set('port',port);
let server = http.createServer(app);
server.listen(port);

server.on('listening',onListening);

function onListening() {
  let address = server.address();
  let bindAddress = typeof address === 'string' ? 'pipe ' + address
      : 'port ' + address.port;
  logger.info('Listening on ' + bindAddress);
}
