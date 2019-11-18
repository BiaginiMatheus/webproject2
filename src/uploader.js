let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
let multer = require('multer');
let upload = multer({ dest: '/public/uploads' });
let images = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', express.static(path.join(__dirname, 'public')));

//app.use('/upload', express.static(__dirname + '/public/uploads'));

app.get('/upload', (req, res) => {
  images = getImagesFromDir(path.join(__dirname,'/public/uploads'));
  res.render('upload.hbs', {images});
});

app.post('/upload', upload.single('arquivo'), (req, res) => {
    images.push(req.file.filename)
    res.redirect('/upload');
});

function getImagesFromDir(dirPath){
    let allImages = [];
    let files = fs.readdirSync(dirPath);
    for(file of files){
      let fileLocation = path.join(dirPath, file);
      var stat = fs.statSync(fileLocation);
      if(stat && stat.isDirectory()){
        getImagesFromDir(fileLocation);
      }else if (stat && stat.isFile()){
        allImages.push('img/'+file);
      }
    }
    return allImages;
}

module.exports = app;