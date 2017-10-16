const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require("./dealers.json");


app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    console.log(data);
    res.render('pages/index');
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
