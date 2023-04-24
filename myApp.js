const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet.hidePoweredBy()) //hide the page from see what technology is used on the server
app.use(helmet.frameguard({action:'deny'})) // deny all the frame and iframe to this server
app.use(helmet.xssFilter()) // deny the croos-site scripting
app.use(helmet.noSniff()) // deny the changes in transit of the content-type header
app.use(helmet.ieNoOpen()) // prevent from internet explorer to open html content of the webpage













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
