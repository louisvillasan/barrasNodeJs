const express = require('express');
const routes = require('./routes/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler.js')

const app = express();
const port= 3002;
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

require('./auth/')


routes(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
console.log('Mi port' +  port);
});
  