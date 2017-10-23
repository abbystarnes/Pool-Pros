const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const data = require('./data/dealers.json');

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {
    data,
  });
});

app.listen(port, () => {
});
