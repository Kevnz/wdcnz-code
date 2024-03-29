var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [
  {author: "Kevin Isom", text: "This is one comment"},
  {author: "Walter Rumsby", text: "This is *another* comment"}
];

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);

console.log('Server started: http://localhost:3000/');
