const serverless = require('serverless-http');
const express = require('express');
const indexRouter = require('./controller/index');
const EventHandle = require('./src/Listener/EvenHandler');
const models = require('./models')

EventHandle();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.err = req.app.get('env') === 'development' ? err : {};

  res.status(err.httpCode || 500);
  res.json({ err });
})

// exports.handler = serverless(app)
models.sequelize.sync({ force: false })

app.listen(3000, console.log(3000))