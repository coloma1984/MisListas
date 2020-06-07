const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname, 'dist', {index:false}));
app.get('',function(req,res){
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
//app.get('/',function(req,res){
//    res.sendFile(path.join(__dirname, 'src', 'index.html'));
//});
//app.use((req, res)=>res.sendfile(__dirname + '/src/index.html'));


app.listen(port);

console.log('Console Listening'); 
