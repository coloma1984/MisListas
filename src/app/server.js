const express = require('express');
const path = require('path');

const app = express();

/*app.use(express.static(__dirname+'/dist/MisListas'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/MisListas/index.html'));
});*/
app.use(express.static(__dirname, 'dist', {index: false}));

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(process.env.PORT || 8080);

console.log('Console Listening'); 
