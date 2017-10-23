const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require("./data/dealers.json");

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {
      data: data
    });
});

app.listen(port, function() {
});
