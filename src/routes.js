let express = require ('express');
let routes = express.Router();
let UserController = require('./controllers/UserController');
let uploader = require('./uploader.js');

routes.use(uploader);

routes.get('/', function(req, res) {
    res.render('index.hbs');
});

//app.get('/upload', (req, res) => {
  //res.render('upload', { uploader});
//});
// routes.post('/users', UserController.store);

module.exports = routes;