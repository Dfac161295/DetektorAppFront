const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/DetektorApp'));
app.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.sendFile(path.join('dist/DetektorApp/'));
});

app.listen(process.env.PORT || 8080);