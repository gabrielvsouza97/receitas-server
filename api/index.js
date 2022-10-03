const data = require("./recipesV2.json");
const app = require('express')();
// const { v4 } = require('uuid');



app.get('/api', (req, res) => {
  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Allow-Credentials', true);
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.send(data);
});



module.exports = app;