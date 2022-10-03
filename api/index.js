const data = require("./recipesV2.json");
const dataOriginal = require("./recipes.json");
const app = require('express')();
// const { v4 } = require('uuid');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/api', (req, res) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Allow-Credentials', true);
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send(dataOriginal);
});

app.get('/api/v2', (req, res) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Allow-Credentials', true);
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send(data);
});


module.exports = app;