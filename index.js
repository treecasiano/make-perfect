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

app.listen(process.env.PORT || 5000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });