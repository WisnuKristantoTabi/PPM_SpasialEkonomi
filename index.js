const express = require('express')();
var http = require('http').Server(express);
const port = process.env.PORT || 3000;
const regis = require('./register');
bodyParser = require('body-parser');
//var models=require('./module.js');
//express.use()
express.use('/api/v1/',regis());
//express.use(express.static('gambar'));
express.get('/', function(req, res){
  res.sendFile(__dirname+'/error.html');
});

express.get('/home', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

http.listen(port, function(){
  console.log(port);
});
