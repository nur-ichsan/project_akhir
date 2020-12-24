//load modules
var express = require('express');
var bodyParser = require('body-parser');
const arsite = require('./router');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static('public'));

//Initiate bodyParser to parse request body
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Routes
app.use('/', arsite);
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/abjad', (req, res) => {
//   res.render('abjad');
// });

// app.get('/standard', (req, res) => {
//   res.render('standard');
// });

// app.get('/translasi', (req, res) => {
//   res.render('translasi');
// });

// app.get('/sixkey', (req, res) => {
//   res.render('skeypage');
// });

// Run server
console.log('Server is listening...');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
