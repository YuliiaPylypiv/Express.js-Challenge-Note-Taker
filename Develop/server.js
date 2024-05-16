// make express
const express = require('express');

// make server to use routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// make a server
const app = express();

// get PORT
const PORT = process.env.PORT || 3001;

// work on "request-response"
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// adding listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});
