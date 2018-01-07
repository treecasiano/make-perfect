const express = require('express');
require('./services/passport');

const app = express();

// this file returns a function which we can immediately invoke 
// and pass the app object into it
require('./routes/authRoutes')(app);


// temp route
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);