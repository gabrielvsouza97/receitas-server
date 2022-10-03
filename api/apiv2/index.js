const data = require("./recipesV2.json");
const dataOriginal = require("./recipes.json");
const app = require('express')();
// const { v4 } = require('uuid');

app.get('/apiv2', (req, res) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Allow-Credentials', true);
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send(data);
});


module.exports = app;