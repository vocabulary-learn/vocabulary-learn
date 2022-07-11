/*var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
*/
var express = require('express');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
app = express();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
