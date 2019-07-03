const express = require('express');
const app = require('express')();
var http = require ('http').Server(app);
const port = process.env.PORT || 3000;
//var models=require('./module.js');

app.use(express.static('gambar'));
app.get('/', function(req, res){
  res.sendFile(__dirname+'/error.html');
});


http.listen(port, function(){
  console.log(port);
});
