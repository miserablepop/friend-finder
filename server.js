// Required dependencies 
const express = require('express');
var path = require('path');


// Set port to 8080
const PORT = process.env.PORT || 3000;

// Configure the Express application
const app = express();

// Public directory to access CSS file
// app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.static('./app/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Including API and HTML routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Start listening on port 8080
app.listen(PORT, function(){
    console.log('Server is listening on PORT: ' + PORT);
});

