// Dependencies
const express = require('express');

// Port 
const PORT = process.env.PORT || 8080;

// Express setup 
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars setup 
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
const routes = require('./controllers/burgers_controller');

app.use(routes);

// Starts server to listen to requests
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
