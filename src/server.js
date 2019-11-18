let express = require('express');
let mongoose = require('mongoose');
let routes = require('./routes');
let server = express();
let port = process.env.PORT || 3000;



mongoose.connect('mongodb+srv://admin:11235813@cluster0-evimz.mongodb.net/webProject?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true});

server.use(routes);

server.listen(port, err => {
  console.log(`Server is listening on ${port}`);
});
