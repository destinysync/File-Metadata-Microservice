var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var storage =   multer.memoryStorage();
var upload = multer({ storage: storage }).single('file');

app.get('/',function(req,res){
      res.sendFile(process.cwd() + '/public/index2.html');
});


app.post('/',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.send('File Size: ' + req.file['size'].toString() + " bytes");
    });
});

var port = process.env.PORT || 8080;

app.listen(port,function(){
    console.log("Working on port 8080");
});